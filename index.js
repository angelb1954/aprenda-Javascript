// Introducción 

// Última actualización noviembre de 2022
// Comencemos con las funciones básicas:


function sum(x, y) {
    return x + y;
}
// Este fragmento de código define una función llamada sum .
// Esto significa que ahora puede llamar sum(1, 3)que devuelve 4.
// Puede ejecutarlo de nuevo con diferentes valores, como sum(2, 5)y devolverá el resultado de 2 + 5, que es 7.

// Devolviendo el resultado
// En JavaScript, debe regresar desde funciones internas. Si olvida escribir return, su función volverá undefined.

// La palabra return clave también dejará /salirá de la función.


function sum(x, y) {
    return x + y;
    console.log("Hello World"); // this will NEVER run
}
// La palabra return clave abandonará la función con el resultado(que es x + y), ¡así que el código posterior nunca se ejecutará!

// Suma básica

// Completa la función sum de modo que devuelva la suma de a y b .

/**
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
return a+b;
}

// sample usage - do not modify
console.log(sum(1, 3));
console.log(sum(2, 5));

// Multiplicación básica

// Complete la función multiplicar de tal manera que devuelva el producto (el resultado de la multiplicación) de a y b .

/**
 * @param {number} a
 * @param {number} b
 */
function multiply(a, b) {
return a*b;
}

// sample usage - do not modify
console.log(multiply(2, 4));
console.log(multiply(3, 2));

// Longitud de la cuerda

// Complete la función getCharCountde modo que devuelva la cantidad de caracteres en el strparámetro que recibe.

/**
 * @param {string} str
 */
function getCharCount(str) {
return str.length;
}

// Sample usage - do not modify
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15

// Grita mi nombre

// Completa la función shoutMyNamede manera que devuelva el nameparámetro que recibe todo en mayúsculas.

/**
 * @param {string} name
 */
function shoutMyName(name) {
return name.toUpperCase();
}

// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

// Cadena de minúsculas

// Completa la función lowerNamede manera que devuelva el nameparámetro que recibe todo en minúsculas.

/**
 * @param {string} name
 */
function lowerName(name) {
return name.toLowerCase();
}

// Sample usage - do not modify
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "alex"

// Acceso de personajes 

// Última actualización agosto 2022
// Puede acceder a un carácter específico en una cadena utilizando la sintaxis de corchetes[] .

// Debe proporcionar el índice del carácter al que desea acceder, comenzando desde 0 .

// Tomemos un ejemplo donde la variable languagetiene el valor: "JavaScript". Así es como accede al primer carácter, el segundo y el tercero:


const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character

// Si desea depurar su código y ver el resultado language[1]en la consola, debe registrarlo en la consola de la siguiente manera:


console.log(language[1]);

// Combinándolo con longitud

// También puede combinar el acceso de caracteres con la propiedad .length . Entonces, usando la misma languagevariable, así es como obtienes el penúltimo carácter:


language = "JavaScript";

language[ language.length - 2 ]; // "p" because it's the second to last character from "JavaScript"

// Tenga en cuenta que language[ language.length ]será undefined porque el acceso a los caracteres comienza en 0.
// Entonces, para una cadena de 9 caracteres, 8 es la posición del último carácter.

// El método .at(index)

// Desde 2022, JavaScript ahora tiene un .at()método que lee el carácter en un cierto índice, que también puede ser negativo.

// Echemos un vistazo a algunos ejemplos:

language = "JavaScript";
language.at(0); // "J"
language.at(1); // "a"
language.at(-1); // "t"
language.at(-2); // "p"

// El caso de uso principal del .at()método son los índices negativos, lo que lo hace más fácil que confiar en la .lengthpropiedad. Sin embargo, puede utilizar el enfoque que prefiera.

// Cuando se especifica un índice negativo, comienza a contar desde el final. -1es el último carácter, -2es el anterior, etc.

// Puede continuar usando la sintaxis de corchetes para todos los demás casos de uso, sabiendo que language[-1]devuelve undefined. Entonces, cada vez que desee usar un índice negativo, debe usar el .at()método.

// JSDoc
// A estas alturas, probablemente haya notado que la mayoría de los desafíos comienzan con algunos comentarios que se ven así:

// /**
//  * @param {string} name
//  */
// Estos comentarios se utilizan para mejorar su experiencia de codificación. Le permiten al editor de código saber qué métodos sugerirle mientras escribe. Así que puedes ignorar estos comentarios. Nunca tendrás que cambiarlos o agregarlos, y no afectan las pruebas.

// ¿Qué es el "Uso de muestra"?
// Es posible que también haya notado que cada desafío tiene un código de uso de muestra al final. Por ejemplo, para la función getCharCount, teníamos:

// // Sample usage - do not modify
// console.log(getCharCount("Sam")); // 3
// console.log(getCharCount("Alex 123")); // 8
// console.log(getCharCount("Charley is here")); // 15
// El objetivo del uso de muestra es mostrarle las diversas formas en que esperamos llamar a la función. A veces, le mostramos el resultado esperado junto a él en un comentario.

// Tenga en cuenta que en las pruebas, terminamos llamando a su función con más ejemplos que no están visibles en el código de muestra. El objetivo de esto es asegurarse de haber proporcionado una respuesta correcta que funcione en varios escenarios, no solo en uno o dos escenarios.

// Resumen

// Los corchetes [index]se utilizan para acceder a un índice específico de una cadena.
// El índice comienza en 0. Entonces, el primer carácter es el índice 0.
// Puede combinarlo con la longitud de una cadena para obtener otro carácter en otra posición.
// El .at()método le permite leer un carácter en un índice (que también puede ser negativo).

// Obtener el primer carácter

// Complete la función getFirstCharacterde modo que devuelva el primer carácter del parámetro de nombre que recibe.

function getFirstCharacter(name) {
return name[0];
}

// Sample usage - do not modify
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// Obtener el último carácter

// Complete la función getLastCharacterde modo que devuelva el último carácter del parámetro de nombre que recibe.

// Considere la posibilidad de aprender a programar si está atascado.

function getLastCharacter(name) {

return name.at(-1);
}

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"


// Subcadenas 

// Última actualización junio 2021
// Una subcadena es una parte o una porción de una cadena. Por ejemplo, "rain"es una subcadena de la cadena "brain"porque se puede obtener "rain"tomando los últimos 4 caracteres.

// Cuando trabaja con cadenas, a menudo necesita obtener algunos caracteres de una cadena en lugar de todo. Así usamos el substringmétodo.

// Firma de subcadena
// Una firma de función le brinda una explicación de los parámetros que necesita pasar para ese método. Echemos un vistazo a la firma de substring:

// someString.substring(indexStart, indexEnd)
// Esto significa que cuando llamas a substring, puedes darle 2 parámetros, el primero para el indexStarty el segundo para indexEnd.

// indexStart: la posición del primer carácter que le gustaría incluir
// indexEnd: la posición del primer carácter que le gustaría ignorar
// Esto significa que un indexEnd de 5 solo incluirá hasta el carácter 4 .

// La combinación de estos 2 le dará una subcadena.

// Tomemos un ejemplo con una variable nombrada languagecon un valor JavaScripty obtengamos la subcadena con indexStart de 1 e indexEnd de 4 . Esto devolverá una cadena formada por todos los caracteres de las posiciones 1 a 3 porque 4 es el primer carácter que se ignora:

// Ejemplo de subcadena

// El resultado de dicha subcadena es "ava".

// Así es como lo escribirías en JavaScript:


// const language = "JavaScript";
// language.substring(1, 4); //"ava"
// Parámetros opcionales
// El indexEndparámetro es opcional, lo que significa que puede pasar indexStarty asumirá indexEndque es igual a la longitud de la cadena. Aquí hay un ejemplo:


// language.substring(4); //"Script"
// Supuso que the indexEndes la longitud de la cadena ( 10 en este ejemplo).

// Nota heredada

// Si ya conoce un poco de JavaScript, es posible que haya utilizado otro método que produzca un resultado similar. Puede encontrar el nombre de la función a continuación, pero no recomendamos que la use porque está obsoleta.

// No use el .substrmétodo ya que está en desuso y funciona de manera diferente. Utilice siempre el .substringmétodo.

// Resumen
// Una subcadena es una parte o una porción de una cadena.
// string.substring(indexStart, indexEnd)se utiliza para devolver una parte de la cadena.
// indexStart : la posición del primer carácter que desea incluir .
// indexEnd : la posición del primer carácter que desea ignorar .
// el argumento indexEnd es opcional, lo que significa que puede omitirlo.

// Saltar primer caracter

// Complete la función skipFirstCharacterde modo que devuelva todos los caracteres excepto el primero del textparámetro que recibe.

function skipFirstCharacter(text) {
return text.substring(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

// Puntos suspensivos de texto Proyecto I

// Este es el primer desafío en el que puedes usar la pestaña NAVEGADOR .
// Se le proporciona el código dentro index.html de index.css, y index.js.

// Ahora puede probar su código haciendo clic en la pestaña NAVEGADOR e interactuando con el desafío. Por ejemplo, en este desafío, puede escribir texto dentro del cuadro de texto dado.

// El código proporcionado en el index.js puede ser completamente nuevo para usted, ya que es el código que manipula el DOM. Esto se explicará en varios capítulos más adelante en este curso.

// También puede haber notado que la función que se le asigna está precedida por la palabra clave export. Asegúrese de mantener esta palabra clave, ya que nos permite importar su código en el archivo index.js . Esto también se explicará en un capítulo posterior.

// Ahora, aquí están las instrucciones para este desafío:
// Complete la función getDescriptionde modo que devuelva los primeros 10 caracteres del parámetro text que recibe.

import {getDescription} from "./helpers.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
    output.textContent = getDescription(event.currentTarget.value);
    
});

