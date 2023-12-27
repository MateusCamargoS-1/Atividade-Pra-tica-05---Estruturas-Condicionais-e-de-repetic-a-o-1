// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let qtdAlunos = 0;
let idadeAlunos = [];
let mIdade = 0;

for (let i = 0; i <= qtdAlunos; i++) {
    let idade = parseInt(prompt('Insira uma idade e/ou "999" para finalizar ou cancelar: '));
    if (idade) {
        idadeAlunos.push(idade);
        qtdAlunos++;

        if (idade === 999) {
            idadeAlunos.pop()
            qtdAlunos = qtdAlunos - 1;
            break;
        }
    } else {
        console.log('Campo não preenchido ou não existe nenhum aluno na turma.');
        break
    }
}


if (idadeAlunos.length > 0) {
    for (let somaIdade of idadeAlunos) {
        mIdade += somaIdade;
    }

    let mediaIdade = mIdade / qtdAlunos;

    console.log(`Existem ${qtdAlunos} alunos na turma.`);
    console.log(`À média de idade do grupo é de ${mediaIdade.toFixed(2)} anos`);
}
