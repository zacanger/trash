/*
var counter = function(){
  for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i )
    }, i*1000 )
  }
}

Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds. */
alert("This will log '6' to the console, five times, one second apart.")
/*  Now, run the function in your console and note what happpens.
  Was your answer right or wrong? */
alert("If I was wrong, I'd never hear the end of it, I'm sure.")
/* Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) */
console.log('Since that is how I expected it to work, do I still have to fix it?')
// /// ... okay.
var counter = function () {
  var i = 0
  while (i < 5) {
    var num = function (i) {
      setTimeout(function () {
        console.log(i)
      },i * 1000)
    }
    num(i)
    i++
  }
}