// Operador más

// Última actualización enero 2022
// Buen trabajo al terminar tu primer desafío del mundo real. Revisaremos este proyecto de puntos suspensivos de texto varias veces en los siguientes capítulos para mejorarlo.

// En JavaScript, el operador más (+) se comportará de manera diferente según los tipos de valores con los que lo use.

// Ya has visto que 1 + 3te devolverá el número 4.

// Sin embargo, también podría usar +para concatenar 2 cadenas juntas, lo que significa fusionarlas en 1 cadena.

// Aquí hay un ejemplo:


// "Hello" + "World" //"HelloWorld"
// devolverá una cadena: "HelloWorld". Esto sería útil si desea concatenar 2 o más cadenas juntas. Por ejemplo:


let prefix = "Mrs.";
let name = "Sam";
let string = prefix + " " + name; // "Mrs. Sam"

// También es posible hacer lo anterior con la interpolación de cadenas, que se trata en la siguiente lección.

// += operador
// Digamos que tienes el siguiente código:


let name = "Sam";
name = name + " Blue";
console.log(name); // "Sam Blue"
// Puedes reescribir the name = name +de una manera más corta usando el +=operador:


let name = "Sam";
name += " Blue";
console.log(name); // "Sam Blue"

Concatenación de cadenas
Complete la función concatInitials de modo que devuelva firstNameInitial seguido de lastNameInitial .

function concatInitials(firstNameInitial, lastNameInitial) {
return firstNameInitial+lastNameInitial
}

// Sample usage - do not modify
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

// Puntos suspensivos de texto Proyecto II

// Complete la función getDescriptionde modo que devuelva los primeros 10 caracteres del textparámetro que recibe seguidos de puntos suspensivos. Una elipsis es el carácter de punto escrito 3 veces:...

// Nota: para este desafío, ...siempre debe estar allí, incluso si el texto tiene menos de 10 caracteres.

export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
const recorte = text.substring(0,10);
return recorte+"..."
}

// Cadenas de plantilla 

// Última actualización mayo 2021
// Ya sabes que puedes crear cadenas con comillas dobles o simples, pero como ya sabes, estas cadenas no admiten la interpolación.

// Las cadenas de plantilla, sin embargo, admiten la interpolación y otras características ingeniosas.

// Su primera cadena de plantilla

// `This is a template string`
// La única diferencia es que las cadenas de plantilla comienzan y terminan con un `carácter de acento grave.

// El acento grave está encima de la tecla de tabulación en los diseños de teclado internacionales. Para otros teclados, consulte estos hilos para Windows/Linux y mac y busque la distribución de su teclado.

// Cadenas multilínea
// A diferencia de las cadenas de comillas simples y dobles, las cadenas de plantilla pueden abarcar varias líneas. Aquí hay un ejemplo:


// let text = `This is a multiline
// string that
// just works!`
// Mientras que esto no habría sido posible con una cadena normal (comillas simples o comillas dobles).

// Interpolación
// ¡Las cadenas de plantillas admiten la interpolación! Esto significa que podría escribir una variable en su cadena y obtener su valor. La sintaxis es sencilla, envuelve el nombre de la variable con un signo de dólar y llaves. Tomemos un ejemplo donde tenemos una variable languagecon un valor de JavaScript.


// let language = "JavaScript";
// `I am learning ${language}`; //"I am learning JavaScript";
// Recuerda que la interpolación de cadenas solo funciona con acentos graves . Si alguna vez lo intenta y no funciona, verifique que esté usando acentos graves en lugar de comillas simples o dobles.

// Ejemplos adicionales
// Cómo escribir una cadena multilínea
// Cómo interpolar en JavaScript

// Resumen

// Una cadena de plantilla es una cadena creada con el carácter de acento grave:`
// Las cadenas de plantilla pueden abarcar varias líneas
// Las cadenas de plantillas admiten la interpolación con la ${variableName}sintaxis

// Interpolación de cadenas

// Complete la función sayHellode modo que interpole el nombre de la variable en una cadena "Hello name".

function sayHello(name) {

return `Hello ${name}`;

}

// Sample usage - do not modify
console.log(sayHello("Alex")); // "Hello Alex"
console.log(sayHello("Sam")); // "Hello Sam"

//Interpolación de cadenas avanzada

// Complete la función getFullNamede modo que devuelva el nombre completo de la persona usando la interpolación .

function getFullName(firstName, lastName) {

return `${firstName} ${lastName}`;

}

// Sample usage - do not modify
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

// Cadena multilínea

// Complete la función getMultilineString de modo que devuelva la siguiente cadena multilínea:

// I am learning JavaScript  
// and I found it to be  
// quite fun!
// Es una buena idea copiar y pegar la cadena en lugar de volver a escribirla para evitar pequeños errores tipográficos.

function getMultilineString() {
return `I am learning JavaScript
and I found it to be 
quite fun!`
}

// Sample usage - do not modify
console.log(getMultilineString());

//Tabla nutricional I

// Es muy común en JavaScript devolver una cadena que representa algún código HTML. De hecho, lo haremos con bastante frecuencia en los capítulos de DOM. La interpolación de cadenas es útil aquí porque admite cadenas e interpolación de varias líneas.

// Complete la función renderTableRowde modo que devuelva el siguiente HTML:

/* <tr>
    <td>label here</td>
    <td>value here</td>
</tr> */

// donde label herey value herese reemplazan con los parámetros labely valuerespectivamente. Asegúrese de mirar el código en el index.jspara ver cómo se usa esta función (lo más probable es que el código DOM no sea comprensible en este momento, eso es porque aún no lo hemos explicado).

// ¡No olvides mirar el resultado final en la pestaña NAVEGADOR !

export function renderTableRow(label, value) {
    console.log(label, value);
return `<tr>
<td>${label}</td>
<td> ${value}</td>
</tr>`
}

// Capitalizar palabra

// Complete la función capitalizede modo que escriba en mayúscula el wordparámetro que recibe. No hay un método de mayúsculas en JavaScript, por lo que debe escribirlo usted mismo.

// Mire el uso de muestra para comprender qué significa el uso de mayúsculas, luego mire las sugerencias si aún no está claro.

function capitalize(word) {
return `${word[0].toUpperCase()}${word.toLowerCase().substring(1)}`;
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"


// Variaciones de nombre Proyecto

// ¡En este proyecto, practicarás tus habilidades con las cuerdas recién adquiridas!

// Complete las funciones dadas como se describe en los comentarios y pruebe la aplicación que acaba de crear en la pestaña NAVEGADOR .

// ¡Tómate tu tiempo, comete tantos errores como puedas y aprende de ellos!

export function getNumberOfChars(name) {
    // number of characters in: name
return `${name.length}`;
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name

return `${name[0]}`;

}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
return `${name.at(-1)}`
}

/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
return `${name.toLowerCase()}`
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
return `${name.toUpperCase()}`
}

/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
return `${name[0].toUpperCase()}${name.toLowerCase().substring(1)}`;
}

// Resumen del capítulo 

// Última actualización agosto 2022
// Felicitaciones por completar el capítulo Cuerdas I. Profundizaremos en las cadenas en un capítulo futuro, por ahora, asegúrese de revisar los conceptos clave de este capítulo antes de pasar al siguiente.

// ¡Este es tu resumen del primer capítulo! Puede guardarlo en sus notas haciendo clic en el +icono en la parte superior derecha del resumen.

// Resumen del capítulo
// Puede crear cadenas con "o '.
// .length es una propiedad que te da la longitud de una cadena.
// .toUpperCase() es una función que convierte la cadena a mayúsculas.
// .toLowerCase() es una función que convierte la cadena a minúsculas.
// Se requieren paréntesis ()en las llamadas a funciones. .lengthes una propiedad que ya está precalculada; por lo tanto, no necesita paréntesis.
// console.log(...) se usa para la depuración y NO reemplaza a return .
// Los corchetes [index]se utilizan para acceder a un índice específico de una cadena.
// El índice comienza en 0. Entonces, el primer carácter es el índice 0.
// Puede combinarlo con la longitud de una cadena para obtener otro carácter en otra posición.
// El .at()método le permite leer un carácter en un índice (que también puede ser negativo).
// Una subcadena es una parte o una porción de una cadena.
// string.substring(indexStart, indexEnd)se utiliza para devolver una parte de la cadena.
// indexStart : la posición del primer carácter que desea incluir .
// indexEnd : la posición del primer carácter que desea ignorar .
// el argumento indexEnd es opcional, lo que significa que puede omitirlo.
// El +operador se usa para sumar 2 números
// El +operador se usa para concatenar 2 cadenas
// Una cadena de plantilla es una cadena creada con el carácter de acento grave:`
// Las cadenas de plantilla pueden abarcar varias líneas
// Las cadenas de plantillas admiten la interpolación con la ${variableName}sintaxis

// NUMEROS.Resumen del capítulo 
// Última actualización agosto 2022
// 1
// 2
// -5
// 3.5
// 2000
// 2021
// -23.51
// Todos estos son ejemplos de Numbers en JavaScript. No importa si es negativo o positivo, o si tiene decimales (valores después de .) o no. Los llamamos números.

// Separador numérico ( _)
// Puede representar los números más grandes de forma más clara, si lo desea, con el separador numérico ( _). Por ejemplo:

// let nb = 1_000; // equivalent to 1000
// Hace que los números más grandes sean más fáciles de leer. Por ejemplo:

// let nb = 1_000_000; // 1000000 (1 million)
// El _es sacado por JavaScript del número. Entonces, 10_00es equivalente a 1000.

