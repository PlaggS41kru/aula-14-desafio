// Desafio 4: Iterando sobre as Propriedades
// Descrição: Crie uma função que receba um objeto como parâmetro e itere sobre suas propriedades,
// exibindo cada chave e valor no console.
// Use o objeto carro como argumento para testar a função.

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