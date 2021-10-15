let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if(bodovi > -1 && bodovi < 101){
  if(bodovi >= 89)
  poruka = "Ocjena: izvrstan 5."
  else if (bodovi >= 76)
    poruka = "Ocjena: vrlo dobar 4."
  else if (bodovi >= 63)
    poruka = "Ocjena: dobar 3."
  else if (bodovi >= 50)
    poruka = "Ocjena: dovoljan 2."
  else
    poruka = "Ocjena: nedovoljan 1."

  if (bodovi >= 50)
    poruka += " Čestitamo!"
}
else
  poruka = "Neispravan broj bodova"

console.log(poruka);