// Convertir de número a cadena
// Aunque rara vez se usa, puede convertir un número en una cadena llamando al .toString()método.
// Tomemos un ejemplo donde tenemos una variable llamada answercon un valor 42;


let answer = 42;
answer.toString(); //"42"
logotipo de MDNNúmero.toString() en MDN


// En la próxima lección, veremos cómo hacer lo contrario. Convertir una cadena en un número.

// Documentación en la Web
// Si echa un vistazo a la documentación en línea, a menudo verá String.prototype.toString(). prototype¿Por qué hay un Esto se trata en profundidad más adelante en este curso. Por ahora, cada vez que vea String.prototype.something(), significa que hay un método something()al que puede llamar en un String .

// Mozilla Developer Network es el sitio web más autorizado para la documentación de JavaScript. Sin embargo, si está comenzando con JavaScript, es posible que le resulte un poco difícil de entender.

// Por lo tanto, en este curso, nuestro objetivo es brindarle explicaciones breves y fáciles de entender, para que no se sienta abrumado cuando recién comienza su viaje de aprendizaje.

// Cuando se sienta cómodo con lo que dice Learn JavaScript sobre un tema y desee profundizar y obtener más información, busque el logotipo de MDN logotipo de MDNy haga clic en el enlace que lo sigue para acceder a información mucho más detallada.

// Yaya
// A veces puede encontrar NaNlo que significa No es un número . Por ejemplo, si intenta multiplicar un número por una cadena (que no debe hacer):


// // ❌
// "abc" * 4; // NaN
// NaN es a menudo una señal de que algo anda mal con su código, la mayoría de las veces se olvidó de convertir una cadena en un número. Uno de los casos más comunes es cuando la propiedad de un objeto se evalúa undefineddebido a un error tipográfico y luego se usa como si fuera un número válido (más sobre eso en capítulos posteriores a medida que aprendemos sobre objetos y propiedades de objetos).

// Resumen

// Convertir de un número a una cadena:value.toString()
// NaNsignifica No es un número
// NaNes a menudo un signo de un error.

// Conversión de número a cadena

// Complete la función convertNumberToStringde modo que convierta el número que recibe en una cadena.

function convertNumberToString(number) {
return number.toString()
}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"


// Convertir cadena en número

// Última actualización marzo 2022
// En algunos escenarios (explicados a continuación), le gustaría convertir una cadena en un número. Para eso, tendrías que usar el Number.parseInt()método.

// Aquí hay un ejemplo:


let str = "42";
Number.parseInt(str, 10); //42

// Están sucediendo muchas cosas aquí, así que analicemos paso a paso.

// El nombre de la función se llama Number.parseInt(). Sí, incluido el Number.bit. Esto se debe a que hay un objeto global llamado Numberque contiene un método llamado parseInt().

// Este Number.parseInt()método espera 2 parámetros:


// Number.parseInt(string, radix);
// El primer parámetro es la cadena que desea convertir en un número. El segundo argumento es la raíz que se utilizará en la conversión.

// El radixes la base del sistema numérico que le gustaría usar. Para la mayoría de los casos de uso, la raíz que le gustaría usar es 10la que representa la forma en que contamos los números en nuestra vida cotidiana. Este sistema se llama sistema decimal (porque tenemos 10 dedos, entonces usamos los dígitos del 0 al 9).

// Otro ejemplo de raíz es 2el que representa binario (un sistema numérico utilizado por las computadoras). Si desea profundizar en este concepto, consulte esta página simplificada de Wikipedia sobre bases matemáticas .

// Como resumen rápido, la raíz suele ser 10. Si no está seguro de qué radix elegir, lo más probable es que sea 10.

// ¿Puedo saltarme el radix?
// Aunque el radix es un parámetro opcional, no debe omitirlo . Esto se debe a que no siempre tiene un valor predeterminado de 10.
// Por lo tanto, asegúrese de pasar siempre la base como segundo parámetro.

// Number.parseInt(string, radix)no siempre tiene por defecto una raíz de 10.

// Si lo intenta Number.parseInt()sin una raíz de 10, funcionará. Sin embargo, hay algunos casos extremos (números que comienzan con 0x) que se romperían. Por lo tanto, para estar seguro, siempre se recomienda pasar el radix.

// Asegúrese de especificar siempre la raíz para evitar sorpresas desagradables .

// logotipo de MDNNúmero.parseInt() en MDN


// Notas heredadas
// JavaScript es un lenguaje en evolución que tiene más de 25 años. Sigue cambiando y evolucionando. Las notas heredadas explicarán algunos comportamientos confusos o funciones antiguas que puede haber encontrado hace un tiempo.

// Si está aprendiendo JavaScript por primera vez, entonces no necesita pasar mucho tiempo en esas notas heredadas.

// Number.parseInt()y parseInt()son exactamente lo mismo. Preferir Number.parseInt()sobre parseInt().

// Hace un tiempo, parseInt(string, radix)era la única forma de convertir números, sin embargo, un tiempo después, esta función se clonó bajo el Numberobjeto y se convirtió Number.parseInt(string, radix)en un esfuerzo por agrupar funciones similares bajo su objeto relevante.

// Ambos funcionan exactamente igual. Le recomendamos que se ciña al enfoque moderno que es Number.parseInt().

// Casos de uso para convertir a un número
// Hay varias razones por las que le gustaría convertir una cadena en un número, pero la más común es cuando el usuario ingresa el número en un cuadro de texto o el número se lee desde el DOM (que se explica más adelante). ).

// Como verás en el siguiente desafío, estos valores siempre serán una cadena (incluso si el usuario escribe un número). Por lo tanto, es su trabajo convertirlo en un número.

// Si olvida convertir una cadena en un número, verá que la adición prevista se comporta como una concatenación:

let a = 10;
let b = "20"; // we forgot to convert it to a number
a + b; // "1020" (concatenation instead of sum)

// El Number.parseInt()método intentará convertir la cadena que recibe en un número. Como puede ver a continuación, la mayoría de las veces funciona cuando la cadena comienza con un número y termina con valores no numéricos:


Number.parseInt("123abc", 10); // 123
Number.parseInt("5 meters", 10); // 5

// Resumen

// Convertir de cadena a número Number.parseInt(value, 10).
// Number.parseInt()es el nombre de la función que está llamando.
// 10 es la raíz que debe especificar.
// Asegúrese de especificar siempre la raíz para evitar sorpresas desagradables.

// Obtener la próxima edad

// Complete la función getNextAgede manera que devuelva la edad del próximo año (sumando 1 a la edad actual).
// Tenga en cuenta que ageel usuario lo proporciona en un cuadro de texto (que puede probar en la pestaña del navegador ).
// No se preocupe por saber NaNcuándo el cuadro de texto está vacío por ahora, nos ocuparemos de eso en un capítulo futuro.

export function getNextAge(age) {
    const edad = parseInt(age,10) + 1;
return edad;
}

// Obtener ancho de caja

// Complete la función getBoxWidthde modo que devuelva el ancho (como un número) de la cadena que recibe.

// Tenga en cuenta que la cadena que recibe se parece a 50pxo 100px(que se usa en CSS), mientras que las funciones deberían devolver un número de estas cadenas.

export function getBoxWidth(value) {

    return parseInt(value, 10);

}

Operaciones

Última actualización septiembre 2022
Como era de esperar, los números se pueden multiplicar y dividir. Ya hicimos un ejemplo de multiplicación al principio del curso, usando el *operador.
Para la división, necesitas usar el /operador.

Resto de división
También puede usar el operador de resto %que devuelve el resto de la división. Aquí hay un ejemplo:


8 % 2; // Division remainder is 0
7 % 2; // Division remainder is 1 
Así es como se calcula el resto de la división de 8 % 2:

8/2 = 4
4/2 = 2
=> el resto de la división es 0 porque 8 = 4 * 2 + 0

Donde en cuanto al 7 % 2:

Empezamos dividiendo 7 entre 2: 7 / 2 = 3.5. Luego, tomas el número entero de este número y te deshaces del decimal: 3.

Luego, necesitamos multiplicar este número por 2(esto 2viene de % 2): 3 * 2 = 6. Finalmente, el resto de la división es 7 - 6 = 1.

De otras maneras, puede escribir 7como 3 * 2 + 1. Que 1al final es el resto de la división.

Usaremos el resto de la división en 2 capítulos a partir de ahora para verificar si un número es par o impar .

logotipo de MDNResto (%) en MDN


// Métodos numéricos

// Si bien existen otros métodos a los que puede llamar con números, no se usan con mucha frecuencia. Sin embargo, lo que se usa comúnmente es el Mathobjeto que contiene métodos como min(), max(), round(), etc.

// Aquí hay unos ejemplos:


Math.round(2.6); // 3
Math.floor(2.6); // 2
Math.ceil(2.6); // 3

Math.round(2.5); // 3
Math.floor(2.5); // 2
Math.ceil(2.5); // 3

// Resumen

// El operador de resto ( % ) devuelve el resto de la división entre 2 números.

// Obtener el resto de la división por 2

// Complete la función getDivisionRemainderBy2de tal manera que devuelva el resto de la división numberque recibe entre 2. Esto significa que debe devolver el resto de la división entre 2.
// Este desafío se desarrollará aún más en una pequeña aplicación que muestra si el número es par o impar en un capítulo futuro.

export function getDivisionRemainderBy2(number) {
    return number%2;

}

// Resumen del capítulo 

// Última actualización mayo 2021
// ¡Buen trabajo! Estás aprendiendo JavaScript de forma lenta pero segura.

