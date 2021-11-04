let f = function (arr){
  let result = []
  let suma = 0, brojac = 0, prosjek = 0
  let ivoIvic = arr.find(el => el.ime === "Ivo" && el.prezime === "Ivić")
  let godineIvoIvic = ivoIvic.studiji

  for(let godina of godineIvoIvic){
    for(let predmet of godina.predmeti){
      suma += predmet.ocijena
      brojac++
    }
    prosjek = (suma/brojac).toFixed(2)
    result.push(
      { 
        nastavna_godina: godina.nastavna_godina,
        prosjek_ocjena: prosjek
      }
    )
    suma = 0, brojac = 0, prosjek = 0
  }

  return result
}

console.log(f(studenti))