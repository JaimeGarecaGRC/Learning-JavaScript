


//Existen 6 tipos de variables en JavaScript
//los tipo Number son los numeros tanto enteros como flotantes.
let numero = 10;
let numero2 = 52.045;

//Los tipo Boolean son solo adquieren valor de falso o verdadero y se usa para tomar decisiones usualmente.
let booleano = true;
let booleano2 = false;

//Los tipo String son cadenas de caracteres y se usan cuando guardamos textos
let texto = 'Un texto cualquiera';

//si bien estos 3 son los mas usados existen aun 4 mas.
//Los tipo Undefined se usan cuando se declara una variable pero no se le guarda ningun dato.
let nuevaVariable;

//Los tipo Null es como el anterior, cuando la variable no cuenta con ningun valor.

//Los tipo Symbol representan un valor unico que o puede ser cambiado

//Los tipo BigInt que son enteros que son demasiado grandes para los tipo Number

//Algo fundamental que hay que entender es que el tipo de dato recae en el valor del dato y no en la variable como en otros lenguajes de programacion.
//Debido a esto es que es que podemos reutilizar las variables con valores diferentes sin importar su tipo de dato, a esto se le conoce como:
//Dynamic Typing

//Tambien contamos con una herramienta para ver que tipo de dato es el valor con el que estamos trabajando con typeof
console.log(typeof numero);
console.log(typeof booleano2);
console.log(typeof 'Un simple texto');
console.log(typeof nuevaVariable);

//Como ultima nota veras que colocamos
console.log(typeof null);
//Nos devolvera object en lugar de null, es debido a un bug que no se puede corregir por temas de codigo legacy asi que es algo a tener en cuenta, null es un tipo de dato
// a pesar de este bug