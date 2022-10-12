/*
Entre 0 - 11 = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 e 23 = Boa noite


// If pode ser usador sozinho
// Sempre que utlizo a palavra else, preciso de um if
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 25;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Houve um erro!');
}
*/

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não é possivel sair de casa');
}

 