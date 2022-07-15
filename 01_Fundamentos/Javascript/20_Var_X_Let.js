//A palavra dedicada "Var" tem escopo Global e de Função:
var numVar = 1;
{
    var numVar = 2;
    console.log("Dentro do Bloco: " + numVar);
}
console.log("Fora do Bloco: " + numVar);

//A palavra dedicada "Let" tem escopo Global, de Função e de Bloco:
let numLet = 1;
{
    let numLet = 2;
    console.log("Dentro do Bloco: " + numLet);
}
console.log("Fora do Bloco: " + numLet);

//OBS: Let sempre dá preferência aos seus usos dentro de blocos primeiro, ao contrário de Var, que ignora blocos.