// ¿Ha notado que estamos usando punto y coma en nuestro código?
// Los puntos y comas son opcionales en JavaScript. Puedes decidir incluirlos o no. La razón por la que existen es que el código JavaScript que escriba se minimizará una vez que implemente su sitio web en producción. ¡Esto se tratará con más detalle en un capítulo posterior!

// Los desafíos y proyectos se volverán más interesantes a medida que aprendamos más sobre JavaScript. A continuación, ¡variables!

// Resumen del capítulo
// Convertir de un número a una cadena:value.toString()
// NaNsignifica No es un número
// NaNes a menudo un signo de un error.
// Convertir de cadena a número Number.parseInt(value, 10).
// Number.parseInt()es el nombre de la función que está llamando.
// 10 es la raíz que debe especificar.
// Asegúrese de especificar siempre la raíz para evitar sorpresas desagradables.
// El operador de resto ( % ) devuelve el resto de la división entre 2 números.

// Variables

// Última actualización abril 2022
// Ahora que ha completado los primeros 3 capítulos de este curso, le recomendamos que lea la página Funciones y preguntas frecuentes en el menú superior derecho.
// Esto lo familiarizará con todas las funciones disponibles en esta aplicación, así como con el razonamiento detrás de algunas de ellas. ¡También explica la importancia de dormir cuando se aprende algo nuevo!

// Hay 2 formas de definir una variable en JavaScript. Echemos un vistazo a la diferencia entre lety const.

// dejar
// La primera vez que define una variable, debe prefijarla con let = . Tomemos un ejemplo:


// let name = "Sam";
// console.log(name);
// Esto define una variable llamada namecon un valor de "Sam". La próxima vez que desee usar esa variable, haga referencia a ella por su nombre (solo usa la letpalabra clave para la declaración).

// Las variables definidas con let, se pueden reasignar más adelante:


// let language = "C++";
// language = "JavaScript";
// Otro ejemplo con números:

// let sum = 0;
// sum += 1;
// Esto es especialmente útil cuando desea crear una variable que necesita incrementarse o disminuirse (como un contador).

// logotipo de MDNdejar en MDN


// constante
// Las variables definidas con constno se pueden reasignar. Esto significa que puede usar el =signo solo una vez al definir la variable. Aquí hay un ejemplo:


const language = "C++"; // Cannot be re-assigned anymore
console.log(language); // "C++"

language = "Python" // ❌ Type error: this will break your script

// logotipo de MDNconstante en MDN


// Una nota sobre const

// Una nota importante constes que no crea un valor constante o inmutable. Esto se explicará detalladamente una vez que aprendamos sobre arreglos y objetos. Lo que necesita saber, por ahora, es que solo puede usar el signo igual una vez, pero aún puede cambiar elementos dentro de una matriz u objeto .

// let vs const
// ¿Cómo decides si vas a usar leto const? La regla general es fácil. Vaya siempre con const, hasta que se dé cuenta de que necesita poder reasignar la variable más adelante, luego cámbiela alet .
// Con el tiempo se vuelve más fácil. Por ejemplo, cuando define una variable count(que espera incrementar), inmediatamente se dará cuenta y usará let.

// El beneficio de usar constes que una vez que una variable es una matriz, siempre será una matriz (pero como verá más adelante, los elementos dentro de la matriz pueden cambiar). Esto le permite usar con confianza métodos de matriz en esa variable porque sabe que siempre será de tipo matriz .

// ¿Puedo usar 'var'?
// Cuando navega por Internet en busca de documentación o Preguntas y respuestas en StackOverflow, verá muchos fragmentos de código que se usan varen lugar de let y const.
// Aunque vartodavía funciona, se desaconseja su uso, ya que puede resultar confuso en muchos escenarios. Entonces, simplemente puede reemplazar varcon let(o constsi la variable no se reasigna).

// Evite su uso varal definir variables. Utilice leto consten su lugar .

// Una explicación detallada de por qué debe evitar varestá disponible hacia el final del curso. Seguimos un enfoque único en este curso en el que le enseñamos JavaScript moderno antes de descubrir el legado y ¡ha funcionado bastante bien para la mayoría de nuestros estudiantes!

// Resumen
// Cuando usa una variable por primera vez en JavaScript, debe declararla con let o const.
// Úselo let para variables que necesitará reasignar más adelante (como cambiar su valor)
// Úselo constpara variables que no necesitará reasignar más adelante.
// Las variables declaradas con const son constantes. Veremos por qué más adelante en este curso.
// Las variables declaradas con constno se pueden reasignar, por lo que no puede tener =junto a ese nombre de variable después de declararlo.
// Si ve var, es de la versión anterior de JavaScript. Puede convertirlo a let(a veces constsi la variable no se reasigna).

// Definir una variable

// Defina una variable llamada cuenta con un valor original de 0 y luego increméntela (súmele 1) en la siguiente línea.

//define a variable "count" with value 0

let count=0;
count+=1;

//then increment it

//Limite de edad

// Defina una variable ageLimit que no se pueda reasignar y asígnele un valor de 18.

//define a variable "ageLimit" with value 18 that cannot be re-assigned

const ageLimit = 18;

// Resumen del capítulo 

// Última actualización enero 2022
// La definición de variables nos permitirá trabajar en desafíos más interesantes, especialmente después de que aprendamos acerca de los arreglos (cubiertos en el capítulo 6).

// Las variables definidas con lety consttienen "ámbito de bloque". Esto se explicará la primera vez que encontremos un bloque dentro de una función.

// Si vienes de learnprogramming.online , es posible que hayas notado que no mencionamos const  en ese curso. Eso fue a propósito para hacer tu vida un poco más fácil mientras aprendías a programar. Ahora que conoce const, trate de usarlo cuando sea posible aunque, como puede ver, todo también funciona con let. Es solo que constle dará una garantía de que cuando define algo como una matriz (por ejemplo), seguirá siendo una matriz.

// Resumen
// Cuando usa una variable por primera vez en JavaScript, debe declararla con let o const.
// Úselo let para variables que necesitará reasignar más adelante (como cambiar su valor)
// Úselo const para variables que no necesitará reasignar más adelante.
// Las variables declaradas con const son constantes. Veremos por qué más adelante en este curso.
// Las variables declaradas con const no se pueden reasignar, por lo que no puede tener =junto a ese nombre de variable después de declararlo.
// Si ve var, es de la versión anterior de JavaScript. Puede convertirlo a let(a veces const si la variable no se reasigna).

// Resumen del capítulo

// Última actualización enero 2022
// Las condiciones en JavaScript tienen el siguiente modelo:


// if (condition) {
//     //do something
// }
// Tomemos un ejemplo:


const grade = 15;

if (grade >= 10) {
    console.log("Passing grade");
}
El código anterior se mostrará en la consola: "Calificación aprobatoria".

// else

// También puede agregar un else bloque para todos los demás casos:


const grade = 3;

if (grade >= 10) {
    console.log("Passing grade");
} else {
    console.log("Failing grade");
}
El código anterior se mostrará en la consola: "Calificación reprobatoria".

// else if

// Se pueden verificar varias condiciones secuencialmente usando else if. Por ejemplo:


const grade = 10;

if (grade > 10) {
    console.log("Passing grade");
} else if (grade === 10) {
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}
El código anterior se mostrará en la consola: "Pasando el límite".



// Si nunca ha trabajado con condiciones if, entonces este curso no es adecuado para usted. En ese caso, diríjase a learnprogramming.online, que cubre las condiciones en varios capítulos.

// Una nota sobre las ligaduras
// Tenga en cuenta que lo ===que está viendo son, de hecho, 3 signos iguales uno detrás del otro ===
// El hecho de que se muestren como un solo carácter es una función que puede habilitar en su editor de código, se llama ligadura y es compatible con algunas fuentes
// Aquí hay algunos otros ejemplos de ligaduras que verá:

// >=para >=
// <=para <=
// ===para ===
// !==para !==
// ¿No te gustan las ligaduras? Puede desactivarlos desde el menú superior derecho.

// Resumen

// Usando una condición if , puede ejecutar un fragmento de código cuando la condición se evalúa comotrue
// La sintaxis es if (condition)y luego las llaves {}envuelven las líneas de código que corresponden a esta condición
// La palabra clave else se puede usar para ejecutar algún otro código basado en todas las demás condiciones que no se cumplen con el if.

// ¿Puedes votar?

// Implemente la función canVotede modo que regrese truecada vez que tenga 18 años o más y falseen todos los demás escenarios.

