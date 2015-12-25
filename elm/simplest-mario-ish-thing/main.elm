import Color            exposing (..)
import Graphics.Collage exposing (..)
import Graphics.Element exposing (..)
import Keyboard
import Time             exposing (..)
import Window

-- model

type alias Model = {
    x:Float
  , y:Float
  , vx:Float
  , vy:Float
  , dir:Direction
}

type Direction = Left | Right

type alias Keys = {x:Int, y:Int}

mario : Model
mario = {
    x   = 0
  , y   = 0
  , vx  = 0
  , vy  = 0
  , dir = Right
}

-- update

update : (Float, Keys) -> Model -> Model
update (dt, keys) mario =
  mario
    |> gravity dt
    |> jump keys
    |> walk keys
    |> physics dt

jump : Keys -> Model -> Model
jump keys mario =
  if keys.y > 0 && mario.vy == 0 then
    {mario | vy =6.0}
  else
    mario

gravity : Float -> Model -> Model
gravity dt mario =
  {}
