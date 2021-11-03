let fibonacci = function (n) {
  let x = 0
  let y = 1
  let z = x + y
  let rezultat = 1
  for(let i = 0; i < n-3; i++){
    x = y
    y = z
    z = x + y
    rezultat *= z
  }
  return rezultat
}

console.log(fibonacci(6)) // 30
console.log(fibonacci(8)) // 3120