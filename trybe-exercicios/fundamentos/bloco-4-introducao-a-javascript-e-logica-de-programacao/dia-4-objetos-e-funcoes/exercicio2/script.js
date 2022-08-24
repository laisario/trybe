/*
function ehPalindromo(frase) {
  let splitFrase = frase.split('')
  let reverseFrase = splitFrase.reverse()
  let joinFrase = reverseFrase.join('')
  if (frase === joinFrase) {
    return true
  } else {
    return false
  }
}
console.log(ehPalindromo('laisa]'))
-----------------------------------------------------------------
function getMaxOfArray(arrayDeInteiros) {
  let max = -1
  let maxIndex = -1
  for (let i = 0; i < arrayDeInteiros.length; i += 1) {
    if (arrayDeInteiros[i] > max) {
      max = arrayDeInteiros[i]
      maxIndex = i
    }
  }
  return maxIndex
}
console.log(getMaxOfArray([2, 3, 6, 7, 10, 1]))
----------------------------------------------------------
function getMinOfArray(arrayDeInteiros) {
  let min = 99999999
  let minIndex = 0
  for (let i = 0; i < arrayDeInteiros.length; i += 1) {
    if (arrayDeInteiros[i] < min) {
      min = arrayDeInteiros[i]
      minIndex = [i]
    }
  }
  return minIndex
}
console.log(getMinOfArray([2, 4, 6, 7, 10, 0, -3]))
----------------------------------------------------------------
function maiorPalavra(arrayDeNomes) {
  let palavraCaracteres = arrayDeNomes[0]
  for (let index in arrayDeNomes) {
    if (palavraCaracteres.length < arrayDeNomes[index].length) {
      palavraCaracteres = arrayDeNomes[index]
    }
  }
  return palavraCaracteres
}
 console.log(
  maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
  )
  ------------------------------------
  function oQueMaisRepete(arrayDeInteiros) {
    let numeroDeRepeticoes = {}
  for (let number of arrayDeInteiros) {
    if (numeroDeRepeticoes[number] !== undefined) {
      numeroDeRepeticoes[number]++
    } else {
      numeroDeRepeticoes[number] = 1
    }
  }
  let recordeDeRepeticoes = 0
  let numeroQueMaisRepetiu = 0
  for (let numero in numeroDeRepeticoes) {
    if (numeroDeRepeticoes[numero] > recordeDeRepeticoes) {
      recordeDeRepeticoes = numeroDeRepeticoes[numero]
      numeroQueMaisRepetiu = numero
    }
  }
  return numeroQueMaisRepetiu
}

console.log(oQueMaisRepete([2, 3, 2, 5, 8, 2, 3]))
----------------------------------------------------------------------
function somatorio(n) {
  let soma = 0
  for (let i = 1; i <= n; i += 1) {
    soma += i
  }
  return soma
}
console.log(somatorio(5))
------------------------------------------------
  */
function verificaFimPalavra(word, ending) {
  if (word.endsWith(ending)) {
    return true
  } else {
    return false
  }
}
console.log(verificaFimPalavra('joaofernando', 'fernando'))
