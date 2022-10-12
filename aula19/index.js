/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)


Referência (mutável) -  array, object, function

*/

const a = {
    nome: 'Rian',
    sobrenome: 'Augusto'
};

const b = a;

a.nome = 'João';
console.log(a);
console.log(b);