obj = {
 "prvi": 122,
 "drugi": 18,
 "treci": "NotAnInteger",
 "cetvrti": -2,
 "peti": 322,
 "sesti": 32.0
}

function f(obj){
  let arr = Object.values(obj)
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number")
      sum += arr[i]
  }
  return sum
}

console.log(f(obj))