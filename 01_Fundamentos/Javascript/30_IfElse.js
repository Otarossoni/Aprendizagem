//Colocado dentro de uma função, um bloco de controle IfElse, onde há um controle de fluxo do código.

const imprimirResultado = function (nota){
    if (nota >= 7){
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}

imprimirResultado(8);
imprimirResultado(2);
imprimirResultado('Nota: 10'); //Como o resultado será falso, executará o que estiver no bloco final Else