let string1 = "1235678"
let string2 = "9091929495"
let string3 = "102103104105106108109"

let missingNum = function (str, brojZnamenki) {
  let arr = []
  if(brojZnamenki === 1) arr = str.match(/([0-9])\1*/g)
  else if (brojZnamenki === 2) arr = str.match(/([0-9]){2}\1*/g)
  else if (brojZnamenki === 3) arr = str.match(/([0-9]){3}\1*/g)
  for(let i = 0; i < arr.length; i++){
    if(arr[i+1] - arr[i] > 1) return parseInt(arr[i])+1
  }
}

console.log(missingNum(string1, 1)) // 4
console.log(missingNum(string2, 2)) // 93
console.log(missingNum(string3, 3)) // 107