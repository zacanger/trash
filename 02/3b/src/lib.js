/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    var newArr = [];
    var i = 0;
    do {
      newArr.push(array[i]);
      i++;
    } while ( i < n && i < array.length);
    if (newArr.length === 1) {
      return newArr[0];
    } else {
      return newArr;
    }
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    var newArr = [];
    var revArr = array.reverse();
    var i = 0;
    do {
      newArr.push(revArr[i]);
      i++;
    } while (i < n && i < array.length);
    if (newArr.length === 1) {
      return newArr[0];
    } else {
      return newArr.reverse();
    }
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        iterator(collection[key], key, collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    var flag = -1;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        flag = i;
        break;
      }
    }
    return flag;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, iterator) {
    var arr = [];
    for (var key in collection) {
      if (iterator(collection[key])) {
        arr.push(collection[key]);
      }
    }
    return arr;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, iterator) {
    var arr = [];
    for (var key in collection) {
      if (!iterator(collection[key])) {
        arr.push(collection[key]);
      }
    }
    return arr;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var newArr= [];
    for (var i in array) {
      if (newArr.indexOf(array[i]) === -1) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    var newArr = [];
    for (var i in array) {
      newArr.push(iterator(array[i]));
    }
    return newArr;
  };

  // Takes an array of objects and returns an array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var newArr = [];
    for (var i in array) {
      newArr.push(array[i][propertyName]);
    }
    return newArr;
  };

  // Calls the method named by methodName on each value in the list.

  //TODO Implement
  _.invoke = function(list, methodName, args) {
      if (typeof methodName === 'function') {
        for (var i in list) {
          methodName.apply(list[i], args);
        }
      } else {
        for (var i in list) {
            list[i][methodName](args);
        }
      }
    return list;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    var previousValue = [];
    var ini = false;
    if (!initialValue) {
      initialValue = 0;
    }
    for (var key in collection) {
      if (!ini) {
        previousValue = iterator(initialValue, collection[key]);
        ini = true;
      } else {
        previousValue = iterator(previousValue, collection[key]);
      }
    }
    return previousValue;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    var flag = false;
    for (var i in collection) {
      if (target === collection[i]) {
        flag = true;
        break;
      }
    }
    return flag;
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    for (var i in collection) {
      if (!iterator) {
        if (!collection[i]) {
          return false;
          break;
        }
      } else {
        if (!iterator(collection[i])) {
          return false;
          break;
        }
      }
    }
    return true;
  };


  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    if (!iterator) {
      iterator = function (item) {
        if (item) {
          return true;
        } else {
          return false;
        }
      }
    }
    for (var i in collection) {
      if (iterator(collection[i])) {
        return true;
        break;
      }
    }
    return false;
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function() {
    var newObj= {};
    for (var i = 0; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        newObj[key] = arguments[i][key];
      }
    }
    return newObj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    var newObj = {};
    for (var i = 0; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if(!(key in newObj)) {
          newObj[key] = arguments[i][key];
        }
      }
    }
    return newObj;
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var flag = false;
    var ans;
    return function () {
      if (flag) {
        return ans;
      } else {
        flag = true;
        return ans = func();
      }
    };
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    var memory = {};
    return function (arg) {
      if (arg in memory) {
        return memory[arg];
      } else {
        return memory[arg] = func(arg);
      }
    }
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    var args = Array.prototype.slice.call(arguments,2);
    setTimeout(function () {
      func.apply(null,args);
    } ,wait);
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
