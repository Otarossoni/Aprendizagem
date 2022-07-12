 let valor; //Não inicializada
 console.log(valor); //Retorna "undefined" pois a variável nunca recebeu um valor
 //console.log(valor2); // Causa um erro pois essa variável sequer existe dentro do código

 valor = null; //Após a variável receber o valor de "null", ela recebe uma valor, mesmo que null, mas não aponta a nenhum endereço de memória
 console.log(valor);
 