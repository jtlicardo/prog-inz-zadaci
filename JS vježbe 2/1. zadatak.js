let polje = ["aaa", "bbbb", "cc", ""]

let najkraci = function(arr){
  let min = arr[0].length
  let result = arr[0]
  for(let i = 1; i < arr.length; i++){
    if(arr[i].length < min && arr[i] !== ""){
      min = arr[i].length
      result = arr[i]
    }
  }
  return result
}

console.log(najkraci(polje)) // "cc"