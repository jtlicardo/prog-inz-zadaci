let najmladjiStudent = function (arr){
  let min = 0
  for(let i = 0; i < arr.length-1; i++){
    if(arr[i].datum_rodenja < arr[i+1].datum_rodenja)
      min = i+1
  }
  return {
    ime: arr[min].ime,
    datum_rodenja: arr[min].datum_rodenja
  }
}

console.log(najmladjiStudent(studenti))