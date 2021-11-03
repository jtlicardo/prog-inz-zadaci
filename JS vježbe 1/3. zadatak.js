let zagrade = function (str) {
  let otvarajuce = []
  let otvarajuce_rez = []
  let zatvarajuce_rez = []
  let zavrsni = []
  let rezultat = ""
  let tempArr = []
  let map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  for (let i = 0; i < str.length; i++) {
    // otvarajuce zagrade:
    if(str[i] === "(" || str[i] === "[" || str[i] === "{")
      otvarajuce.push(str[i])
    // zatvarajuce zagrade:
    else{
      let kopija = [...otvarajuce]
      let zadnjaOtvarajuca = otvarajuce.pop()
      // ako zadnja otvarajuca odgovara zatvarajucoj:
      if(str[i] === map[zadnjaOtvarajuca]){
        otvarajuce_rez.push(zadnjaOtvarajuca)
        zatvarajuce_rez.push(str[i])
      }
      /* ako zadnja otvarajuca NE odgovara, isprazni stack sa otvarajucima
         dok se stack ne isprazni ili ne nadjes odgovarajucu zagradu */
      else{
        while(otvarajuce.length > 0){
          zadnjaOtvarajuca = otvarajuce.pop()
          // ako smo nasli odgovarajucu zagradu:
          if(str[i] === map[zadnjaOtvarajuca]){
            otvarajuce_rez.push(zadnjaOtvarajuca)
            zatvarajuce_rez.push(str[i])
            otvarajuce = [...kopija]
            break;
          }
        }
        // ako smo ispraznili stack sa otvarajucima, vrati ga u pocetno stanje
        if(otvarajuce.length === 0){
          otvarajuce = [...kopija]
        }
      }
    } 
  }

  while(otvarajuce_rez.length > 0){
    zavrsni.push(otvarajuce_rez.pop()) 
  }

  while(zatvarajuce_rez.length > 0){
    tempArr.push(zatvarajuce_rez.pop())
  }

  while(tempArr.length > 0){
    zavrsni.push(tempArr.pop())
  }

  for(let i = 0; i < zavrsni.length; i++){
    rezultat += zavrsni[i]
  }

  return rezultat
};

console.log(zagrade("({[([)]})")); // "({[()]})""
console.log(zagrade("({{)")) // "()"
console.log(zagrade("][(}")); // prazan string
console.log(zagrade("{{))))))))))}}")); // "{{}}"