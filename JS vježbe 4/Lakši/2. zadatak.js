let pula = function (arr){
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i].mjesto_rodenja.grad === "Pula")
      result.push(arr[i].ime)
  }
  return result
}

console.log(pula(studenti))