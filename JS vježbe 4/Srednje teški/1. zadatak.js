let f = function (arr){
  result = []
  for(let i = 0; i < arr.length; i++){
    result.push({ime: arr[i].ime, godine_studija: arr[i].studiji.length})
  }
  return result
}

console.log(f(studenti))