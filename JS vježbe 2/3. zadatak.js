let polje = [1, 2, 1, 3, 1, 4, 1, 5, "a", "a", "b", "c"]

let arr_distinct = function(arr) {
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(result.indexOf(arr[i]) === -1)
      result.push(arr[i])
  }
  return result
}

console.log(arr_distinct(polje)) // [1, 2, 3, 4, 5, "a", "b", "c"]