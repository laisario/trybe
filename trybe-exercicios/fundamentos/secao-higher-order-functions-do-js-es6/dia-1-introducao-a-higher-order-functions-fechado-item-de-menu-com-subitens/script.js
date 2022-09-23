//Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const newEmployeesInformation = (nomeCompleto) => {
  const person = {
    name: nomeCompleto.replace(' ', '.').toLowerCase(),
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
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const corretorRespostas = (respostasCorretas, respostasAluno) => {
  let pontos = 0;
  for (let i = 0; i < respostasCorretas.length; i += 1) {
    for (let index = 0; index < respostasAluno.length; index += 1) {
      if (respostasCorretas[i] === respostasAluno[index]) {
        pontos += 1;
      } else if (respostasAluno[index] === 'N.A') {
        pontos = pontos;
      }
      pontos -= 0.5;
    }
  }
};
const corretorAutomatico = (
  respostasCorretas,
  respostasAluno,
  comparacaoRespostas
) => {};
