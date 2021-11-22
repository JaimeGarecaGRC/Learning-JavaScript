
//Existen en let, const y var para declarar una variable, y son muy diferentes entre si aunque el let y el var parecieran tener la misma funcion.

//const se usa para valores que no van a cambiar mas adelante
const valor = 'hola';
valor = 'holiwis';

//esto nos devolveria un error

//let es usado cuando se podra reasignar valores a una variable.
let valor1 = 'this';
valor1 = 'amazing'; //a cambiar de valor una variable se le conoce como reasignar o mutar y cuando no se puede se dice que es una variable inmutable.

//por defecto deberiamos poner todas las variables const a menos que sean necesarios puesto que entre mas mutaciones mas posibilidades de bugs habra.

//var igualmente sirve para declarar una variable que puede cambiar a travez del tiempo pero NO SE USA
var valor2 = 'otro dato';
valor2 = 'holaaa';

//var es anticuado y ahora contamos con let y set, pero es necesario saberlo por temas de que podemos encontrar codigo LEGACY
//var y let tienen muchas diferencias que son mas complejas de entender a este nivel asi que las nombrare mas adelante.






