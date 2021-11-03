let polje = [1, 2, 1, 3, "a", 1, 4, 1, 5, "a", "a", "b", "c"] 

let f = function(arr, num){
  let result = []
  let value = arr[0]
  if(arr.length === 0)
    return result
  else if (arr.filter(el => el === value).length >= num)
    result.push(value)
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === value) arr.splice(i, 1)
  }
  return result.concat(f(arr, num))
}

console.log(f(polje, 2))  // [1, 'a']