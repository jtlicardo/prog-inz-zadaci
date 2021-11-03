let polje1 = [0, 0, 0, 0, 0, 0, 1, 0]
let polje2 = [1, 1, 0, 1, 0, 0, 0, 1]

let toDecimal = function (arr) {
  let sum = 0
  for(i = 0, j = arr.length-1; i < arr.length; i++, j--){
    sum += arr[i] * Math.pow(2, j)
  }
  return sum
}

console.log(toDecimal(polje1)) // 2
console.log(toDecimal(polje2)) // 209