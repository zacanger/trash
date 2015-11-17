////////////////////////////////////////////////////////////////////////////////
// Queries
////////////////////////////////////////////////////////////////////////////////

//find
Person
.find({
  occupation: 'engineer'
})
.exec(function(err, person) {
  //do this next
});

//findOne
Person
.findOne({
  email: 'cahlan@gmail.com'
})
.exec(function(err, person) {
  //do this next
});

//select
Person
.findOne({
  email: 'cahlan@gmail.com'
})
.select('_id email')
.exec(function(err, person) {
  //do this next
});
//--why would we use select? speed and efficiency--

//using where, limit, and sort
Person
.find()
.where('role').equals('admin')
.where('age').gt(30)
.limit(10)
.sort(-'name')
.exec(function(err, persons) {
  //do this next
});


////////////////////////////////////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////////////////////////////////////
var schema = new mongoose.Schema({
	name: String,
	age: Number
});
schema.pre('save', function(next) {
	this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
	next();
});


// bcrypt

// Create a user schema with a username and password. Implement simple security on the user object by adding a hash and a salt using the bcrypt-nodejs.
var schema = new mongoose.Schema({
	username: String,
	password: String
});

schema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(12, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

// Now we have to compare passwords when a user is to log in, how would we do that?
schema.methods.comparePassword = function(pass) {
	var deferred = q.defer();
	bcrypt.compare(pass, this.password, function(err, isMatch) {
		if (err) {
			return deferred.reject(err);
		}
		return deferred.resolve(isMatch);
	});
	return deferred.promise;
};

//Usage inside a controller
User.findOne({email: req.body.email}).exec().then(function(err, user) {
user.comparePassword(req.body.password)
	.then(function(isMatch) {
		if (isMatch) {
			//log them in!
		}
	})
	.catch(function(err) {
		//no luck!
	});
});
