function maxLength (arr) {
  let max = arr[0].length;
  for (let i = 0; i < arr.length-1; i++){
    if (arr[i+1].length > max)
      max = arr[i+1].length
  }
  return max
}

function istiZnakovi (str) {
  let max = 0
  const arr = str.match(/([a-zA-Z0-9])\1*/g)
  return maxLength(arr)
}

console.log (istiZnakovi("baaaccd")) // → 3
console.log (istiZnakovi("ba2dll")) // → 2
console.log (istiZnakovi("test7777")) // → 4