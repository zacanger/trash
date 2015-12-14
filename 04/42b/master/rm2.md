
scope: {
 string: '@',
 link: '=',
 func: '&'
}
```

The properties on the scope object represent the attributes on the directive in the html. Our example scope object here would look something like this in the html.
`<example-directive string="a string" link="user" func="updateUser()"></example-directive>`
The hard part here is the `@`, `=`, and `&`. They each have very important and distinct meanings.
- `@` says take in my attribute value as a string.
- `=` says take in my attribute value as a two-way bound variable from the parent scope.
- `&` says take in my attribute value as a reference to a function on the parent scope.


## Step 5. &? &!?

The `'='` value on your `scope` object has created a two-way binding between `users[0]` and `currentUser`. Now let's try out the `'&'`.
- On your `home` controller add a function called `getWeather`. It takes one parameter called `city`.
- This function will make a call to a service so we'll need to create that.
- Make a weather service. Name it something cool and creative like `weatherService`.
- Inside the weather service make a function called `getWeather` that also takes one parameter, `city`.
- Make an `$http` get to this url - `'http://api.openweathermap.org/data/2.5/weather?q='`
- - Note: You will need to make an account and include your API key for this to work. See : [http://openweathermap.org/appid#use](http://openweathermap.org/appid#use)
- After the `q=` add on the `city` parameter.
  - If you want you can test this out in postman. See what kind of data you get back. If it's the weather of that city then... you win!
- Use `$q` to return a promise that only resolves with the data you want. Temperature (preferably not in Kelvin) and the weather description. Use `console.log` on the data coming from the `$http` request to get to what you want. You'll need to add both on an object that you resolve your new promise with.
- On your `home` controller have it return the result of invoking the get `getWeather` function on the service. *You should be returning a promise.*
- Now in your `home` route's HTML pass in the getWeather function to the `dirWeather` directive through an attribute called `weather-call`.
- Add the attribute to your isolate scope object.

That was a lot of linking, but let's walk through it. Your controller has a function linked to the service, which is in turn linked to your directive. So if you run the `weatherCall` function in your directive it will go through your controller to your service and then back.

Now things get a little bit tricky. Angular's way of passing along arguments through a directive to your controller are tricky, but once you understand how
to do it, it's not hard.
I'm going to give an example here of how it works.

```html
<my-directive pass-func="callFunc(data)"></my-directive>
```

Here's how it would look in your HTML. But where's the `data` supposed to be coming from? It seems that you'd rather be able to pass in data from your directive.
Well you still can, you just have to essentially tell angular what do use as an argument to replace `data` when it calls that function in your controller.
The actualy function call inside the directive will look like this.
```javascript
$scope.passFunc({data: wantedData})
```

So what you'll do is pass in an object where the property name is what the argument is named in the HTML where you call the directive.
That might sound confusing, but just look at the two code blocks above for a pattern. Note that `pass-func` becomes `$scope.passFunc` and `data` is being
replaced with `wantedData` with the `{data: wantedData}` object.
In our directive we want to replace `city` in the attribute call, for something else inside the directive. You'll follow the same pattern as above.

For now let's get things set up for that function call.
- Add to the `dirWeather` directive object a property called `controller`.
- It's value will be a function.

Yes, this is a controller specifically for your one directive. It works the same as any other controller, except you don't give it a name.
It's `$scope` object will only be accessible within an instance of your directive. Don't forget to inject `$scope` in the function.

- Inside your controller function run the `weatherCall` function with the `city` property from the `currentUser` on your `$scope`.
 - Here's where you need to make sure you've passed in a `city` argument in the attribute function call, and then replace that with your `currentUser`'s city
 using an object with a `city` property.
- The function call should return a promise, so call `.then` afterward and add the data onto your `$scope` to display both the weather and temperature of
the `currentUser`'s city. The properties can be named whatever makes sense to you.
 - You may also want to find a way to get rid of all the decimal places on your temperature.

 Now you should have everything hooked up so it shows Geoff's data and the weather data for Provo. But is that good enough?

##Step 6. Ramping up our ramp up.
 Now let's change this so it shows the weather data for whichever user we select. We're going to need to use `'&'` again.
 - Make a function on the `home` controller that takes in a parameter and sets a property on the `$scope` to be that parameter. Maybe you see where this is going.

 We want to get this function into our `dirDisplay` controller. But in order to do that we need to isolate `dirDisplay`'s scope.
 This also means we need to pass in each individual user through the `scope` object as well.
 - To make it easier on ourselves, let's pass the current user from our `ng-repeat` into our directive through a `user` attribute. This way we can leave
 our two-way bindings as they are.
 - Also pass our new function that sets our current user from our `home` controller into our directive through a `setUser` attribute.
  - You'll need to add an argument in there again. Go with `user`.

 Your scope object in `dirDisplay` should have two properties. `setUser` with the value of `'&'` and `user` with the value of `'='`.
 As before we're going to need to do some tricky stuff to get our argument back to our controller.
 - Call the `setUser` function inside our click event listener and pass in an object the sets our `user` argument to be the user on
 our directive's `scope` object. If you've forgotten this part go back up and take a look at how you did it before or the example in this README.

 Whatever user you click on now should show up in the `dirWeather` directive as the current user. But we're missing one thing, we want to be able to see
 the weather for that user too. We'll have to do one more thing that will seem a little bit tricky at first, but it's good to learn if you don't know it already
 since it's actually used quite frequently.

 We need to step up a change listener on our `currentUser` in the `dirWeather` directive. We'll use angular's `$watch` functionality. `$watch` is a method on
 your `$scope` that will watch for changes in a variable you give it. It works in two ways.
 ```javascript
 $scope.$watch('property', function(value){
   console.log("When $scope.property changes its new value is: ", value)
 });
 ```
 And
 ```javascript
 $scope.$watch(function(){
   return myVar
 }, function(value){
   console.log("When myVar changes its new value is: ", value);
 });
 ```
 - Remove the immediate function call that we have in there now. Maybe just comment it out for now because we'll use it in a bit.
 - Now call the `$watch` method on your scope and have it watch currentUser. Either way of using `$watch` is fine.
 - Have its callback run the `$scope.weatherCall` function just like you had it before.

 *One thing to note is that `$scope.$watch` will always run once to begin with. Since that's what we want here it's great, but just be aware of that.*

 If you've reached this point congratulate yourself. You've messed with some serious stuff today, namely directives. There are still a lot of things about
 directives that we can't possibly cover in a single project. If you like what we've done so far then you're in a good place to keep going. A developer
 who understands directives well can build a really clean looking code base. Just look at your `home.html`. It could have just two lines in it. If you're feeling
 good move on now to **Step 7**.

 ##Step 7. Finishing touches
 Try to work out these problems on your own.
 1. There should be a way to let the user know that the weather data is loading. Something that appears while our $http request is retrieving our data.
 2. The $http request shouldn't fire on both opening and closing a user's information.
 3. A color change for the currently active user would be nicer than showing that user's info inside the dirWeather modal. Or at least less redundant.
 4. Whatever else you want. We still haven't explored `transclusion` and `ng-transclude` so give that a try if you're feeling adventurous. Just know that
 it's a way for deciding where to put the HTML child elements of a directive. It's cool stuff that can involve some criss-crossing of scopes.
