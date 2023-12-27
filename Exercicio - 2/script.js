// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salarioM = 0;
let salarioF = 0;
let repetir = true;

while(repetir) {
    let sexo = prompt('Insira o sexo do funcionário(a). ("M" para masculino ou "F" para feminino): ');
    let salario = parseFloat(prompt('Insira o salario do funcionario: '));
    let continuar = confirm('Quer continuar?')

    if(sexo === 'M') {
        salarioM += salario;
        
    } else if(sexo === 'F'){
        salarioF += salario;
    } else {
        console.log('Sexo invalido!')
    }

    if(continuar) {
        repetir = true;
    } else {
        repetir = false;
    }
}

console.log(`O total de salario pago as mulheres é: ${salarioF}`)
console.log(`O total de salario pago aos Homens é: ${salarioM} `)