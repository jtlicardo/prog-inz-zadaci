let prosjeci_ocjena = function (arr){
  let result = []
  let suma = 0, brojac = 0, prosjek = 0
  
  for(let student of studenti){
    let godine = student.studiji
    for(let godina of godine){
      let predmeti = godina.predmeti
      for(let predmet of predmeti){
        suma += predmet.ocijena
        brojac++
      }
    }
    prosjek = (suma / brojac).toFixed(2)
    result.push({
      ime: student.ime,
      prosjek_ocjena: prosjek
    })
    suma = 0, brojac = 0, prosjek = 0
  }
  
  return result
}

console.log(prosjeci_ocjena(studenti))