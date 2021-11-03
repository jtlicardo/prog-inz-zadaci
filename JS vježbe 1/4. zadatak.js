let polje = [1, 2, 3, 4]

let suma_kvadrata = function(arr){
  return (arr.length === 0) ? 0 : arr[0]*arr[0] + suma_kvadrata(arr.slice(1))
}

console.log(suma_kvadrata(polje)) // 30