const numero = 15;

/* Se (numero >= 0 && numero <= 5) ocorrer mostre isso na tela: 
{ console.log('Sim, o número está entre 0 e 5.'); }
 caso contrario mostre isso: ('Este número não está entre 0 e 5')
*/

if (numero >= 0 && numero <= 5) {
 console.log('Sim, o número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('Este número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('Este número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}