function canVote(age) {
    if(age>=18){
        return true;
    }
return false;
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false


 if Avanzado

// Última actualización junio 2021
// A veces es posible soltar el else. Echemos un vistazo a un ejemplo:


function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Dado que esta función realiza dos acciones diferentes según el resultado de la condición if y su opuesto (else), podemos reescribirla soltando la palabra clave else:


function canVote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
// Estas dos funciones tendrán exactamente el mismo resultado. Eso es porque la palabra clave return saldrá de la función con el resultado. Entonces, cuando la edad sea mayor o igual a 18, la función regresará true y el resto del código no se ejecutará.
// Sin embargo, cuando la edad es menor de 18 años, el código dentro de la condición if no se ejecuta. Así, la única línea que se ejecuta es la última, que es return false.

// Aprovecharemos este consejo más adelante en este curso para aprender sobre un patrón común llamado devolución anticipada .

// Nota heredada

// Una nota heredada rápida. Si encuentra == (doble igual) en JavaScript, intente reemplazarlo con === triple igual.
// El operador doble igual realiza algunas conversiones que no esperaría. Siempre quédese con triple igual en su lugar.

// Siempre use triple igual === al comparar 2 valores en JavaScript.

// Si desea saber más por qué == no se recomienda, consulte esta comparación:

// "2" == 2;

// ¿Volvería esto true o false?

// Volvería true porque JavaScript intentará convertir ambos valores en el mismo tipo de datos. Por favor, no considere esto como una "característica". En su lugar, debe evitarlo y siempre usar triple igual ===.

// Resumen

// Cuando tiene una  condición if/else que devuelve dos resultados diferentes, es posible descartar la palabra clave else.
// Siempre use triples iguales (===) al comparar 2 valores en JavaScript.

// Obtener la próxima edad II

// Complete la función getNextAgede manera que devuelva la edad del próximo año (sumando 1 a la edad actual).
// Tenga en cuenta que ageel usuario lo proporciona en un cuadro de texto (que puede probar en la pestaña del navegador ).
// Sin embargo, cuando el cuadro de texto está vacío, la función devuelve NaN. Necesitamos arreglar eso y hacer que muestre 0 en lugar de NaN.  

export function getNextAge(age) {
    if(age===""){ return 0};
    return parseInt(age)+1;


Puntos suspensivos de texto Proyecto III

Complete la función getDescriptionde modo que devuelva los primeros 10 caracteres del textparámetro que recibe seguidos de puntos suspensivos. Una elipsis es el carácter de punto escrito 3 veces:...

Sin embargo, siempre que el texto tenga 10 caracteres o menos, los puntos suspensivos no deben agregarse porque el texto no se está recortando.

Hay múltiples formas de resolver este desafío. Tómese su tiempo y cometa tantos errores como sea posible ;) Y asegúrese de probarlo en la pestaña del navegador.

export function getDescription(text) {
    if (text.length > 10) {
        return text.substring(0, 10) + "...";
    }
    return text;
}
   // Yo encontré también esta solución

   export function getDescription(text) {
    if (text.length > 10) {
        return `${text.substring(0, 9)} ...`;
    }
    return text;
   };

Booleanos que devuelven 

Cada vez que devuelve un booleano ( true o false), es bastante redundante usar if y else . Aquí hay un ejemplo:


function isPassing(grade) {
    if (grade >= 10) {
        return true;
    } else {
        return false;
    }
}

isPassing(12);

Esto es redundante porque grade >= 10 por sí solo se evalúa como verdadero o falso según la calificación. Esto significa que no necesita envolverlo con una declaración if/else .

Es por eso que puedes refactorizarlo así:


function isPassing(grade) {
    return grade >= 10;
}
sin usar if/else que siempre devolverá un valor booleano.

Esto solo funciona cuando devuelve un valor booleano de una función .

Puedes votar (mejorado)

Implemente la función canVotede modo que regrese truecada vez que tenga 18 años o más y falseen todos los demás escenarios. No debe usar un if condition(o ternario).

function canVote(age) {
return age>=18;
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false

Par e impar

Última actualización mayo 2021
En el capítulo Números, explicamos el operador Resto ( %). Cuando obtengas el resto de la división de un número por dos, obtendrás 0o 1. Esto te ayudará a saber si el número original es par (divisible por dos sin resto) o impar .

Veamos algunos números:


// even numbers
4 % 2 // 0
6 % 2 // 0
8 % 2 // 0
10 % 2 // 0

// odd numbers
3 % 2 // 1
5 % 2 // 1
7 % 2 // 1
9 % 2 // 1
Observe cómo el resto de la división por dos siempre es 0 cuando el número es par . Mientras que es 1 cuando el número es impar .

En el próximo desafío, usaremos una condición if para mostrar si el número ingresado por el usuario es par o impar.

Obtener el resto de la división por 2

Complete la función evenOrOddde modo que devuelva la cadena "par" cuando el parámetro numérico que recibe sea par y "impar" en caso contrario.
¿Puedes hacer que funcione también con números negativos?

export function evenOrOdd(number) {
    if(number%2===0){
        return 'even';
    }
return 'odd'; 
}

Resumen del capítulo

Última actualización mayo 2021
¡Buen trabajo! En el próximo capítulo, comenzaremos a trabajar con arreglos. ¡Te veo allí!

Resumen del capítulo
Usando una condición if , puede ejecutar un fragmento de código cuando la condición se evalúa como true
La sintaxis es if (condition)y luego las llaves {}envuelven las líneas de código que corresponden a esta condición
La palabra clave else se puede usar para ejecutar algún otro código basado en todas las demás condiciones que no se cumplen con el if.
Cuando tiene una if/else condición que devuelve dos resultados diferentes, es posible descartar la elsepalabra clave.
Siempre use triples iguales (===) al comparar 2 valores en JavaScript.


Arreglos I

Las matrices en JavaScript le permiten almacenar múltiples elementos en la misma variable. Puede almacenar números, cadenas, booleanos, matrices, objetos y más. Estos se pueden mezclar dentro de la misma matriz.
Aquí hay unos ejemplos:


const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed
Nombre las matrices en plural, ya que pueden contener más de un elemento. Esto demostrará ser especialmente útil una vez que necesitemos iterar sobre una matriz.

propiedad .longitud
Puede obtener la cantidad de elementos en una matriz usando la .lengthpropiedad. Por ejemplo:


[].length; // 0

const grades = [10, 8, 13, 15];
grades.length; // 4
Tenga en cuenta que .length es una propiedad (valor precalculado) y no una función. Es por eso que no deberías tener ()después de eso.

logotipo de MDNArray.longitud en MDN


Obtener elemento por índice
De manera similar a las cadenas, puede obtener un elemento de una matriz utilizando la sintaxis de corchetes []con el indexcomienzo de 0.

Por ejemplo:

const users = ["Sam", "Alex", "Charley"];
users[1]; //"Alex"
También puede usar el .at(index)método, que acepta índices negativos, lo que facilita encontrar el último elemento de la matriz. Aquí hay algunos ejemplos con .at():

const users = ["Sam", "Alex", "Charley"];
users.at(1); //"Alex"
users.at(-2); //"Alex"
logotipo de MDNArray.at() en MDN


Agregar un elemento
Puede agregar un elemento a una matriz utilizando el .push()método.


const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];
Array.push()devuelve la nueva longitud de la matriz.

Como puede ver, numbers.push(20)devuelve 5, que es la longitud de la matriz. Esto suele ser confuso para muchos desarrolladores, por lo que lo destacamos aquí. .push()agregará un elemento a la matriz pero también devolverá la nueva longitud de la matriz .

logotipo de MDNArray.push() en MDN


Matrices y constantes
Aunque la variable numbersse definió con const, pudimos insertar nuevos datos en ella.
Eso es porque constsignifica que solo puede asignar la variable una vez cuando está definida. Pero eso no significa que la variable sea inmutable. Su contenido puede cambiar.

¿Cuál es el beneficio de declararlo como const ? 
El beneficio es que una vez que lo define como una matriz, siempre permanecerá como una matriz, lo que significa que puede llamar a métodos de matriz de manera segura. Sin embargo, el contenido de la matriz puede cambiar .

const numbers = []; // start with empty array
numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)
numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)
Si no ha trabajado antes con arreglos, entonces esto es mucho para digerir. Le recomendamos que cambie a learnprogramming.online, que presenta las matrices paso a paso.

Resumen
const data = [1, 2, 3]es una matriz que contiene 3 números.
array.lengthdevuelve el número de elementos dentro de la matriz.
array.push(x)le permite agregar la variable x al final de la matriz.
array.push(x)devuelve la nueva longitud de la matriz (después de que se haya realizado la inserción).
Las matrices definidas con const no son constantes porque puede cambiar los elementos dentro de ellas. Sin embargo, no puede reasignarlos a otro valor, por lo que siempre serán una matriz.

Matriz vacía

Complete la función getEmptyArrayde modo que devuelva una matriz vacía.

function getEmptyArray() {
return [];
}

// Sample usage - do not modify
console.log(getEmptyArray());

Número de elementos

Complete la función getNumberOfElementsde modo que devuelva la cantidad de elementos contenidos en la elementsmatriz que recibe.

function getNumberOfElements(elements) {

return elements.length;
}

// Sample usage - do not modify
console.log(getNumberOfElements(['a', 'b', 'c'])); // 3
console.log(getNumberOfElements([])); // 0


Agregar calculadora a las aplicaciones

Complete la función useCalculatorde modo que agregue la cadena "Calculadora" a la matriz de aplicaciones que recibe. Luego, devuelva la appsmatriz.
Hay un pequeño truco en este desafío para asegurarte de que comprendes un concepto importante. Dedique algún tiempo a tratar de resolverlo, luego revise las sugerencias si se queda atascado.

function useCalculator(apps) {
apps.push("Calculator");
return apps
}

// Sample usage - do not modify
console.log(useCalculator(["Clock", "Twitter"])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); // ["Weather", "Calculator"]

Usa cualquier aplicación

Complete la función de modo que la variable de la aplicación se agregue a la matriz de aplicaciones . Luego, devuelva la appsmatriz.

function useApp(apps, app) {
apps.push(app);
return apps;
}

// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]

Obtener la primera aplicación

Complete la función getFirstAppde modo que devuelva el primer elemento de la appsmatriz que recibe como parámetro.

function getFirstApp(apps) {
return apps[0];
}

// Sample usage - do not modify
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"

Obtener la última aplicación

Complete la función getLastAppde modo que devuelva el último elemento de la appsmatriz que recibe como parámetro.

function getLastApp(apps) {
return apps[apps.length-1];
}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"

Array ForEach

Última actualización agosto 2022
La iteración de matriz es uno de los conceptos más importantes que utilizará en JavaScript.

Digamos que tenemos una matriz de calificaciones y le gustaría recorrer (o iterar) sobre cada elemento de esta matriz. Así es como se hace eso en JavaScript:


const grades = [10, 8, 13];

grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
});

