 'wins' property to the results array and set it equal to our wins variable and let's also set a 'losses' property on our results array and set it equal to our losses variable. I know this is a little weird because we're not adding items to our array like we usually do but instead we're adding properties to this array. It's a good reminder that arrays are just objects. Once you add the wins and losses property, go ahead and resolve our deferred object we made earlier with our results array.
  - Make sure that our getTeamData method has a return! Because we are modifying the data we receive from api.parse.com before resolving it, we will need to return the promise on the deferred object rather than returning the $http call like we did in our addNewGame method.

Now that we've set up those two methods on our teamService object, we can close teamService. We won't need to modify this file again but we will need to call the methods we set up in teamService.js later.


## Step 3: Start to Configure the Router
As I mentioned in step 1, setting up the router is perhaps the most important part of this entire application. Our router is going to decide which template and controller get used based on what URL we're currently on.
* Open up your app.js file. Modify your router so whenever the user is at the index page (/), have the templateUrl be js/home/homeTmpl.html and the controller be 'homeCtrl'. We will complete the rest of this route a little later.
* Now we're going to set up the individual team's routes. It's important to understand that all three teams (Jazz, Lakers, Heat) are going to be using the same Controller and the same Template.
  - Whenever the user goes to '/teams/:team' use 'js/teams/teamTmpl.html' as the templateUrl and use 'teamCtrl' as the controller.
  - Take note of the /:team that's in the URL. Remember, that makes it so your application is able to keep track of certain states based on which team is located in the URL. For example, when the user visits yoursite.com/teams/utahjazz, in our controller $routeParams.team is going to be equal to 'utahjazz'. This allows us to then pass in the specific team into our getTeamData method that's on our service and get only that teams data. Also note that the menu in our index.html page have links that point to the different teams (which will be caught by :team in our router).
  - Now that our templateUrl and our controller are set up for the /teams/:team url, we want to have some data ready for us before that route loads. In this case, that data we want available in our controller is the specific teams data. Below where we specify the controller create a resolve blog with the key being `resolve:` and the value being an object.
    * The resolve object is going to have a method called `teamData:` which returns the promise that gets returned from `teamService.getTeamData()`. That was really wordy I know. Look up the syntax for how resolve works. What's going to happen is we're going to call the getTeamData method on our teamService service. That will return a promise which will then be resolved and the data we get back from that promise will then be available to us in our controller as teamData, so head over to your teamCtrl.js file and add teamData as a parameter which is passed into your controller.
    * You might have noticed that we're calling the getTeamData method on our teamService service but that method requires a parameter which should be the specific team whose data we want, ie utahjazz, miamiheat, or losangeleslakers. Remember, we know which team's data we want to get based on the :team parameter in our route. We get access to that variable in our resolve block by using $route.current.params.team. So now go ahead and pass $route.current.params.team into your getTeamData method call.
* Let's make one last change to the router for now. Add a .otherwise block so that the router will redirect to the index page if the route the user types in is not recognized.


## Step 4: Configure the teamCtrl.js File
* Head over to your teamCtrl.js file. Notice we should have four things that are being passed into the controller. $scope, $routeParams to give us access to :team in the url, teamService which gives us access to getting the teams data and adding new games, and teamData which we should have added last step which gives us the data the is being returned from teamService.getData in our resolve block in the app.js file.
* First thing we want to do is get the data (teamData) that is being resolved in our app.js file and put that data on the scope. So in your controller, set teamData (that is being passed in) equal to $scope.teamData so now that data is on our scope and can be accessed in the view.
* Once you do that create a property on the $scope object called newGame and set it equal to an empty object. This is the object that is going to be passed to teamSerivce.addNewGame later on.

* Create another property on the scope object called showNewGameForm and set it equal to false. Then create a method on our scope object called toggleNewGameForm which takes the current value of $scope.showNewGameForm and makes it the opposite of what it currently is. We're going to use both of these properties later on in our view to toggle the form to add a new game.

Now is where we want to see which team's value we should get. Remember this is entirely based on the url. If the user is at /teams/utahjazz we want to get the jazz's information. But if they're at /teams/miamiheat we want to get the heats information. Luckily we set up router so that whatever team is in the URL, that value would be the current value of $routeParams.team in our controller.
* Create an if statement and check which team the current URL is on (utahjazz, losangeleslakers, or miamiheaet). Depending on which team the URL is on, do the following for each team. Set a property on the scope called homeTeam that is equal to 'Utah Jazz', 'Los Angeles Lakers', or 'Miami Heat'. Also, (depending on which team), add a property to the scope called logoPath that points to the image of the team. For example, if $routeParams.team is equal to 'utahjazz', $scope.homeTeam is going to equal 'Utah Jazz' and $scope.logoPath is going to equal 'images/jazz-logo.png'.

Now we want to create a method on our scope object that will be called whenever someone submits a new game.
* Create a method on scope called `submitGame:`.
* First thing we want to do is take the homeTeam property that we set on the scope earlier and strip out the spaces so we can use it as an endpoint in our restAPI. Add a property onto our newGame object that is already on the scope called homeTeam and set it equal to $scope.homeTeam.split(' ').join('').toLowerCase()
* Now we want to call the addNewGame method on our teamService method. So call addNewGame and pass it $scope.newGame
* Take a look at the teamService.js file and notice what addNewGame returns.
* You should have noticed it returns a promise. That means immediately after we call addNewGame we can call .then()
* Call .then and pass it a callback function, this function is then going to call the getTeamData service passing it $scope.newGame.homeTeam. Notice what we're doing. We've added a new game to the home teams schedule and now we need to go and get the new data that's in our database.
* You should notice that the getTeamData method is also returning a promise. So just like before, call .then immediately after you call getTeamData() and give it a callback function which accepts parameter (which is going to be the data returned from the getTeamData method)
* Now we want to set a few properties on our scope based off the data we got from our promise. First, set $scope.teamData equal to the data you got back from the promise. Then, reset $scope.newGame to be an empty object, then set $scope.showNewGameForm back to false.


## Step 5: Set up for teamTmpl file
Now is the fun part. If everything is working correctly, our team controller and team service should be set up and now all we need to do is put that data onto the view. Head over to your teamTmpl.html file and check it out.
* Notice that there are a lot of `$__FIXME__$`. All of those need to be filled in with properties that are on the teamCtrl. This could be really hard or really easy depending on how you tackle the problem. If it were me, I would console.log the $scope object to see all the properties that you're able to use.
* Fill in all the `$__FIXME__$` with the correct models. Once you do that, make sure you have http-server running and head over to localhost:8080/#/teams/utahjazz and see if everything is working as expected. If it is, great. If not, open up your console and start debugging.


## Step 6: Configure the Home Page.
Go back and check out the live example at http://tylermcginnis.github.io/nbaRoutes . Notice that each team has their own URL in the menu but also the home page is taking all three teams and comparing them side by side. Your job is to now make that possible. You'll need to edit the files in the 'home' folder and also your router in app.js to make it work as expected.
