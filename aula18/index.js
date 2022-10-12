const pessoa01 = {
    nome: 'Rian',
    sobrenome: 'Augusto',
    idade: 17,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;

    }

}

pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();

















/* function criaPessoa (nome, sobrenome, idade, cidade, nacionalidade) {
    return  { nome, sobrenome, idade, cidade,  nacionalidade};
}

const pessoa01 = criaPessoa('Rian', 'Augusto', 17, 'Goiânia', 'brasileira');
const pessoa02 = criaPessoa('Fernando', 'De Jesus', 30, 'Rio grande do Sul', 'brasileira');
const pessoa04 = criaPessoa('Drop', 'henrique', 35, 'Paraná', 'brasileira');
const pessoa05 = criaPessoa('Lost', 'O top', 26, 'Brasilia', 'brasileira');
const pessoa06 = criaPessoa('Forza', 'Dropmiller', 33, 'Rio Grande do Sul', 'brasileira');


console.log(pessoa01.nome, pessoa02.nome, pessoa04.nome);
*/





