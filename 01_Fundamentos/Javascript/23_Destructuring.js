//Recurso utilizado para extrair informações de estruturas
const pessoa = {
    nome: 'Otávio',
    idade: 20,
    endereco: {
        logradouro: 'Rua Sul',
        numero: 12
    }
}

//Usando Destructuring para tirar os dados das variáveis nome e idade
const { nome, idade } = pessoa;
console.log(nome, idade);
//Ele cria duas novas variáveis globais com os mesmos nomes que estão dentro do objeto

//Usando Destructuring para tirar os dados das variáveis nome e idade com nomes de variável diferentes
const { nome: n, idade:i } = pessoa;
console.log(n, i);

//Tentando usar Destructuring em variáveis de objeto que não existem
const { sobrenome, viva = true } = pessoa;
console.log(sobrenome, viva);

//Como usar Destructuring em variáveis dentro de objetos dentro de objetos. Ex: logradou e número, dentro de endereço dentro de pessoa
const { endereco: {logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);