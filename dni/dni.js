function obtenerDniUsuario ()
{
    var dni_introducido;

        //"meterme en el HTML y coger lo que pone en el input del dni"
        var input_dni = document.getElementById("dni");
        dni_introducido = input_dni.value;

    return dni_introducido;
}
function obtenerLetraUsuario ()
{
    var letra_introducida;

        //"meterme en el HTML y coger lo que pone en el input de la letra"
        var input_letra = document.getElementById("letra");
        letra_introducida = input_letra.value;

    return letra_introducida.toUpperCase();
    // convierte en mayúsculas
}
function calcularLetraDniUsuario (numero_dni)
{
    /* Calculo el resto para saber el índice
    del array y la letra que le corresponde.*/
    let resto = numero_dni%23;
    console.log ("El módulo es " + resto);

    let array_letras_dni = ["T", "R", "W", "A", "G", "M", "Y",	"F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    console.log ("Elementos del array " + array_letras_dni.length);
    let letra_correcta = array_letras_dni[resto];
    
    /* En lugar de un array se podría utilizar
    un string y obtener el char:
    let letra_correcta = nombre_string[resto]
    */
    return letra_correcta;
}
function validarDni()
{
    console.log("Ha tocado validar");
    let numero_dni = obtenerDniUsuario();
    console.log ("Número introducido " + numero_dni);
    let letra_dni = obtenerLetraUsuario ();
    console.log ("Letra introducida " + letra_dni);

    switch (numero_dni[0].toUpperCase())
    {
        // Convertimos la letra del DNI extranjero en número
        case "X":
            numero_dni[0] = 0;
            break;
        case "Y":
            numero_dni[0] = 1;
            break;
        case "Z":
            numero_dni[0] = 2;
            break;
    }

    let resultado = calcularLetraDniUsuario(numero_dni);
    if (resultado == letra_dni)
    {
        var es_valido = document.getElementById("resultado");
        es_valido.innerText = "El DNI es correcto";
    }
    else
    {
        var es_invalido = document.getElementById("resultado");
        es_invalido.innerText = "El DNI es incorrecto";
    }

    /*
     obtenerDniUsuario
    obtenerLetra
    calcularLetraDniUsuario
    si letra calculada es igual
    a letra introducida
        informo del exito
    si no
        le informo del error
    */
}