Siempre comience con un console.log()dentro de su .forEachpara que pueda visualizar el cambio de una matriz a un elemento de la matriz.

El .forEach(callback)método le permite ejecutar la callbackfunción para cada elemento de esa matriz. Las devoluciones de llamada se explicarán con más profundidad en el siguiente capítulo. Por ahora, comencemos con una definición básica.

Una devolución de llamada es una definición de función que se pasa como argumento a otra función. En nuestro ejemplo anterior, aquí está la función de devolución de llamada:


function(grade) {
    // do something with individual grade
    console.log(grade);
}
Esta función de devolución de llamada recibe un correo electrónico gradey luego lo registra en la consola. Esta es una definición de función porque no se está ejecutando. Solo define el comportamiento de la función. Sin embargo, esta definición de función se pasa como argumento al .forEach()método:

grades.forEach(insert_callback_here);
Una vez que combine los dos juntos, como en, pase la definición de la función como un argumento al .forEach()método, luego obtendrá:

grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
});

y este código registrará todas las calificaciones de la matriz de calificaciones en la consola. Entonces obtendrás:

10
8
13
Entonces puede visualizar las llamadas a funciones de la siguiente manera:

// this is the callback
function(grade) {
    console.log(grade);
}
// call the callback with grade = 10 (grades[0])
console.log(grade); // will log 10
// call the callback with grade = 8 (grades[1])
console.log(grade); // will log 8
// call the callback with grade = 13 (grades[2])
console.log(grade); // will log 13
¡Observe cómo se llama a la definición de la función para cada elemento de la matriz!

Pero, ¿quién lo llama y proporciona los diferentes valores? Bueno, ¡JavaScript lo es! ¡Usted proporciona la devolución de llamada (definición de la función) y la pasa a .forEach()JavaScript y JavaScript hace el resto!

Si nunca antes ha iterado sobre una matriz, entonces este curso no es adecuado para usted. En ese caso, consulte learnprogramming.online , que enseña la iteración paso a paso.

¿Cómo sabe que es "grado"?
Una pregunta común cuando se aprende acerca de las devoluciones de llamada es cómo sabe JavaScript que gradesse convierte gradeen el parámetro de devolución de llamada. ¡La respuesta es que no!
A JavaScript realmente no le importa cómo llame a sus variables, siempre (en el caso de .forEach) buscará el primer parámetro que defina en su función de devolución de llamada y le pasará el valor correcto.

Entonces, el siguiente código funciona (pero no lo use):

grades.forEach(function(x) {
    // this works, but avoid using generic variable names
    console.log(x);
});
Entonces esto funciona porque JavaScript buscará el primer parámetro, xllamará a la devolución de llamada y le dará un valor xcada vez.

Aunque funciona, siempre debe dar nombres claros a las variables. ¡Más sobre eso en la próxima lección!

logotipo de MDNArray.forEach() en MDN


Resumen
.forEach(callback)itera sobre cada elemento de una matriz.
Una devolución de llamada es una definición de función que se pasa como argumento a otra función.
Comience siempre con un console.log()dentro de .forEach()para visualizar el cambio de matriz a elemento de matriz (puede omitirlo cuando se acostumbre).
El .forEach()método tomará la definición de su función y la llamará para cada elemento de la matriz. Cada vez que se llama a la devolución de llamada, el primer parámetro representará el elemento de matriz correspondiente.

Bucle a través de los elementos de la matriz


Complete la función

loopThroughElementsde modo que itere sobre cada elemento de la elementsmatriz que recibe y lo registra en la consola (usando console.log).


function loopThroughElements(elements) {

elements.forEach(function(element) {
        console.log(element);
    });
}


// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console

Registrar ID de usuario

Complete la función logUserIdsde modo que itere sobre cada elemento de la userIdsmatriz que recibe y lo registra en la consola (usando console.log).

function logUserIds(userIds) {
userIds.forEach(function(element){
    console.log(element);
});
}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console

Aclarar confusión con return

Última actualización agosto 2022
En esta lección, cubriremos una confusión común cuando se trata de regresar dentro de una función que contiene una .forEach()llamada.

Pero primero, hablemos un poco más sobre nombrar variables al iterar.

Nombrando variables
Nombrar variables con un nombre claro hace que sea mucho más fácil para usted y para otros comprender el código. Esto es especialmente cierto con la iteración.

Por lo tanto, siempre es una buena idea usar el plural para la matriz y el singular para el elemento de la matriz.
Aquí hay unos ejemplos:

calificaciones => el elemento es calificación
personas => elemento es persona
Puede sonar como un consejo menor, ¡pero hace una gran diferencia! 💡

Aquí hay un ejemplo de código basado en lo anterior:


const grades = [10, 14, 15]; // array (plural)
grades.forEach(function(grade) { // array item (singular)
    console.log(grade);
});


const people = ["Sam", "Alex"]; // array (plural)
people.forEach(function(person) { // array item (singular)
    console.log(person);
});
Volviendo del bucle
Hay un error común que ocurre cuando intenta returndesde una función que contiene una llamada forEach. Eso es porque hay 2 funciones. Digamos que tienes esta función:

function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
}
y desea que esta función funcione return true cuando se complete. ¿Dónde colocas el return true?

Podría ser:

function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
        return true; // does this work as expected?
    });
}
o:


function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
    return true; // or is this the correct way?
}
Si damos un paso atrás, la returnpalabra clave vuelve de su propia función . Por lo tanto, el primer enfoque NO funciona. Porque está regresando de la función de devolución de llamada que .forEach()recibe. Esto NO regresará de la logUserIdsfunción.

Por lo tanto, la respuesta correcta es la segunda opción:


function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
    return true; // ✅ return from the logUserIds function
}
El return trueinterior de la función no es realmente útil porque regresará de la función de devolución de llamada, pero de todos modos no hay más código dentro de esa función. La siguiente iteración de .forEach()seguirá ocurriendo. Además, el .forEach()método siempre regresará undefinedsin importar lo que devuelvas dentro de él.

Un ejemplo más
Echemos un vistazo a un ejemplo educativo para asegurarnos de que lo entiende. ¿Qué crees logGradesque devolverá esta función una vez que se llame?


function logGrades(grades) {
    grades.forEach(function(grade) {
        console.log(grade);
        return 10;
    });
    return 20;
}
¿La función devolverá 10 o 20?

Ver respuesta
La función devolverá 20 porque regresa de la función externa .
Es posible que haya notado que estamos usando la functionpalabra clave en lugar de las funciones de flecha de JavaScript moderno. Este es el caso a propósito, ya que las funciones son bastante comunes en todas partes. Las funciones de flecha se presentarán en un capítulo posterior y luego se usarán en la iteración de matrices.

Resumen
Nombra tus arreglos en plural y el elemento del arreglo (dentro del .forEach()) en singular.
Asegúrese de colocar correctamente el returninterior de una función que contenga un archivo .forEach().

Sumar calificaciones

Completa la función sumGradesde forma que devuelva como parámetro la suma de todas las notas que recibe. Todavía no hemos visto reducir , así que intenta resolverlo usando lo que has aprendido hasta ahora.

function sumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade) {
        sum = sum + grade;
        // or
        // sum += grade
    });
    return sum;
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54

// Suma números positivos

// Complete la función sumPositiveNumbersde modo que devuelva la suma de todos los números positivos del numbersparámetro que recibe.

// Este desafío te ayudará a combinar algunos de los conocimientos que adquiriste en este curso. ¡Tómate tu tiempo y comete tantos errores como sea posible!

// function sumPositiveNumbers(numbers) {
// let sum = 0;
// numbers.forEach(function(number){
//     if(number>0){
//         sum+=number;
        
//     }
// }

// )
// return sum;
// }

// // Sample usage - do not modify
// console.log(sumPositiveNumbers([15, -5, 10])); // 25
// console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5

Sumar números impares

Complete la función sumOddNumbersde modo que devuelva la suma de todos los números impares del numbersparámetro que recibe.
La función también debería funcionar para números negativos.

