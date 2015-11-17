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
