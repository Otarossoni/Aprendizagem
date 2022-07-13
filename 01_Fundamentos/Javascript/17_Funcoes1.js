/*Funções nada mais são do que blocos de códigos com um nome, que podem ser invocadas a qualquer momento no código,
através desse nome e, podem ou não retornar alguma coisa depois de sua execução*/

//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(5, 10, 15);
imprimirSoma(5, 10);
imprimirSoma(5);
imprimirSoma();

//Função com retorno
function soma(a, b = 0){
    return(a + b);
}

soma(5, 5); //Somente chamar a função não apresenta nada
console.log(soma(5, 5)); //Ela precisa estar dentro de algo que use seu retorno
console.log(soma(5)); //Caso seja informado apenas valor de a, b irá assumir o valor descrito no parâmetro da função 
console.log(soma()); //Como a não tem valor padrão descrito como padrão, ele irá retornar um "NaN" (Not a Number) 