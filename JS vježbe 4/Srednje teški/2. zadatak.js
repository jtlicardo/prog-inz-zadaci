let f = function (arr){
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i].studiji.find(el => el.akademska_godina === "2019./2020.")){
      result.push(
        {
        ime: arr[i].ime,
        nastavna_godina: arr[i].studiji.find(el => el.akademska_godina === "2019./2020.").nastavna_godina
        }
      )
    }
  }
  return result
}

console.log(f(studenti))