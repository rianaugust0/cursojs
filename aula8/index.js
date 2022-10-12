/* 
Rian Augusto Alves da Silva tem 17 anos, pesa 85 kg
tem 1.89 e seu IMC é de 23.79552644102909
Rian Augusto nasceu em 2005
*/

const nome = 'Rian Augusto';
const sobrenome = 'Alves da Silva';
const idade = 17;
const peso = 85;
const alturaEmM = 1.89;
const anoAtual = 2022;
let imc; // peso / (altura * altura) 
let anoNascimento; // anoAtual - idade

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

anoNascimento = anoAtual - idade
console.log(anoNascimento)

/*console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso, 'kg');
console.log('tem', alturaEmM, 'e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento, '.')
*/

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg `)
console.log(`tem ${alturaEmM} e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)







