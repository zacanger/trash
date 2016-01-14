// bubble sort
var randomArray = function(size){
  var array = []
  for(var i = 0; i < size; i++){
    array.push(parseInt(Math.random() * 100))
  }
  return array
}
var bubbleSort = function(array){
  var swapped = true
  while(swapped){
    swapped = false
    for (var i = 0; i < array.length-1; i++){
      if(array[i] > array[i+1]){
        swap(i, i+1)
        swapped = true
      }
    }
  }
  function swap(a, b){
    var tmp = array[a]
    array[a] = array[b]
    array[b] = tmp
  }
}

var array = randomArray(5000)
console.log(array)
console.time('bubbleSort')
console.log('\n#########################################\n')
bubbleSort(array)
console.timeEnd('bubbleSort')
console.log('\n#########################################\n')

