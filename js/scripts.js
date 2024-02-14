
function nova() {

    /* Variaveis de escopo local */
    let conteudo;
    let texto1 = "Olá Mundo!";
    let texto2 = 'Olá "Mundo!"';
    let numero1 = 123;
    let numero2 = 123.45;
    let valor = true;

    console.log(typeof (conteudo));  /* retorna 'undefined' */

    console.log(typeof (texto1));  /* retorna 'string' */
    console.log(typeof (texto2));  /* retorna 'string' */
    console.log(typeof (numero1));  /* retorna 'number' */
    console.log(typeof (numero2));  /* retorna 'number' */
    console.log(typeof (valor));  /* retorna 'boolean' */

    /* TODO1 */
    console.log(numero1 + numero2);
}

function somar (){
    let v1 = document.getElementById('valor1').value;
    let v2 = document.getElementById('valor2').value;

    console.log(v1);
    console.log(v2);
    console.log(parseInt(v1) + parseInt(v2));
}