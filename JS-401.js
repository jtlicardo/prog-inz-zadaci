let lista = [
  {
    ime: "Valentina",
    prezime: "Horvat",
    upisan: false
  },
  {
    ime: "Sven",
    prezime: "Tomić",
    upisan: true
  },
  {
    ime: "Leona",
    prezime: "Kovačević",
    upisan: true
  },
  {
    ime: "Leo",
    prezime: "Nakić",
    upisan: true
  },
  {
    ime: "Ivona",
    prezime: "Dragić",
    upisan: false
  },
  {
    ime: "Lucija",
    prezime: "Ćupić",
    upisan: true
  },
  {
    ime: "Petar",
    prezime: "Petrović",
    upisan: false
  },
  {
    ime: "Paola",
    prezime: "Vincetić",
    upisan: true
  },
  {
    ime: "Leonardo",
    prezime: "Pavletić",
    upisan: true
  },
  {
    ime: "Lora",
    prezime: "Bogdanović",
    upisan: false
  }
]

function provjeri(lista, str){
  for (let i = 0; i < lista.length; i++){
    if(lista[i].ime === str || lista[i].prezime === str)
      if(lista[i].upisan === true) return true
  }
  return false
}

console.log(provjeri(lista, "Lucija")) // true
console.log(provjeri(lista, "Lora")) // false
console.log(provjeri(lista, "Pavletić")) // true
console.log(provjeri(lista, "Marko")) // false