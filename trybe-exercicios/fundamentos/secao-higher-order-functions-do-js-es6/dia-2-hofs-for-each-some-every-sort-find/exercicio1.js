const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// function authorBornIn1947(array) {
//   if (array.author.birthYear === 1947) {
//     console.log(array.name);
//   }
// }
// books.find(authorBornIn1947);

// function smallerName(array) {
//   let nameBook;
//   array.sort((a, b) => {
//     return a.name.length - b.name.length;
//   });
//   nameBook = array[0].name;
//   return nameBook;
// }
// console.log(smallerName(books));

// function getNamedBook(array) {
//   const elementoQueAchou = array.find((element) => {
//     return element.name.length === 26;
//   });
//   return elementoQueAchou.name;
// }
// console.log(getNamedBook(books));

// function booksOrderedByReleaseYearDesc(array) {
//   array.sort((a, b) => {
//     return b.releaseYear - a.releaseYear;
//   });
//   return array;
// }
// console.log(booksOrderedByReleaseYearDesc(books));

// function everyoneWasBornOnSecXX(array) {
//   return array.every((element) => element.author.birthYear >= 1900);
// }
// console.log(everyoneWasBornOnSecXX(books));

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// 1 forma de fazer: ordernar os birthYears e fazer um for para verificar se o index atual é igual ao posterior.
function authorUnique(array) {
  array.sort((a, b) => {
    return a.author.birthYear - b.author.birthYear;
  });
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i].author.birthYear === array[i + 1].author.birthYear) {
      return false;
    }
  }
  return true;
}
console.log(authorUnique(books));
