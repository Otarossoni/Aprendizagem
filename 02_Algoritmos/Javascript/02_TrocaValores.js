//O objetivo do algoritmo é mudar os valores das variáveis A e B entre si!
let A = 50;
let B = 100;
console.log("Antes da troca os valores eram A = " + A + " e B = " + B + "!");

let troca = 50;
A = B;
B = troca;
console.log("Depois da troca os valores são A = " + A + " e B = " + B + "!");

//Em Javascript outra maneira de trocar os valores das variáveis seria:
//[A, B] = [B, A];