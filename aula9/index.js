//dados primitivos: string, number, undefined, null, boolean, symbol

const nome = 'Rian'; // string
const nome1 = "Rian"; // string
const nome2 = `Rian`; // string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined = não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo = não aponta pra local nenhum na memória
const aprovado = false; // Boolean = True or False (lógico)
console.log(typeof aprovado, nome, num1, nomeAluno, sobrenomeAluno)

const a = [1, 2];
const b = a;
