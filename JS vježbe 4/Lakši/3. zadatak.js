let f = function (arr){
  let brojac = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i].mjesto_rodenja.grad !== "Pula")
      brojac++
  }
  return brojac
}

console.log(f(studenti))