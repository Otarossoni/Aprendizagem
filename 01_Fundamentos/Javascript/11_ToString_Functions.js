const nome = "Otavio";

console.log(nome.charAt(2)); //Retorna o caracter na posição indicada
console.log(nome.charAt(100)); //Retorna um valor vazio por não encontrar nada na posição indicada
console.log(nome.charCodeAt(0)); //Retorna qual o código do caractér da tabela Unicode
console.log(nome.indexOf('a')); //Retorna o número do index do primeiro encontro do caractér indicado

console.log(nome.substring(1)); //Quando usada apenas com uma posição, retorna tudo a partir do índice indicado.
console.log(nome.substring(3, 7)); //Quando usada com duas posições, retorna tudo entre os dois índices, incluindo o primeiro e excluindo o segundo.

console.log('Meu nome é '.concat(nome).concat('.')); //Comando usado para concatenar vários trechos
console.log(nome.replace('o', 'a')); //Substitui todo o primeiro parâmetro pelo segundo, somente na primeira ocorrência dele

console.log('Daniel,Samuel,Eduardo'.split(',')); //Cria uma Array a partir dos elementos informados, a partir de um separador informado