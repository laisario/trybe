//Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const newEmployeesInformation = (nomeCompleto) => {
  const person = {
    name: nomeCompleto,
    email: `${nomeCompleto}@trybe.com`,
  };
  return person;
};
const newEmployees = () => {
  const employees = {
    id1: newEmployeesInformation('Laísa Rio'),
    id2: newEmployeesInformation('Lucas Procópio'),
    id3: newEmployeesInformation('Carla Paiva'),
  };
  return employees;
};

//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”)/.
const numeroAleatorio = Math.random() * 5;
const checaNumero = (numero) => {
  if (numero === numeroAleatorio) {
    console.log('Parabéns, você ganhou!');
  }
  console.log('Tente novamente :(');
};
const resultadoSorteio = (numeroApostado, func) => {
  return func(numeroApostado);
};
