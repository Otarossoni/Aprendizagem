let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

/*O uso de "!!" é uma negação dupla, uma negação para transformar o status para boolean inverso do real, e outra negação para trocar
para o boolean para seu status verdadeiro*/ 
isAtivo = 1;
console.log(!!isAtivo);

isAtivo = 0;
console.log(!!isAtivo); //Mesma coisa para caso seja usado o valor "0", que irá retornar como "false"

console.log('Resultados que aparecerão como "true":');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); //O método irá levar em consideração para o resultado aquilo que for igualado a "isAtivo"

console.log('Resultados que aparecerão como "false":');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));