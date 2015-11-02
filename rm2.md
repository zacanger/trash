

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
