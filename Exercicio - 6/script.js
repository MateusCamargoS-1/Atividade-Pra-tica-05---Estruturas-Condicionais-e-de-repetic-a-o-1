// Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = parseFloat(prompt('Insira a largura: '));
let comprimento = parseFloat(prompt('Insira o comprimento: '));

let metros2 = largura * comprimento

if(metros2 < 100) {
    console.log('Terreno popular');
} else if(metros2 >= 100 && metros2 <= 500) {
    console.log('Terreno master');
} else if(metros2 > 500){
    console.log('Terreno Vip');
} else {
    console.log('Dados invalidos!');
}