/*Em Javascript, blocos de código são definidos por um par de chaves "{ }", que pode ou não
possuir sentenças internar, entretanto, um bloco sempre deve ser fechado por uma chave final.
Como nos exemplos abaixo:
*/

{
    console.log("Aqui começa o primeiro bloco!");
    {
        console.log(" Aqui começa o segundo bloco!");
        {
            console.log("  Aqui começa o terceiro bloco!");
            {
                console.log("   Aqui começa o quarto bloco!");
                {
                    console.log("    Aqui começa o quinto bloco!");
                    {
                        console.log("     Aqui começa o sexto bloco!");
                        console.log("     Aqui termina o sexto bloco!");
                    }
                    console.log("    Aqui termina o quinto bloco!");
                }
                console.log("   Aqui termina o quarto bloco!");
            }
            console.log("  Aqui termina o terceiro bloco!");
        }
        console.log(" Aqui termina o segundo bloco!");
    }
    console.log("Aqui termina o primeiro bloco!");
}

console.log(""); //Comando para pular uma linha no resultado do console.

{
    {
        //Bloco para números ímpares de 1 até 10.
        console.log("1");
        console.log("3");
        console.log("5");
        console.log("7");
        console.log("9");
    }

    {
        //Bloco para números pares de 1 até 10.
        console.log("2");
        console.log("4");
        console.log("6");
        console.log("8");
        console.log("10");
    }
}