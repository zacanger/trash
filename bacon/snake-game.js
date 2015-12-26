//
// POSITIONING
//

var size = new Pos(20, 20)

function Pos(x, y){
  this.x      = x
  this.y      = y
  this.equals = function(p){
    return this.x === p.x && this.y === p.y
  }
  this.add    = function(p){
    return new Pos(
      (this.x + p.x + size.x) % size.x,
      (this.y + p.y + size.y) % size.y)
  }
}

randomPos = function(){
  return new Pos(
    Math.floor(Math.random() * size.x),
    Math.floor(Math.random() * size.y))
}

function rotateLeft(pos){
  return new Pos(pos.y, -pos.x)
}

function rotateRight(pos){
  return new Pos(-pos.y, pos.x)
}

//
// DRAWING
//

function drawGame(size){
  var game = $('#game')
  for (var i = 0; i < size.x; i++){
    var row = $('<div class="row" />')
    for (var j = 0; j < size.y; j++){
      row.append('<span class="cell" />')
    }
    game.append(row)
  }
}

function fillCells(fooBar){
  var game = $('#game')
  return function(ps){
    game.find('.cell').removeClass(fooBar)
    for (var i in ps){
      game.find('.row:eq('+ps[i].y+')')
          .find('.cell:eq('+ps[i].x+')')
          .addClass(fooBar)
    }
  }
}

var drawApple = fillCells('apple')
  , drawSnake = fillCells('snake')

function logRestart(){
  console.log('press')
  $('#log').html('hit the spacebar to restart')
}

function logClear(){
  $('#log').html('use ← and → to drive this thing')
}

$score = $('#score')
function setScore(score){
  $score.html(score)
}

// MAKING OUR OWN COMBINATOR BY EXTENDING BACON'S PROTOTYPE
// AND ALSO THIS IS THE BIT WHERE WE MAKE THINGS CHANGE SIZE
// GOD, I'M SO LOUD. WHY AM I SO LOUD?

Bacon.Observable.prototype.slidingWindowBy = function(lenthObs){
  var self = this
  return new Bacon.EventStream(function(sink){
    var buf    = []
      , length = 0

    lengthObs.onValue(function(n){
      length = n
    })
    self.onValue(function(x){
      buf.unshift(x)
      buf = buf.slice(0, length)
      sink(new Bacon.Next(buf))
    })
    return function(){}
  })
}

Bacon.seperateBy = function(sep, obs){
  return obs().changes().concat(sep.take(1).flatMap(function(){
    return Bacon.seperateBy(sep, obs)
  }))
}

function contains(arr, x){
  for (var i in arr)
    if (arr[i].equals(x)) return true
  return false
}

//
// SSSSSSSSSSSSSNAKE
//


// polyfill bind, taken straight up from someone else's code, because really, fuck all that shit
Function.prototype.bind=Function.prototype.bind||function(b){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}var a=Array.prototype.slice,f=a.call(arguments,1),e=this,c=function(){},d=function(){return e.apply(this instanceof c?this:b||window,f.concat(a.call(arguments)));};c.prototype=this.prototype;d.prototype=new c();return d;};

_ = Bacon._ // haha, i love that he does this in the example, because watch how often we actually use this xD

function bindInputs(){
  var keys      = $(document).asEventStream('keydown').map('.keycode')
    , lefts     = keys.filter(function(x){return x === 37})
    , rights    = keys.filter(function(x){return x === 39})
    , restart   = keys.filter(function(x){return x === 32})
}
