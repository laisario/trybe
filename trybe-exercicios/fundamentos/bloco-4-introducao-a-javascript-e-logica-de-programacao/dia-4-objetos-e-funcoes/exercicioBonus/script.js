/*
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502
    }
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101
    }
  ]
}
console.log(
  'O morador do bloco dois de nome ' +
    moradores.blocoDois[1].nome +
    ' ' +
    moradores.blocoDois[1].sobrenome +
    ' mora no ' +
    moradores.blocoDois[1].andar +
    '° andar, no apartamento ' +
    moradores.blocoDois[1].apartamento +
    '.'
)
moradores.blocoUm[0]['fullName'] =
  moradores.blocoUm[0].nome + ' ' + moradores.blocoUm[0].sobrenome

moradores.blocoUm[1]['fullName'] =
  moradores.blocoUm[1].nome + ' ' + moradores.blocoUm[1].sobrenome

moradores.blocoDois[0]['fullName'] =
  moradores.blocoDois[0].nome + ' ' + moradores.blocoDois[0].sobrenome

moradores.blocoDois[1]['fullName'] =
  moradores.blocoDois[1].nome + ' ' + moradores.blocoDois[1].sobrenome

for (let valores in moradores) {
  console.log(moradores.blocoUm[0].fullName)
  console.log(moradores.blocoUm[1].fullName)
  console.log(moradores.blocoDois[0].fullName)
  console.log(moradores.blocoDois[1].fullName)
}

*/
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let cesta = {}
for (let fruit of basket) {
  if (basket[fruit]) {
    cesta +=
  }
}
console.log(cesta)
