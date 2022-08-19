/*
const a = 9
const b = 156
const c = 354

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


if (a > b) {
  console.log(a)
} else {
  console.log(b)
}

if (a > b && a > c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}

const parametro = -5

if (parametro > 0) {
  console.log('valor positivo!')
} else if (parametro < 0) {
  console.log('valor negativo')
} else {
  console.log('zero')
}


let angulo1 = 30
let angulo2 = 50
let angulo3 = 100

if (angulo1 + angulo2 + angulo3 == 180) {
  console.log(true)
} else if (angulo1 + angulo2 + angulo3 != 180) {
  console.log(false)
} else {
  console.log('Error')
}


let pecaDeXadrez = 'Rainha'
if (pecaDeXadrez == 'peão' || 'Peão') {
  console.log('Para frente e para trás')
} else if (pecaDeXadrez == 'torre' || 'Torre') {
  console.log('Anda na horizontal e vertical')
} else if (pecaDeXadrez == 'cavalo' || 'Cavalo') {
  console.log('Anda em L')
} else if (pecaDeXadrez == 'bispo' || 'Bispo') {
  console.log('Anda em diagonal')
} else if (pecaDeXadrez == 'rainha' || 'Rainha') {
  console.log('Anda para todos os lados')
} else if (pecaDeXadrez == 'rei' || 'Rei') {
  console.log('Anda para todos os lados, mas só uma casa por vez.')
} else {
  console.log('Não é uma peça de Xadrez')
}

----------
let peçaDeXadrez = 'cavalo';

switch (peçaDeXadrez.toLowerCase()) {
    case 'peão':
        console.log('move uma casa');
        break;
    case 'bispo':
        console.log('diagonal');
        break;
    case 'torre':
        console.log('horizontal e vertical');
        break;
    case 'cavalo':
        console.log('move em L');
        break;
    case 'rainha':
        console.log('move para onde quiser');
        break;
    case 'rei':
        console.log('move apenas uma');
        break;
    default:
        console.log('erro');
}
-----

let nota = 104
if (nota > 100) {
  console.log('Error')
} else if (nota >= 90) {
  console.log('A')
} else if (nota >= 80) {
  console.log('B')
} else if (nota >= 70) {
  console.log('C')
} else if (nota >= 60) {
  console.log('D')
} else if (nota >= 50) {
  console.log('E')
} else if (nota < 50) {
  console.log('F')
} else {
  console.log('Error')
}

const num1 = 5
const num2 = 9
const num3 = 17

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log('true')
} else {
  console.log('false')
}
const num1 = 2
const num2 = 4
const num3 = 16

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log('true')
} else {
  console.log('false')
}
*/
const custoProduto = 50
const valorVenda = 80
let valorCustoTotal = custoProduto + custoProduto * 0.2
let lucro = (valorVenda - valorCustoTotal) * 1000
if (custoProduto < 0 || valorVenda < 0) {
  console.log('ERROR')
} else {
  console.log(lucro)
}
