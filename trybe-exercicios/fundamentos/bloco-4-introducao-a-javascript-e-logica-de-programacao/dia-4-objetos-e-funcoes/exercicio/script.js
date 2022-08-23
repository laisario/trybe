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
