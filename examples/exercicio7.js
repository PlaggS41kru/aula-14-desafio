// Desafio: Manipulando Dados em JSON
// Descrição: Você recebeu uma string no formato JSON representando uma lista de alunos e suas notas.
// Seu objetivo é converter essa string em um objeto JavaScript,
// calcular a média de notas de cada aluno, e exibir o nome do aluno com a maior média.

const jsonString = `[
    {"nome": "Roberta", "notas": [8.5, 9.0, 7.5]},
    {"nome": "Carol", "notas": [6.0, 7.0, 8.0]},
    {"nome": "Ivan", "notas": [9.5, 8.5, 9.0]}
]`;

const alunos = JSON.parse(jsonString);

function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

let alunoComMaiorMedia = null;
let maiorMedia = -Infinity;

alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    if (media > maiorMedia) {
        maiorMedia = media;
        alunoComMaiorMedia = aluno;
    }
});

if (alunoComMaiorMedia) {
    console.log(`O aluno com a maior média é ${alunoComMaiorMedia.nome} com a média ${maiorMedia.toFixed(2)}.`);
} else {
    console.log("Nenhum aluno encontrado.");
}