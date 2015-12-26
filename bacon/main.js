// two buttons, for rotating left and right
// getting their click event streams

function rotateLeft(pos){
  return new Vector2(pos.y, -pos.x)
}

function rotateRight(pos){
  return new Vector2(-pos.y, pos.x)
}

var lefts   = $('button.left').asEventStream('click')
  , rights  = $('button.right').asEventStream('click')
  , actions =
      lefts.map(() => rotateLeft).merge(
     rights.map(() => rotateRight)) // so wait, is typescript's lambda just an es6 arrow function?

var startDirection   = new Vector2(0,1)
  , direction        = actions.scan(startDirection, (x, f) => f(x)) // fuck yeah, love that band
  , tick             = $('#tick').asEventStream('click')
  , currentDirection = direction.sampledBy(tick)
  , startPosition    = new Vector2(0, 0)
  , position         = currentDirection.scan(
      startPosition, (x, y) => x.add(y))
  , snake            = position.slidingWindow(3)

snake.onValue(drawSnake)

position.map(Array).onValue(drawSnake)

var applePos = new Vector2(3, 3) // snakey is hungry
  , apple    = position
      .filter(p => p.equals(applePos))
      .take(1) // so, here's the first event where the snake's position is the same as the apple's position
