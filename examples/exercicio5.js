// Desafio 5: Verificando a Existência de Propriedades

// Descrição: Verifique se o objeto carro tem uma propriedade chamada preco.
// Se não tiver, adicione a propriedade com um valor de sua escolha.
// Se já existir, exiba o valor no console.

const carro= {
    marca:"BMW",
    modelo:"Idk",
    ano:"2023",
    cor:"Azul",
    descrever: function(){
        console.log(`Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano} na cor ${this.cor}.`)
    }
}

function funcao(object){
    for(let chave in object){
        console.log(chave, object[chave])
    }
}

funcao(carro)

function verificar(veri){
    if (!carro.preco) {
        carro.preco = 10000;
        console.log(`Propriedade preco adicionada com valor ${carro.preco}`);
    } else {
        console.log(`Propriedade preco com valor ${carro.preco}`);
    }
}