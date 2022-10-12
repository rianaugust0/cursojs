function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
 const dia = zeroAEsquerda(data.getDate() - 2);
 const mes = zeroAEsquerda(data.getMonth() + 1);
 const ano = zeroAEsquerda(data.getFullYear());
 const hora = zeroAEsquerda(data.getHours());
 const minutos = zeroAEsquerda(data.getMinutes());
 const segundos = zeroAEsquerda(data.getSeconds());

 return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);