function sumOddNumbers(numbers) {
let sum = 0;
numbers.forEach(function(number){
    if(number%2===1||number%2===-1){
        sum+=number; } 
    }
  )
return sum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2


Desplegable de países I
Complete la función getDropdownde modo que devuelva el siguiente código HTML que llenará el <select></select>elemento existente. El HTML que se devuelve debería tener el siguiente aspecto:

Debe comenzar con:<option value="">Please select</option>
Entonces, para cada país deberías tener el <option>para eso. Por ejemplo, para el país "Países Bajos" , debe tener lo siguiente<option value="netherlands">Netherlands</option>
Observe cómo el valor contiene el nombre del país en minúsculas. El resto de países deberán presentarse también siguiendo los mismos criterios.

¡No olvides mirar el resultado final en la pestaña del navegador!

Revisaremos este desafío más adelante y lo mejoraremos una vez que aprendamos sobre Array .map().

export function getDropdown(countries) {
    let html = `<option value="">Please select</option>`;
    countries.forEach(function(country) {
        html += `<option value="${country.toLowerCase()}">${country}</option>`;
    });
    return html;
}


Tabla nutricional II

Complete la función renderTableRowsde modo que devuelva el siguiente HTML:

<tr>
    <td>label here</td>
    <td>value here</td>
</tr>
por cada fila que recibe en su rowsparámetro.

Los rowsparámetros tienen el siguiente aspecto:

[["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]
Esta es una matriz anidada. Cada matriz interna contiene 2 elementos, el primero se refiere a labelque debe reemplazar en lugar de label herey el segundo se refiere a valueque debe reemplazar en lugar de value here.
Asegúrate de usar console.log() en cada paso del camino para visualizar con qué estás trabajando.

¡No olvides mirar el resultado final en la pestaña del navegador!


import {renderTableRows} from "./nutrition.js";

const data = [["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]];

const html = renderTableRows(data);

const tbody = document.querySelector("#nutrition-table tbody");
tbody.insertAdjacentHTML("beforeend", html);


Resumen del capítulo 
Última actualización junio 2022
¡Gran trabajo!

En el próximo capítulo, aprenderemos más sobre las devoluciones de llamada, así como métodos de matriz adicionales que usaremos a lo largo de todo el curso. Estos métodos demostrarán ser útiles, especialmente una vez que trabajemos con matrices de objetos, que son la estructura de datos más común que obtiene de las API.

Resumen del capítulo

const data = [1, 2, 3]es una matriz que contiene 3 números.
array.lengthdevuelve el número de elementos dentro de la matriz.
array.push(x)le permite agregar la variable x al final de la matriz.
array.push(x)devuelve la nueva longitud de la matriz (después de que se haya realizado la inserción).
Las matrices definidas con const no son constantes porque puede cambiar los elementos dentro de ellas. Sin embargo, no puede reasignarlos a otro valor, por lo que siempre serán una matriz.
.forEach(callback)itera sobre cada elemento de una matriz.
Una devolución de llamada es una definición de función que se pasa como argumento a otra función.
Comience siempre con un console.log()dentro de .forEach()para visualizar el cambio de matriz a elemento de matriz (puede omitirlo cuando se acostumbre).
El .forEach()método tomará la definición de su función y la llamará para cada elemento de la matriz. Cada vez que se llama a la devolución de llamada, el primer parámetro representará el elemento de matriz correspondiente.
Nombra tus arreglos en plural y el elemento del arreglo (dentro del .forEach()) en singular.
Asegúrese de colocar correctamente el returninterior de una función que contenga un archivo .forEach().


Resumen del capítulo 

Última actualización junio 2022
Exploraremos en este capítulo más métodos de matriz mientras aprendemos simultáneamente sobre las devoluciones de llamada.

Una matriz comúnmétodoes el .filter()método. Cuando llama a este método en una matriz, obtendrá otra matriz que contiene algunos de los elementos de la matriz original, según la condición que especifique. Tomemos un ejemplo:

let numbers = [9, 5, 14, 3, 11];

let numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
No olvide la returnpalabra clave dentro de la función de devolución de llamada.

Observe cómo obtuvimos una nueva matriz que contiene los elementos que han cumplido la condición. La condición es que el numberdebe estar por encima de 10.

En un par de capítulos, veremos cómo escribir lo anterior con funciones de flecha, ¡se verá agradable y breve!

Entonces, ¿cómo funciona esto?

Array.filter (devolución de llamada)
Veamos cómo funciona el código anterior desglosando su ejecución paso a paso.

El .filter()método espera una devolución de llamada como primer argumento. En nuestro ejemplo, la devolución de llamada es:

function(number) {
    return number > 10;
}
JavaScript tomará su devolución de llamada y la llamará para cada elemento de la matriz. Nuestra numbersmatriz tiene 5 elementos, por lo que la llamará 5 veces. Cada vez que llame a esta función, le dará un valor al numberparámetro que especificó dentro de esta devolución de llamada .

La primera vez que se ejecuta, le dará numberun valor de 9 (el primer elemento de la matriz).
La segunda vez que se ejecuta, le dará numberun valor de 5 (el segundo elemento de la matriz).
y así sucesivamente hasta el último elemento de la matriz.
Así es como funcionan las devoluciones de llamada. Ahora, cada método de matriz tiene un comportamiento diferente que explicaremos. Este comportamiento a menudo depende del resultado de la devolución de llamada. En este ejemplo, si la función de devolución de llamada devuelve true, el elemento se incluirá en la matriz final devuelta por .filter(). Sin embargo, si la función de devolución de llamada devuelve false, el elemento no se incluirá en la matriz final.

Eso significa que, si tiene el siguiente código:


numbers.filter(function(number) {
    return true;
});
Esto devolverá todos los elementos de la matriz. Entonces terminará obteniendo una copia de la matriz original. Eso es porque la devolución de llamada siempre regresa como verdadera. Este código no es muy útil, pero es para mostrarle la importancia de lo que devuelve la función de devolución de llamada y cómo eso afecta el resultado del .filter()método.

Es por eso que teníamos una condición number >= 10. Esta condición devolverá trueo falsesegún el valor de number.

Probablemente tengas una pregunta en tu cabeza ahora. ¿Cómo sabe JavaScript que cada elemento de la numbersmatriz se convierte numberen el argumento de devolución de llamada? ¡Y la respuesta a eso es que no lo sabe!

JavaScript tomará su devolución de llamada y pasará el elemento de la matriz como el primer parámetro a su función de devolución de llamada. Esto significa que el siguiente código funciona (pero no se recomienda):

let numbers = [9, 5, 14, 3, 11];

// works but is NOT recommended
let numbersAboveTen = numbers.filter(function(x) {
    return x > 10;
});
console.log(numbersAboveTen); // [14, 11]
A JavaScript no le importa cómo llamas a tus variables. Llamará a su función de devolución de llamada y le dará un valor al primer parámetro que llamamos xaquí.

Sin embargo, desde la perspectiva del desarrollador, ¿qué es x? No está nada claro, así que siempre asegúrese de seguir la convención de nomenclatura plural -> singular que cubrimos en el capítulo anterior. Hará tu vida más fácil.

El código a continuación:


let years = [2000, 2008, 2020, 2023];

years.filter(function(year) {
    return year >= 2010;
});
se puede leer en inglés simple como Filtrar los años donde el año es 2010 y superior .

Filtrar los años corresponde a years.filter.
donde el año es 2010 y superior corresponde a la función de devolución de llamada (y la condición dentro de ella) que se ejecuta para cada elemento de la matriz.
logotipo de MDNArray.filter() en MDN


Resumen
El .filter()método devuelve una nueva matriz que contiene algunos de los elementos de la matriz original, según la condición que especifique.
JavaScript tomará su función de devolución de llamada y la llamará para cada elemento de la matriz.
Para el .filter()método, el resultado de la función de devolución de llamada es importante. Cuando es true, el elemento se incluirá en la matriz resultante. De lo contrario, no lo hará.
JavaScript no puede hacer una suposición inteligente de que la numbersmatriz se convierte en el numberparámetro en su función de devolución de llamada. Lo que hace es que llama a su función de devolución de llamada mientras da un valor para el primer parámetro que especificó.
Use la convención de nomenclatura plural -> singular.filter() al usar el método.

Temperaturas positivas

Complete la función getPositiveTemperaturesde modo que devuelva una matriz que contenga las temperaturas positivas (las temperaturas que están por encima de 0).

function getPositiveTemperatures(temperatures) {
    return temperatures.filter(function(temperature) {
        return temperature > 0;
    });
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

Temperaturas de congelación

Complete la función getFreezingTemperaturesde modo que devuelva una matriz que contenga las temperaturas de congelación (las temperaturas que están por debajo de 0).

function getFreezingTemperatures(temperatures) {
    return temperatures.filter(function(temperature){
    return temperature < 0 ;
    }
    )

}

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]


búsqueda de matriz 

Última actualización agosto 2022
Aprendimos en la lección anterior sobre el método Array .filter(). En esta lección, exploraremos el .find()método que es un poco similar en la forma en que funciona.

Comencemos con un ejemplo, esta vez con una matriz de cadenas:


let names = ["Sam", "Alex", "Charlie"];

let result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
Cuando llame al .find(callback)método en una matriz, obtendrá el primer elemento que coincide con la condición que precisa. Si no se encontraron elementos, volverán undefined.

La condición que especificamos aquí es que namedebe ser igual a "Alex".

Entonces, el .find(callback)método llamará a la devolución de llamada que tendrá para cada elemento de la matriz hasta que regrese una de las devoluciones de llamada true. Cuando esto suceda, deje de llamar a las devoluciones de llamada restantes y le devolverá el elemento para el que se devolvió la devolución de llamada true.

En nuestro ejemplo anterior, aquí está la devolución de llamada:

function(name) {
  return name === "Alex";
}
que se solicita name = "Sam"(primer elemento de la matriz). Sin embargo, la devolución de llamada volverá falseporque name === "Alex"devuelve false. Entonces, la devolución de llamada se volverá a llamar con el siguiente valor de nombre. Esta vez, name = "Alex". La devolución de llamada regresará trueporque name === "Alex"(la condición dentro de la devolución de llamada) regresa true. Así que el .find()método se detiene y te devuelve ese elemento que es "Alex".

Tomemos otro ejemplo, pero esta vez con una matriz de números:

let numbers = [9, 5, 14, 3, 11];

let firstNumberAboveTen = numbers.find(function(number) {
    return number > 10;
});
console.log(firstNumberAboveTen); // 14
Observe cómo aunque hay 2 números que satisfacen la condición, el .find()método se detiene en el primero que satisface la condición.

Esto nos llevará a la siguiente sección, que es .filter()vs. .find()¿Cuáles son las diferencias?

.filtro() frente a .buscar()
Entonces, ¿cuál es la diferencia entre .filter()y .find()?

La diferencia tiene que ver con el tipo de retorno de estos 2 métodos:

El .filter()método siempre devuelve una matriz.
El .find()método devuelve el primer elemento de la matriz que coincide con la función de devolución de llamada o undefined.
Echemos un vistazo a algunos ejemplos:

let numbers = [9, 5, 14, 3, 11];

// .filter() ALWAYS returns an array
numbers.filter(function(number) {
    return number >= 12;
}); // [14]

// .find() returns the first match or undefined
numbers.find(function(number) {
    return number >= 12;
}); // 14
Observe cómo .filter()devuelve una matriz, incluso si solo hay 1 elemento que coincide con su condición. Por el contrario, el .find()método devolverá el primer elemento que coincida con la condición.

.filter() siempre devuelve una matriz. Incluso si coincidió con un artículo o con ningún artículo .

Ahora echemos un vistazo a un ejemplo en el que ningún elemento cumple la condición:


let numbers = [9, 5, 14, 3, 11];

// filter() ALWAYS returns an array (even if it's empty)
numbers.filter(function(number) {
    return number >= 15;
}); // []

// .find() returns the first match or undefined (when none of the items satisfy the condition)
numbers.find(function(number) {
    return number >= 15;
}); // undefined
Observe cómo .filter()devolvió una matriz vacía y .find()devolvió undefined.

.find(callback)undefinedpuede volver Es posible que deba envolver su resultado en un if conditionpara evitar errores inesperados si termina llamando a un método en su resultado.

logotipo de MDNArray.find() en MDN


Resumen
El .find()método devuelve el primer elemento que coincide con la condición que especifica. Si no se encontraron elementos, volverá undefined.
El .filter()método siempre devuelve una matriz. Incluso si está vacío.


obtener año

Complete la función getYearde modo que devuelva el searchYear(pasado como segundo parámetro) cuando se encuentre en la matriz. De lo contrario, debería volver undefined.

Eche un vistazo al uso de muestra y el resultado esperado para comprender mejor cómo debería funcionar la función.

function getYear(years, searchYear) {
  return years.find(function(year) {
    return year === searchYear;
  });
}
// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined



Años impares

Complete la función getOddYearsde manera que devuelva todos los años impares del yearsparámetro que recibe.

PD: Sabemos que 2020 fue un año "impar" pero el número 2020 es par ;)

function getOddYears(years) {
return years.filter(function(year){
return year%2===1;} 
)

}

// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]


Más métodos de matriz 

Última actualización febrero 2022
En esta lección, veremos tres métodos de matriz.

mapa de matriz

El .map(callback)método le permite transformar una matriz en otra. Estos son algunos ejemplos comunes:

[4, 2, 5, 8]transformado en [8, 4, 10, 16]. Duplicamos todos los elementos de la matriz original.
["sam", "Alex"]transformado en ["SAM", "ALEX"]. Ponemos en mayúsculas cada elemento en la matriz original.
Tenga en cuenta que siempre obtiene una matriz que contiene la misma cantidad de elementos en comparación con la matriz original, pero lo más probable es que cada elemento haya sufrido alguna transformación.

En el primer ejemplo, la transformación es que multiplicamos cada número por 2.
En el segundo ejemplo, la transformación es que llamamos .toUpperCase()a todos los elementos.

Veamos cómo podemos implementar estas transformaciones:


const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
y

const names = ["sam", "Alex"];
const upperNames = names.map(function(name) {
    return name.toUpperCase();
});
Si olvida el return interior de la función de devolución de llamada, terminará con la siguiente matriz: [undefined, undefined]. Esto se debe a que, por cada elemento de la matriz original ( ["sam", "Alex"]), está regresando, undefined por lo que el resultado final será [undefined, undefined].

Una vez que comete este error varias veces, se convierte en una clara señal de que ha olvidado la palabra clave de retorno.

logotipo de MDNArray.map() en MDN


La matriz include (elemento)
El .includes(item)método de matriz es uno de los métodos de matriz más simples, ya que toma una itemdevolución de llamada en lugar de una devolución de llamada y regresa truecuando itemexiste en la matriz y de falseotra manera. Aquí hay un ejemplo:


const groceries = ["Apple", "Peach", "Tomato"];

groceries.includes("Tomato"); // true
groceries.includes("Bread"); // false
logotipo de MDNArray.includes() en MDN


Unión de matriz (encadenar)
Cuando tiene una matriz y representa esta matriz en una página web (como veremos más adelante en la sección DOM del curso), la matriz se convertirá automáticamente en una cadena. JavaScript invocará automáticamente el .toString()método de la matriz que devuelve una cadena de elementos de la matriz separados por comas. Así es como funciona:


const groceries = ["Apple", "Peach", "Tomato"];
groceries.toString(); // "Apple,Peach,Tomato"
Pero hay una desventaja, que es que no puede personalizar el pegamento que se inserta entre los elementos de la matriz, que es el ,carácter de coma.

Si desea personalizar el pegamento, puede usar el .join(glue)método:


const groceries = ["Apple", "Peach", "Tomato"];
groceries.join("; "); // "Apple; Peach; Tomato"
groceries.join(" . "); // "Apple . Peach . Tomato"
logotipo de MDNArray.join() en MDN


Resumen
El .map(callback)método de matriz que permite transformar una matriz en otra.
.includes(item)El método de matriz toma item y devuelve true cuando item existe en la matriz y de false lo contrario.
El .join(pegamento)método de matriz devuelve una cadena de elementos de la matriz separados por el pegamento.

¿Se usa la aplicación?

Complete la función isAppUsedde modo que regrese truecuando el appparámetro que recibe exista en el appsparámetro, y de falselo contrario.

function isAppUsed(apps, app) {
   return apps.includes(app);

}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false

Tamaños de cadena

Complete la función getStringSizesde modo que devuelva una matriz de la cantidad de caracteres para cada cadena que recibe en el stringsparámetro.

Esto significa que, para la matriz ["abc", "d"], debería devolverse [3, 1]porque la primera cadena se compone de 3 caracteres y la segunda cadena se compone de 1 carácter.

function getStringSizes(strings) {
  return strings.map(function(string) {
    const largo=string.length;
    return largo
  }

  )};

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]

Proyecto de aula I

¡Este es un proyecto de clase! Puede ingresar calificaciones en la pestaña del navegador y agregarlas a la aplicación, que le mostrará varias estadísticas sobre el aula. Por ejemplo, verá la calificación promedio, todas las calificaciones reprobatorias, etc.

Cada función tiene un comentario que describe lo que debe devolver, pero también puede encontrarlos a continuación:

getNumberOfGradesdebe devolver el número de calificaciones.
getSumGradesdebe devolver la suma de todas las calificaciones.
getAverageValuedebe devolver el valor promedio de todas las calificaciones (suma de todas las calificaciones dividida por el número total de calificaciones).
getPassingGradesdebe devolver todas las calificaciones aprobatorias (10 y más).
getFailingGradesdebe devolver todas las calificaciones reprobatorias (9 y menos).
getRaisedGradesdebe devolver todas las calificaciones aumentadas en 1 (las calificaciones no deben exceder 20).

/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // TODO: return the number of grades
return grades.length
};

/** @param {number[]} grades */
export function getSumGrades(grades) {
    // TODO: return the sum of all the grades
let sum = 0;
    grades.forEach(function(grade) {
        sum = sum + grade;
       
    });
    return sum;

}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
let sum = 0;
let cociente=0;
    grades.forEach(function(grade) {
        sum = sum + grade;
      
    });
cociente= grades.length;
return sum/cociente;

   

}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
     return grades.filter(function(grade){
     if(grade>=10)
     return grade}
    )};


