let studentNames = function (arr){
  let result = []
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i].ime + " " + arr[i].prezime)
  }
  return result
}

console.log(studentNames(studenti))