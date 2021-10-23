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

function sadrzi (str, x) {
  if (str.toUpperCase().includes(x.toUpperCase()))
    return true
  else return false
}

function provjeri(lista, str, status){
  for (let i = 0; i < lista.length; i++){
    if(sadrzi(lista[i].ime, str) || sadrzi(lista[i].prezime, str))
      if(lista[i].upisan === status) return true
  }
  return false
}

console.log(provjeri(lista, "Leona", true)) // true
console.log(provjeri(lista, "LEON", true)) // true
console.log(provjeri(lista, "Lora", false)) // true
console.log(provjeri(lista, "Lora", true)) // false