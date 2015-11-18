# Quiz | VS_Theory
1. Give a business case where Mongoose would be preferred to MongoJS
1. Give a business case where MongoJS would be preferred to Mongoose


# Quiz | Schemas
1. Write a userSchema that conforms to the following property requirements:
  + moniker
    + string
    + min length of 8
    + ensure this always exists
  + hair_style
    + string
    + only allow values: "on fleek", "busy bee", "SOS"
  + facial_hair
    + boolean
    + make this 'false' if not provided
  + number_of_eyes
    + number
    + max of 3

2. Given the schema below, sort the queries in order of most efficient to least efficient:
  ``` javascript
  {
  	name: String,
  	email: String,
  	bio: String,
  	createdAt: Date,
  	age: 11
  }
  ```

  ``` javascript
  User.find({name: function(doc) { return doc.charAt(0) === 'F'; }}).exec();
  User.findOne({name: function(doc) { return doc.charAt(0) === 'F'; }}).exec();
  User.findOne({name: new RegExp('^F'}).exec();
  User.findOne({bio: new RegExp('some phrase', 'g').exec();
  User.findOne({createdAt: {'$gt': new Date(2015, 02, 12)}}).exec();
  User.findOne({age: 12}).exec();
  ```

# Quiz | Review
1. Put the following Mongo components in a hierarchy
  + Documents
  + Databases
  + Collections
2. What data structure does Mongo use to store documents?
3. Name two ways document databases(noSQL) are different than table databases(SQL)
4. Are calls from Node to Mongo synchronous or asynchronous?


# Quiz | Lifecycle
1. What are the two many phases of the mongoose lifecycle?
2. What does having multiple phases in the req/res lifecycle help us accomplish?
3. In what ways is the req/res lifecycle for mongoose similar to req/res in Express?


