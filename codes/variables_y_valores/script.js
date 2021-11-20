
//Todos estos son ejemplos de valores que pueden existir en JavaScript, si corremos la pagina con estos datos puestos no pasara nada pero tampoco dara ningun error.
//Solo son valores existiendo pero sin ningun uso.
39;
"Jaime";
3.6;
true;

//podemos ver una por consola si la mostramos con console.log();
console.log(true);
console.log("Jaime");
console.log(39 + false); //esto nos dara 40, por que? porque al ser una suma de valores lo tomaria como true === 1 y false === 0

//Las variables son espacios reservados en memoria para que guardemos valores y seran guardados bajo un nombre.
//TipoDeDato NombreDeLaVariable = ValorDeLaVarlable;
let firstName = "Jaime" //let es usado cuando se va a declarar una variable cuyo valor va a cambiar a medida que pase el tiempo.
const lastName = "Gareca"; //const es usado en variables cuyo valor no va a cambiar a traves del tiempo

//igual podemos mostrarlos por consola las variables y concatenarlas de multiples maneras.
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

/*
    Algunas de las reglas a la hora de declarar variables son:
        El primer caracter del nombre de una variable no puede ser un numero
        El nombre de una variable empieza con una minuscula.
        El nombre de una variable puede contener minusculas , MAYUSCULAS , _ , - y $
        No poner palabras reservadas como new o function como nombres de variables
        Siempre usa nombre de variables faciles de interpretar y leer aunque el nombre sea mas largo ej: firstJob es mas leible que job1
        TIP: No usar name para declarar una variable pues puede ocacionar conflictos algunas veces.
*/