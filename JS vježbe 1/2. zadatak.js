inputArray = ["banaana", "jabuukka", "j1agoda", ""]

function izbrisi_suvisno (arr) {
  let result = []
  let str = ""
  for(let i = 0; i < arr.length; i++){
    let tempArr = arr[i].match(/([a-zA-Z0-9])\1*/g)
    if(tempArr === null) result.push("")
    else{
      for(let j = 0; j < tempArr.length; j++){
        if (tempArr[j].length > 1) str += tempArr[j].slice(0, 1)
        else str += tempArr[j]
      }
      result.push(str)
      str = ""
    }
    
  }
  return result
}

console.log(izbrisi_suvisno(inputArray))