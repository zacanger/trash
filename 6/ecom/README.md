eCommerce Project - Part I
=================

## Objectives

The purpose of this application is to build a simple backend using Node, Express, and MongoDB and connect it to a simple front-end Angular application.

During this project, you will solidify your understanding of the MongoDB API.  You will also be able to see how the database fits into the bigger picture of a full application.


## Resources

* [MongoJS] (https://github.com/mafintosh/mongojs)
* [MongoDB Docs] (http://docs.mongodb.org/manual/)


## The Domain

Most companies sell some sort of product and service. For this project we will simulate buidling an eCommerce application.  We will build this project over the course of the next three days.

Today we are going to set up our Node application, set up a basic API, add functionality to do CRUD actions with products, and create a simple front-end interface to be able to create, read, update, and delete products.

## Begin

### Step 1: Set up Express app

Set up your Node app. For this project, use MongoJS to work with MongoDB. Feel free to use any other modules or libraries that you feel will help.

**Breakpoint**: You should be able to initialize your application and connect to MongoDB without errors.

### Step 2: Create Express API

Create endpoints to create, read, update, and delete products.  Feel free to refer back to the mini-project from earlier today.  It will be a very similar process

**Breakpoint**: You should be able to hit each of your endpoints without error, and see any parameters or queries that you're sending along the way.  Check with `console.log` in your endpoint handlers. *Note*: We haven't hooked up to Mongo yet.  This is just to test our Express API.

### Step 3: Connect API to Mongo

Connect your Express API to Mongo. After your request to Mongo is done, send a response back to the client.

Once again, this is going to be very similar to what we did in the mini-project earlier today.  Feel free to refer back to that code for guidance.

**Breakpoint**: You should be able to hit an endpoint and have it touching your database (creating, reading, updating, or deleting a product in Mongo).  Use POSTMan to hit your endpoints.  You should be able to get a response back in POSTMan, and be able to see your data being manipulated in your database.  You can check your database via the terminal or RoboMongo.

### Step 4: Create Front-end Interface

Feel free to set up your front-end however you like.  The only stipulations is that you should have a main view where you can see all of the products, and an admin view(s) where you can create, edit, or delete products.  Don't worry about authentication or protecting your routes at this point.  If you have time, start to set up your front-end application as you think an eCommerce site should be organized.  Introduce some basic styling as well.

**Breakpoint**: At this point, you should be able to go to the main view and see all of the products that are in your database.  You should also be able to go to the admin view, where you can create, update, or delete products.  As you use this interface, you should be able to get responses from the server, and see the data being changed in the database.  Use the terminal or RoboMongo to check and make sure your data is being manipulated correctly.

==========

## End Day 1

Congrats!  You've just created a skeleton eCommerce application.  Over the next couple of days we will be adding users and orders to our application to make it a full eCommmerce site.


-----------




eCommerce Project - Part II
=================

## Objectives

The purpose of this application is to build a simple backend using Node, Express, and MongoDB and connect it to a simple front-end Angular application.

During this project you will practice using an ORM (Mongoose) to work with your database.  You will also solidify your understanding of models, schemas, middleware, and indexing.

## Resources
* [Mongoose] (http://mongoosejs.com/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt) or [Bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) for Windows users

## The Domain

Most companies sell some sort of product and service. For this project we will simulate buidling an eCommerce application. We will finish this project over the next two days.

Today you are going to convert the current Mongo functionality to use Mongoose.  You will be creating a Product model and replacing the current product functionality with that model.

Use this README for instructions today, but use your codebase and push to your repository from day one.

### Step 1: Set up Mongoose

At your application's root folder, run the following command via command line: `npm uninstall --save mongojs`.  This will remove mongojs from your node_modules folder and from your package.json.  Remove or comment out any logic related to MongoJS.

**Breakpoint**: After removing everything MongoJS related, you should be able to start up your server and run it without any errors.

After MongoJS is removed, install Mongoose and follow the [instructions](http://mongoosejs.com/docs/connections.html) to connect to MongoDB.  In your code, connect to Mongo after your Express app has started listening.

**Breakpoint**: After setting up Mongoose, you should be able to listen with your Express app and with Mongoose.  The Mongoose connection method takes a callback as the last argument.  That callback sends one argument, `error`.  `console.log` the `error` parameter.  If it's undefined, you've connected correctly. See [this SO](http://stackoverflow.com/questions/6676499/is-there-a-mongoose-connect-error-callback) answer for an example.


### Step 2: Create Product Model

Remove or comment out the logic from your endopints that handle creating, reading, updating, and deleting products.  You are going to create a Mongoose Product model and do your CRUD actions that way.

Create a new Product schema and model.  Give it the following fields:

 - **Title**: This will be the title of the product
  - String
  - Unique
  - Required
  - Index
 - **Description**: This will describe your product
  - String
  - Required
 - **Price**: This will be the price of your product
  - Number
  - Required
  - Minimum of 0

Feel free to add any additional fields you feel are necessary.

Now go to each of your product endpoints and put the necessary Mongoose logic to [Create](http://mongoosejs.com/docs/api.html#model_Model.create), [Read](http://mongoosejs.com/docs/api.html#model_Model.find), [Update](http://mongoosejs.com/docs/api.html#model_Model.update) and [Delete](http://mongoosejs.com/docs/api.html#model_Model.remove) products. Refer to those links for documentation.

*NOTE*: Remember to keep your code looking clean and neat.  It would be wise for you to outsource the logic from each of your endpoints to a product controller or something similar.  You should also outsource your schema and model declarations to a Product file.  If you need more guidance on how Node's require and export system works, check out [this](http://openmymind.net/2012/2/3/Node-Require-and-Exports/) blog post.

**Breakpoint**: At this point you should be able to manipulate the product data via your Express endpoints just like you could when MongoJS was installed.  Test this using POSTMan and the command line or RoboMongo.  After you test the endpoints, go to your front-end product interface (if you were able to build it yesterday) and make sure that the interface still works and manipulates the data like you expect. You may have to update your data models on the front-end to match the model we just set up with Mongoose.

The next step will integrate your backend to the front-end application that you built yesterday.  You will also expand the application to include new functionality.

### Step 3: Connect Front-End

Connect your front-end to your server.  Again, you are free to do this how you like.

Make sure that you have an interface where users can view products and add them to their cart.  Tomorrow you'll add the actual back-end functionality, but it will give you a head start if you can build the interface today.

**Breakpoint**: You should now be able to see all of the products on the front-end.

Once you've finished the front-end, take some time to style your app and make it user-friendly.  Tomorrow you will finish the app by adding a a cart to the user, allow them to check out, and keep track of their current and past orders.


------------------




eCommerce Project - Part III
=================

## Objectives

The purpose of this application is to build a simple backend using Node, Express, and MongoDB and connect it to a simple front-end Angular application.

During this project you will use Mongoose to create relationships between multiple sets of data.

## Resources
* [Mongoose] (http://mongoosejs.com/)

## The Domain

Most companies sell some sort of product and service. For this project we will simulate buidling an eCommerce application. We will finish this project over the next two days.

Today you are going to create two new schemas, one for Orders and one for Carts.  You are also going to create a relationship between Carts and Products using a reference, a relationship betwen Orders and Products using embedding, and a relationship between Orders and Users using reference.

Use this README for instructions today, but use your codebase and push to your repository from days one and two.

### Step 1: Create new Schemas

Create a schema for orders.  Add whatever fields you feel it might need.  Remember, orders will have two relationships: a reference to a user, and embedded products.

Create the Order model with the schema and export it.

Create a schema for carts.  Add whatever fields you feel it might need.  Remember, carts will have one relationship: a reference to products.

Once you've created your schema, export it (NOT as a model).  Then go to your User model and use the cart schema for the User's cart field.

*Note*:  This may seem confusing.  Technically, you could just define the new fields in the User's schema.  But it's important to know that a schema is just a pattern or blueprint to follow.  It can be used in multiple models.  For clarification on the difference between a schema and a model see [this SO post](http://stackoverflow.com/questions/22950282/schema-vs-model).

**Breakpoint**: You should be able to spin up your server without any errors.  You should also be able to test that your new Order model and new cart schema are working.  You can either create a dummy endpoint and hook it up to your models, or write a script in your server.js file and run it on server load.  Test and make sure that you can create new Orders and add items to a user's cart.

If you've passed this breakpoint, then you have essentially set up your relationships.  Good work!  Let's walk through how you are going to reason about these relationships.

### Step 2: Create Endpoints

Create the following Express endpoints:
 * **POST** `/api/order`
  * **GET** `/api/order`
	 * **POST** `/api/cart`
	  * **PUT** `/api/cart`

		*Note*: If you feel comfortable with everything, feel free to create your own endopints with their own functionality.

		### Cart

		With the cart POST endpoint, you will expect a request query of `user_id` that will take the id of a user.  In the handler, get the user.  The request will have a JSON of the product that is being added to the cart, including a quantity.  Add that item to the user's cart, then save the user.

		*Note*: At some point you may realize that the models you created earlier are not appropriate for what we're trying to do.  Feel free to go back and change your models to make them work.

		The cart PUT endpoint will be similar, but is intended to change the quantity of a particular item in the cart. If the new quantity is 0, simply remove the item from the cart altogether.

		*Note*:  You'll see that no GET endpoint was created.  Instead, we will simply send the entire cart whenever the user is retrieved.  Look at Mongoose's [.populate()](http://mongoosejs.com/docs/populate.html) method.  Wheverver you are getting your user, add the .populate to populate your cart before sending it to the client.

		### Order

		With the order POST endpoint, send a request query of `user_id` that will include the id a user.  In the handler, get the user's cart and create a new order with the products in the cart.  Make sure you use the user's id to reference from the order to the user. After successfully creating the order, empty the user's cart.

		**Breakpoint**:  Create a new user and add several items to their cart.  Then take their id and hit the `/api/order` endpoint with it (via POSTMan or your Angular application).  It should create a a new order and empty the user's cart.  Use RoboMongo or the command line to check the data.

		With the order GET endpoint, simply accept a reqeust query of whatever orders you're searching for.  For example, if you were looking for all orders placed on a certain day, the URL might look like this: `/api/order?date=07/09/16`.  If you were looking for a specific user's orders, it might look like so: `/api/order?user=o09f6d8fnn7df7n9joj`.  Look at Mongoose's [query](http://mongoosejs.com/docs/queries.html) documentation if you need some examples.

		**Breakpoint**: You should be able to test your order GET endpoint via POSTMan or your app.  Try a few different queries.  The most important one is the user query.

		If you've passed this last breakpoint, then  you've finished the backend of your application.  Hurrah!  Now it's simply a matter of tying in your endpoints with your Angular application.

		### Step 3: Connect front-end

		Take some time to connect your Express API to your Angular application.  You have a lot of freedom in how you do that.  Make sure that you have the ability to add items to a user's cart (you might create a dropdown menu to select a user, since there is no authentication yet), view the cart, create a new order, and view that order.  If you finish that with ample time, add some extra styling and/or functionality.

		**Breakpoint**: You should be able to do those things ^^.

		If you pass that breakpoint, then congrats!  You've just built your first full-stack application!  What you've just done is the basics of building any CRUD app.



