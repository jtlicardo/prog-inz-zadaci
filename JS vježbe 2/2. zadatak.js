let polje1 = [[5, 4], [3, 2]]
let polje2 = [[12, 7], [1, 2]]

let manhattanDistance = function(arr){
  return Math.abs(arr[0][0] - arr[1][0]) + Math.abs(arr[0][1] - arr[1][1])
}

console.log(manhattanDistance(polje1)) // 4
console.log(manhattanDistance(polje2)) // 16