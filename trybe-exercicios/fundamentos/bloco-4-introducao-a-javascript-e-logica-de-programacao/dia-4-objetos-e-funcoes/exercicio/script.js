/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
}
console.log('Bem vinda, ' + info.personagem)

info['recorrente'] = 'não'
console.log(info)

for (let index in info) {
  console.log(info[index])
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'não'
}

for (let index in info) {
  if (index === 'recorrente' && info[index] === info2[index]) {
    if (info[index] === 'sim') {
      console.log('Ambos recorrentes')
    } else {
      console.log('Ambos não recorrentes')
    }
  } else {
    console.log(info[index] + ' e ' + info2[index])
  }
}
*/
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas'
    }
  ]
}
console.log(
  'O livro favorita de ' +
    leitor.nome +
    ' ' +
    leitor.sobrenome +
    ' se chama ' +
    leitor.livrosFavoritos[0].titulo
)
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco'
})
console.log(leitor.livrosFavoritos)
console.log(
  leitor.nome +
    ' tem dois livros favoritos: ' +
    leitor.livrosFavoritos[0].titulo +
    ' e ' +
    leitor.livrosFavoritos[1].titulo
)
