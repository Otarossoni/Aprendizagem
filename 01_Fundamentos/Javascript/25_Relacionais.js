console.log('01) ', '1' == 1); //Retorna como 'true', pois '==' compara apenas os valores, não se importando com os tipos de dados
console.log('02) ', '1' === 1); //Retorna como 'false', pois '===' compara tanto o valor como o tipo
console.log('03) ', '3' != 3); //Retorna como 'false', pois 3 é igual a 3, não diferente
console.log('04) ', '3' !== 3); //Retorna como 'true', pois 3 pode ser igual a 3, mas são de tipos diferentes

console.log('05) ', '3' < 2); 
console.log('06) ', '3' > 2); 
console.log('07) ', '3' <= 2); 
console.log('08) ', '3' >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09) ', d1 == d2); 
console.log('10) ', d1 === d2);
console.log('11) ', d1.getTime === d2.getTime);

console.log('12) ', undefined == null);
console.log('13) ', undefined === null);