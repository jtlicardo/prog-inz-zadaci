let studenti = [
 {
  ime: "Marko",
  prezime: "Marković",
  grad: "Pula"
 },
 {
  ime: "Iva",
  prezime: "Ivić",
  grad: "Našice"
 },
 {
  ime: "Lucija",
  prezime: "Lucić",
  grad: "Zagreb"
 },
 {
  ime: "Nikola",
  prezime: "Nikolić",
  grad: "Rijeka"
 }
]

function sadrzi (str, x) {
  if (str.toUpperCase().includes(x.toUpperCase()))
    return true
  else return false
}

function napredna_pretraga(lista, pojam) {
  let searchArr = pojam.split(" ")
  let containsAll = true;
  for(let i = 0; i < studenti.length; i++){
    for (let el of searchArr){
      containsAll = true;
      if(!sadrzi(lista[i].ime, el) && !sadrzi(lista[i].prezime, el) && !sadrzi(lista[i].grad, el)){
        containsAll = false;
        break;
      }
    }
    if(containsAll) return i;
  }
}

console.log(napredna_pretraga(studenti, "ma ić"))
console.log(napredna_pretraga(studenti, "ko lić ri"))
console.log(napredna_pretraga(studenti, "ić za"))
console.log(napredna_pretraga(studenti, "ić ko la ri"))

console.assert(napredna_pretraga(studenti, "ma ić") == 0) // → prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3) // → zadnji student
console.assert(napredna_pretraga(studenti, "ić za") == 2) // → treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3) // → zadnji student