/*JavaScript é uma linguagem de tipagem fraca, permitindo a fácil variação de tipo de uma variável.
Quando se fala do tipo "Number", também é possível descobrir qual o tipo de dado dentro da variável, como a seguir:*/

{
  const valor1 = 1.2;
  const valor2 = 1.0;

  //O comando "Number.isInteger" permite analisar o tipo de dado de dentro da constante:
  console.log(Number.isInteger(valor1));
  console.log(Number.isInteger(valor2));
}
