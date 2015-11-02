

## Step 5: Set up for teamTmpl file
Now is the fun part. If everything is working correctly, our team controller and team service should be set up and now all we need to do is put that data onto the view. Head over to your teamTmpl.html file and check it out.
* Notice that there are a lot of `$__FIXME__$`. All of those need to be filled in with properties that are on the teamCtrl. This could be really hard or really easy depending on how you tackle the problem. If it were me, I would console.log the $scope object to see all the properties that you're able to use.
* Fill in all the `$__FIXME__$` with the correct models. Once you do that, make sure you have http-server running and head over to localhost:8080/#/teams/utahjazz and see if everything is working as expected. If it is, great. If not, open up your console and start debugging.


## Step 6: Configure the Home Page.
Go back and check out the live example at http://tylermcginnis.github.io/nbaRoutes . Notice that each team has their own URL in the menu but also the home page is taking all three teams and comparing them side by side. Your job is to now make that possible. You'll need to edit the files in the 'home' folder and also your router in app.js to make it work as expected.
