//É o que o próprio nome diz, é a criação de templates de strings para evitar grandes concatenações. Exemplo a seguir:

const nome = 'Otávio';
const template = 
    `Meu nome é ${nome}!
Muito Prazer!`;

console.log(template);