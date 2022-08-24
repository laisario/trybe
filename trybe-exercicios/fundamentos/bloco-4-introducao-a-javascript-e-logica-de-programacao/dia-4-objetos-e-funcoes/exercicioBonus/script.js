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
//Crie uma função chamada arrayOfNumbers que receberá a variável vector como //parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
//let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(variavel) {
  let numPar = []
  for (let i = 0; i < variavel.length; i += 1) {
    for (let index = 0; index < variavel[i].length; i += 1) {
      if (variavel[i] % 2 === 0) {
        numPar += i
      }
    }
  }
  return numPar
}
console.log()
