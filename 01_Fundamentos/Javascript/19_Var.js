/*As variáveis declaradas por "var", possuem apenas dois escopos, locais e globais, quando declarada dentro de uma função,
 ela ficará acessível apenas dentro da função, caso seja declarada fora de uma função, poderá ser acessada de qualquer lugar,
 por isso recebe o nome de "global".*/

//Exemplo de uma variável global sendo usada
{
    {
        var global = 0
    }
}
console.log(global);

//Exemplo de uma variável local dando erro caso se tente acessar ela de fora da função
function teste() {
    var local = 1
}
console.log(local);