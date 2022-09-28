const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
//Utilize o reduce para transformar uma matriz em um array.
function flatten(array) {
  return array.reduce((acc, curr) => {
    return acc.concat(curr);
  });
}

console.log(flatten(arrays));
