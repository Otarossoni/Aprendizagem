//Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b){
    console.log(a + b);
}
//Testando
imprimirSoma(5, 5);


//Armazenando uma função Arrow em uma variável
const soma = (a, b) => {
    return a + b
}
//Testando
console.log(soma(10, 15));

//Funçaõ com retorno implícito
const subtracao = (a, b) => a - b
//Testando
console.log(subtracao(15, 10));