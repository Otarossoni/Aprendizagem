//A função "toFixed()" permite limitar a quantidade de casas decimais de uma determinada variável.

const valor1 = 1.23;
const valor2 = 3.981237489718747218979412;

//Originalmente a variável "valor1" tinha duas casas decimais, mudadas na hora da execução para apenas uma.
console.log(valor1.toFixed(1));

//Acontece a mesma coisa com a variável "valor2"
console.log(valor2.toFixed(2));