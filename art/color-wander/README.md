this code is based on [color-wander](https://github.com/mattdesl/color-wander)

to use:
* npm i
* put some files in maps/
* node .
* open the file in output/

i've been running this hundreds of times while tweaking things a bit, changing
maps, etc. you can use this bash function:

```bash
r() {
  local i max;
  max=$1;
  shift;
  for ((i=1; i <= max ; i++))
  do
    eval "$@";
  done
}
```

like this: `r 500 node .`

in maps/ currently there's a wallpaper made from loona's (the kpop group) logo,
and some example results in output/
