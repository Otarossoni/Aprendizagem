//Conceito de puxar para cima.

//Quando usada com var, JavaScript "puxa" e antecipa a declaração da variável:
console.log("a = " + a)
var a = 5;
console.log("a = " + a)

//Já usando let, esse efeito não acontece e caso tente ser usado, resultará em erro:
console.log("a = " + a)
let a = 5;
console.log("a = " + a)