/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
return grades.filter(function(grade){
     if(grade<10)
     return grade}
    )};




/** @param {number[]} grades */
export function getRaisedGrades(grades) {
   return grades.map(function(grade){
     if(grade<20){
     return grade+1}
     {return grade};
   }
  
    )};




    API de estadísticas de votantes

Este proyecto utiliza la fetchAPI (sobre la que aprenderá más adelante en este curso) para obtener las estadísticas de los ciudadanos de una ciudad. Para completar este proyecto, debe devolver la cantidad de votantes en la ciudad seleccionada por el usuario.

Vaya a la pestaña del navegador y seleccione Amsterdamo Berlin. Esto obtendrá la edad de los ciudadanos en la ciudad seleccionada (no datos reales) usando una API. Estos datos son recibidos por una función llamada getVotersCount.

Implemente la getVotersCountfunción de modo que devuelva el número de ciudadanos que pueden votar (deben tener 18 años o más).

export function getVotersCount(ages) {
    return ages.filter(function(age){
        return age >= 18;
    }).length;
}

Resumen del capítulo 

Última actualización julio 2021
¡Buen trabajo!

Aprenderemos en un capítulo futuro algunos métodos de matriz adicionales y luego, después de aprender acerca de los objetos, usaremos estas funciones con matrices de objetos, que es en la vida real, ¡el tipo de estructura de datos más común con el que trabajará!

Resumen del capítulo
El .filter()método devuelve una nueva matriz que contiene algunos de los elementos de la matriz original, según la condición que especifique.
JavaScript tomará su función de devolución de llamada y la llamará para cada elemento de la matriz.
Para el .filter()método, el resultado de la función de devolución de llamada es importante. Cuando es true, el elemento se incluirá en la matriz resultante. De lo contrario, no lo hará.
JavaScript no puede hacer una suposición inteligente de que la numbersmatriz se convierte en el numberparámetro en su función de devolución de llamada. Lo que hace es que llama a su función de devolución de llamada mientras da un valor para el primer parámetro que especificó.
Use la convención de nomenclatura plural -> singular.filter() al usar el método.
El .find()método devuelve el primer elemento que coincide con la condición que especifica. Si no se encontraron elementos, volverá undefined.
El .filter()método siempre devuelve una matriz. Incluso si está vacío.
El .map(callback)método de matriz le permite transformar una matriz en otra.
.includes(item)El método de matriz toma itemy devuelve truecuando itemexiste en la matriz y de falselo contrario.
El .join(glue)método de matriz devuelve una cadena de elementos de la matriz separados por el glue.
