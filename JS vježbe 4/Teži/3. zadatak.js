let f = function (arr){
  let result = {}
  let arraySaPredmetima = []

  let ivoIvic = arr.find(el => el.ime === "Ivo" && el.prezime === "Ivić")
  let godineIvoIvic = ivoIvic.studiji

  for(let i = 1; i < 7; i++){
    for(let godina of godineIvoIvic){
      let predmetiSemestar = godina.predmeti.filter(el => el.semestar === i)
      for(predmet of predmetiSemestar){
        arraySaPredmetima.push(predmet.naziv_predmeta)
      }
    }
    result[i] = arraySaPredmetima
    arraySaPredmetima = []
  }

  return result
}

console.log(f(studenti))