// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nome = prompt('Insira o nome: ');
let sexo = prompt('Insira o sexo ("M" para masculino e "F"para feminino): ');
let valorCompras = parseFloat(prompt('Insira o valor das compras: '));
let valorComDescontosM = valorCompras - (valorCompras * 0.05)
let valorComDescontosF = valorCompras - (valorCompras * 0.13)

if(sexo === 'M') {
    console.log(`
        Nome: ${nome}.
        valor da compra: ${valorCompras}
        O valor da compra com deconto: ${valorComDescontosM}.
    `)
} else if(sexo === 'F') {
    console.log(`
        Nome: ${nome}.
        valor da compra: ${valorCompras}
        O valor da compra com deconto: ${valorComDescontosF}.
    `)
}else {
    console.log('Os dados inseridos não é validos!')
}

