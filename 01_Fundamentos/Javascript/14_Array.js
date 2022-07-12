const valores = [7.7, 8.9, 6.3, 9.2] //Declaração literal de um Array
console.log(valores[0], valores[3]); //Acesso aos elementos do Array
console.log(valores[4]); //Caso exija uma posição do Array o qual ele não possui, ele irá retornar uma valor indefinido

valores[4] = 10; //Adicionando um novo valor no Array depois de sua declaração
console.log(valores);
console.log(valores.length); //Comando ".lenght" mostra a quantidade de valores dentro de uma Array

valores.push(1, 2, 3, "Mais um valor"); //Comando ".push" permite adicionar novos valores dentro do Array, que permite mais de um tipo de dado.
console.log(valores);

valores.pop(); // Remove o último item do Array
console.log(valores);

delete valores[0]; //Remove o valores correspondente ao index informado
console.log(valores);