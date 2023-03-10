const readline = require('readline-sync');


const calculateBmi = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);
  
    const bmi = (weight / (height **2));
  
    return bmi;
};

function main() {
  const weigthUser = readline.questionFloat('Qual seu peso? ');
  const heightUser = readline.questionFloat('Qual sua altura? ');

  const bmi = calculateBmi(weigthUser, heightUser);
  
  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();