/*let fatoracao = 1
for (let i = 10; i > 0; i -= 1) {
  fatoracao *= i
  console.log(fatoracao)
}
let word = 'tryber'
for (let i = word.length - 1; i >= 0; i -= 1) {
  console.log(word[i])
}
*/
let array = ['java', 'javascript', 'python', 'html', 'css']
let max = ''
let min = ''
for (let i = 0; i < array.length; i += 1) {
  if (array[i] > max) {
    max = array[i]
  }
}
for (let i = 0; i < array.length; i += 1) {
  if (array[i] < min) {
    min = array[i]
  }
}

console.log(max)
console.log(min)
