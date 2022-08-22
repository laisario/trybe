/*let fatorial = 1
for (let i = 10; i > 0; i -= 1) {
  fatorial = fatorial * i
}
console.log(fatorial)
--------------------------------------------------------------------
let word = 'laisa'
for (let i = word.length - 1; i >= 0; i -= 1) {
  console.log(word[i])
}
--------------------------------------------------------------
let array = ['java', 'javascript', 'python', 'html', 'css']
let biggestWord = array[0]
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i]
  }
}
console.log(biggestWord)

let smallestWord = array[0]
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index]
  }
}
console.log(smallestWord)
---------------------------------------------------------------
*/
for (let i = 2; i <= 50; i += 1) {
  let numeroPrimo = true;
