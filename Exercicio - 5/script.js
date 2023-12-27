// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distacia = parseFloat(prompt('Qual a distancia que deseja percorrer?'));
let precoPassagem = 0;

if(distacia < 200) {
    precoPassagem = distacia * 0.50
} else {
    precoPassagem = distacia * 0.45
}

console.log(`Preço da passagem para uma viagem de ${distacia}KM é: R$${precoPassagem}`);

