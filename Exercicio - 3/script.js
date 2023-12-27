// Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorInicial = parseInt(prompt('Insira um valor Inicial: '));
let valorFinal = parseInt(prompt('Insira um valor final: '));
let incremento = parseInt(prompt('Insira um valor para incremento: '));

let contagem = 'contagem: '

if(valorInicial <= valorFinal) {
    while(valorInicial <= valorFinal) {
        contagem += valorInicial + ' ';
        valorInicial += incremento;
    }
} else if(valorInicial >= valorFinal ){
    while(valorInicial >= valorFinal) {
        contagem += valorInicial + ' ';
        valorInicial -= incremento;
    }
} else [
    console.log('Valores invalidos!')
]

contagem += ' Acabou!';

console.log(contagem)