let velicina = 8
let red = ""

for (let i = 0; i < velicina; i++){
  if (i%2 === 0){
    for (let j = 0; j < velicina; j++){
      if (j%2 === 0) red += " "
      else red += "#"
    }
    console.log(red)
    red = ""
  }
  else{
    for (let j = 0; j < velicina; j++){
      if (j%2 === 0) red += "#"
      else red += " "
  }
  console.log(red)
  red = ""
}
}