// JavaScript
// �ltima actualizaci�n:�Feb 07 2020

// Isomorfismo
// Hoy�JavaScript, es el �nico lenguaje capaz de ejecutarse en las 3 capas de una aplicaci�n:
// 1. Frontend�(con�JavaScript).
// 2. Backend�(con�Node.js).
// 3. Persistencia de Datos (con�MongoDB,�Couch DB,�Firebase, etc).
// Con JavaScript puedes:
// * Dise�o y Desarrollo Web.
// * Hacer Videojuegos.
// * Experiencias�3D, Realidad Aumentada, Realidad Virtual.
// * Controlar�Hardware�(drones,�robots, electrodom�sticos,�wearables, etc).
// * Aplicaciones H�bridas y M�viles.
// * Aprendizaje Autom�tico.
// * etc.

// JavaScript�NO es�JAVA

// Caracter�sticas
// * Lenguaje de Alto Nivel.
// * Interpretado.
// * Din�mico.
// * D�bilmente Tipado.
// * Multi paradigma.
// * Sensible a MAY�SCULAS y min�sculas.
// * No necesitas los puntos y comas al final de cada l�nea.

// Escritura de c�digo
// Los�identificadores�deben comenzar con:
// * Una letra o
// * Un signo de dolar�$�o
// * Un gui�n bajo�_
// * Nunca con n�meros o caracteres especiales.
// Usa�snake_case�en:
// * Nombre de archivos:
// mi_archivo_javascript.js;
// Usa�UPPER_CASE�en:
//* Constantes:

const UNA_CONSTANTE = "Soy una constante",
  PI = 3.141592653589793;

// Usa�UpperCamelCase�en:
// * Clases:

class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}

// Usa�lowerCamelCase�en:
// * Objetos:

const unObjeto = {
  nombre: "Jonathan",
  email: "jonmircha@gmail.com",
};

//* Primitivos:

let unaCadena = "Hola Mundo",
  unNumero = 19,
  unBoolean = true;

//* Funciones:

function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Jonathan");

//* Instancias:

const ajax = new XMLHttpRequest(),
  jon = new SerHumano("Jonathan", "Hombre");

// Palabras reservadas
// A: abstract
// B: boolean, break, byte
// C: case, catch, char, class, const, continue
// D: debugger, default, delete, do, double
// E: else, enum, export, extends
// F: false, final, finally, float, for, function
// G: goto
// I: if, implements, import, in, instanceof, int, interface
// L: let, long
// N: native, new, null
// P: package, private, protected, public
// R: return
// S: short, static, super, switch, synchronized
// T: this, throw, throws, transient, true, try, typeof
// V: var, volatile, void
// W: while, with

// Ordenamiento de c�digo
// 1. IMPORTACI�N DE M�DULOS.
// 2. DECLARACI�N DE VARIABLES.
// 3. DECLARACI�N DE FUNCIONES.
// 4. EJECUCI�N DE C�DIGO.

// Tipos de datos en�JavaScript
// Primitivos: Se accede directamente al valor.
// * string
// * number
// * boolean
// * null
// * undefined
// * NaN
// Compuestos: Se accede a la referencia del valor.
// * object = {}
// * array = []
// * function () { }
// * Class {}
// * etc.
      

      
// ECMAScript
// Última actualizaci�n:�Sep 16 2020

// ECMAScript
// 1. Qu� es
// 2. Babel
// 3. Variables de bloque y constantes
// 4. Nivel de Bloques
// 5. Plantillas de cadenas de texto
// 6. Funciones flecha
// 7. Objetos literales
// 8. Destructuraci�n
// 9. Par�metros por defecto
// 10. Par�metros�Rest
// 11. Operador de propagaci�n
// 12. Clases
// 13. M�dulos
// 14. Promesas
// 15. Iteradores
// 16. S�mbolos
// 17. Generadores
// 18. Proxies
// 19. Reflexi�n
// 20. Decoradores
// 21. Funciones As�ncronas
// 22. M�todos clase�String
// 23. N�meros octales y binarios
// 24. M�todos clase�Math
// 25. M�todos clase�Array
// 26. M�todos clase�Object
// 27. Maps�Sets�y�Weaks

// Qu� es
// * ECMAScript�es el nombre del est�ndar internacional que define�JavaScript.
// * Definido por un comit� t�cnico (TC-39�) de�ecma international.
// * Identificado como�Ecma-262�y�ISO/IEC 16262.
// * No es parte de la�W3C.
// Edici�n
// Publicaci�n
// Cambios
//       1
// 1997
// Primera edici�n.
//       2
// 1998
// Cambios editorales para mentener la especificaci�n completa alineada con el est�ndar internacional�ISO/IEC 16262.
//       3
// 1999
// Se agregaron expresiones regulares, mejor manejo de�strings, nuevo control de declaraciones, manejo de excepciones con�try/catch, definici�n m�s estricta de errores, formato para la salida num�rica y otras mejoras.
//       4
// Abandonado
// La cuarta edici�n fue abandonada debido a diferencias pol�ticas respecto a la complejidad del lenguaje. Muchas caracter�sticas propuestas para la cuarta edici�n fueron completamente abandonadas; algunas fueron propuestas para la edici�n�ECMAScript Harmony.
//       5
// 2009
// Agrega el modo estricto�strict mode, un subconjunto destinado a proporcionar una mejor comprobaci�n de errores y evitar constructores propensos a errores. Aclara varias ambig�edades de la tercera edici�n, y afina el comportamiento de las implementaciones del "mundo real" que difieren consistentemente desde esa especificaci�n. Agrega algunas nuevas caracter�sticas, como�getters�y�setters, librer�a para el soporte de�JSON, y una m�s completa reflexi�n sobre las propiedades de los objetos.
//       5.1
// 2011
// Est� completamente alineada con la tercera edici�n del est�ndar internacional�ISO/IEC 16262:2011.
      

// Apartir del 2015 las actualizaciones son continuas teniendo una versi�n anual.
//       6
// 2015
// ES2015�aka�ES6.
//       7
// 2016
// ES2016�aka�ES7.
//       8
// 2017
// ES2017�aka�ES8.
//       9
// 2018
// ES2018�aka�ES9.
//       10
// 2019
// ES2019�aka�ES10.
//       ESNext
// 2020
// A partir del 2020 las nuevas actualizaciones al est�ndar simplemente se bautizar�n como�ESNext.
//       ?? Regresar

// 

Instalaci�n de paquetes:

npm install - D babel - cli babel - core babel - preset - env

Crear el archivo de configuarci�n�.babelrc

{
  "presets": [ "env" ],
  "plugins": []
}
Crear el�script�necesario para compilar�ES�con�Babel�en el archivo�.package.json:
{
  "name": "taller-es",
  "version": "1.0.0",
  "description": "Aprendiendo ECMAScript",
  "main": "index.js",
  "scripts": {
    "es6": "babel src --watch --out-dir dist"
  },
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-core": "^6.25.0",
    "babel-preset-env": "^1.6.0"
  }
}
Ejecutar el�script�en la terminal:
npm run es6
?? Regresar

Variables de bloque y constantes
Variables de bloque
En�ES�se agrega una nueva forma de definir variables usando la palabra�let, se diferencia de�var�en que el scope de una variable definida con�let�es, el bloque en el cual se encuentra la variable y no la funci�n.
let x = 'Hola kEnAi';

if (true) {
  let x = 'Hola Jon';
  console.log(x);  // Imprime en consola Hola Jon
}

console.log(x);  // Imprime en consola Hola kEnAi

for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime del 0 al 4
};

console.log(i); // Imprime Uncaught ReferenceError: i is not defined
Constantes
Una constantes es un tipo�INMUTABLE, NO puede cambiar una vez definida, se usa la palabra�const�en lugar de�var, al igual que�let�su�scope�es de bloque, son tipos de s�lo lectura y se le debe asignar un valor en el momento de su declaraci�n. Son referencias inmutables, pero sus valores no necesariamente.
const DIEZ = 10;
DIEZ = 5;
console.log(DIEZ); // Imprime Uncaught TypeError: Assignment to constant variable

const hola = 'hola mundo';
hola = 'hola mundo'; // Imprime Uncaught TypeError: Assignment to constant variable

const PI;
PI = 3.141592653589793; //Imprime Missing initializer in const declaration

const obj = {};
obj.prop = 'x';
console.log(obj); //Imprime { prop: 'x' }
obj.prop = 'y';
console.log(obj); //Imprime { prop: 'y' }

const D = document;
console.log(D); //Imprime el objeto document
console.log(D.documentElement); //Imprime el elemento <html>
?? Regresar

Nivel de Bloques
En�ES5�los �mbitos de declaraci�n (scope) estaban dise�ados a nivel de funciones, con�ES6�podemos declarar funciones a nivel de bloque.
En�ES6, como en muchos otros lenguajes de programaci�n, el bloque se define entre llaves y genera un nuevo scope (block scope).
//Sin bloques
function f() { return 1; }

console.log( f() ); //Imprime 2

function f() { return 2; }

console.log( f() ); //Imprime 2

console.log( f() ); //Imprime 2

//Con bloques
function f() { return 1; }

{
  console.log( f() ); //Imprime 2

  function f() { return 2; }

  console.log( f() ); //Imprime 2
}

console.log( f() ); //Imprime 1
?? Regresar

Plantillas de cadenas de texto
Los�template string�son una forma m�s f�cil de crear:
* Cadenas con variables dentro (interpolaci�n).
* Generar cadenas multil�nea.
* Ejecutar expresiones, funciones y etiquetados.
let saludo = `Hola soy un Template String`;
console.log(saludo); //Imprime Hola soy un Template String

//strings multil�nea
let mensaje = `No es quien seas en el interior,
tus actos son los que te definen...
Batman`;
console.log(mensaje);
/*
Imprime
No es quien seas en el interior,
tus actos son los que te definen...
Batman
*/

//variables en strings (interpolaci�n)
let nombre = 'Jonathan';
console.log(`Hola ${nombre}`); //Imprime Hola Jonathan

//ejecutar expresiones
console.log(`Hola ${nombre}, tienes ${30 + 2} a�os`); //Imprime Hola Jonathan, tienes 32 a�os

//ejecutar funciones
let estaciones = ['Primavera', 'Verano', 'Oto�o', 'Invierno'],
  ol = `<ol>
    ${
      estaciones.map(function (estacion) {
        return `<li>${estacion}</li>`;
      }).join('')
    }
  </ol>`;

console.log(ol); //Imprime <ol><li>Primavera</li><li>Verano</li><li>Oto�o</li><li>Invierno</li></ol>

//funci�n de etiquetado
const etiqueta = function (cadena, variable) {
  console.log(cadena); //Imprime ["Hola ", "", raw: Array[2]]
  console.log(variable); //Imprime Ulises
  console.log(cadena[0] + variable); //Imprime Hola Ulises
};

let otroNombre = 'Ulises';

etiqueta`Hola ${otroNombre}`;
?? Regresar

Funciones flecha
Es una nueva forma de definir funciones, hay distintas variantes en la sintaxis:
Funci�n de un solo par�metro
Al crear una�arrow function�de un solo par�metro no es necesario escrib�r los par�ntesis, tampoco es necesario escrib�r las llaves, esto se puede cuando la funci�n es de una sola l�nea y devuelve un valor.
//Antes
var saludo = function (nombre) {
  return 'Hola ' + nombre;
};
console.log( saludo('Jonathan') ); //Imprime Hola Jonathan

//Ahora
let saludo = nombre => `Hola ${nombre}`;
console.log( saludo('Jonathan') ); //Imprime Hola Jonathan
Funci�n de varios par�metros
Cuando la funci�n tenga m�s de un par�metro es necesario envolver el nombre de estos entre par�ntesis.
//Antes
var sumar = function (a, b) {
  return a + b;
};
console.log( sumar(10, 9) ); //Imprime 19

//Ahora
let sumar = (a, b) => a + b;
console.log( sumar(10, 9) ); //Imprime 19
Funci�n sin par�metros
Cuando la funci�n no reciba par�metros tambi�n son necesarios los par�ntesis.
//Antes
var saludo = function () {
  return 'Hola a tod@s';
};
console.log( saludo() ); //Imprime Hola a tod@s

//Ahora
let saludo = () => `Hola a tod@s`;
console.log( saludo() ); //Imprime Hola a tod@s
Funci�n con cuerpo
Cuando la funci�n tiene m�s de una l�nea (o no devuelve ning�n valor) es necesario utilizar las llaves.
//Antes
var fecha = new Date(),
  hora = fecha.getHours();

var saludo = function (hr) {
  if (hr <= 5) {
    return 'No me jodas!!!';
  } else if(hr >= 6 && hr <= 11) {
    return 'Buenos d�as!!!';
  } else if(hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!';
  } else {
    return 'Buenas noches!!!';
  }
};

console.log( saludo(hora) ); //Imprime el saludo dependiendo la hora del d�a

//Ahora
let fecha = new Date(),
  hora = fecha.getHours();

let saludo = (hr) => {
  if (hr <= 5) {
    return 'No me jodas!!!';
  } else if(hr >= 6 && hr <= 11) {
    return 'Buenos d�as!!!';
  } else if(hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!';
  } else {
    return 'Buenas noches!!!';
  }
};

console.log( saludo(hora) ); //Imprime el saludo dependiendo la hora del d�a

//Antes
var numeros = [1, 2, 3, 4];

numeros.forEach(function (num) {
  console.log(num); //Imprime el n�mero en turno
  console.log(num * 10); //Imprime el n�mero en turno por 10
});

//Ahora
let numeros = [1, 2, 3, 4];

numeros.forEach((num) => {
  console.log(num); //Imprime el n�mero en turno
  console.log(num * 10); //Imprime el n�mero en turno por 10
});
Contexto L�xico de�this
Las�arrow functions�tienen la capacidad de capturar el objeto�this�del contexto donde la�arrow�se ejecuta y as� utilizarlo dentro de su bloque de sentencias.
//El problema de `this` Antes
function Persona(nombre) {
  //El constructor Persona() define `this` como una instancia de �l mismo
  this.nombre = nombre;
  this.edad = 0;

  setInterval(function () {
    //La funci�n an�nima define `this` como una instancia de ella misma
    this.edad++;
  }, 1000);
}

var jon = new Persona('Jonathan');
console.log(jon); //Imprime la edad en 0 por cada segundo que pasa


//La soluci�n al problema de `this` Antes
function Persona(nombre) {
  //Se declara una variable self (algunos prefieren that) para guardar el `this` del constructor Persona()
  var self = this;

  self.nombre = nombre;
  self.edad = 0;

  setInterval(function () {
    //La funci�n an�nima define su propio `this` pero el valor que aumenta es edad del `this` de Persona()
    self.edad++;
  }, 1000);
}

var jon = new Persona('Jonathan');
console.log(jon); //Imprime el valor de edad m�s uno por cada segundo que pasa


//La soluci�n al problema de `this` Ahora
function Persona(nombre) {
  //El constructor Persona() define `this` como una instancia de �l mismo
  this.nombre = nombre;
  this.edad = 0;

  setInterval(() => {
    //`this` hace referencia al objeto Persona()
    this.edad++;
  }, 1000);
}

const jon = new Persona('Jonathan');
console.log(jon); //Imprime el valor de edad m�s uno por cada segundo que pasa
console.log(jon.edad); //Imprime la edad
?? Regresar

Objetos literales
Atajos en la escritura de atributos y m�todos:
//Antes
var nombre = 'kEnAi',
  edad = 4;

var perro = {
  nombre : nombre,
  edad : edad,
  ladrar : function () {
    alert('guau guau!!!');
  }
};

console.log(perro); //Imprime Object {nombre: "kEnAi", edad: 4}
perro.ladrar(); //Manda alerta

//Ahora
let nombre = 'kEnAi',
  edad = 4;

const perro = {
  nombre,
  edad,
  ladrar() {
    alert('guau guau!!!');
  }
};

console.log(perro); //Imprime Object {nombre: "kEnAi", edad: 4}
perro.ladrar(); //Manda alerta
Nombres de atributos y m�todos calculados (o computados):
let nombreAtributo = 'nombre',
  nombreOtroAtributo = 'ad',
  nombreMetodo = 'ladrar';

const perro = {
  [nombreAtributo] : 'kEnAi',
  [`ed${nombreOtroAtributo}`] : 4,
  [nombreMetodo]() {
    alert('guau guau!!!');
  }
};

console.log(perro); //Imprime Object {nombre: "kEnAi", edad: 4}
perro.ladrar(); //Manda alerta
?? Regresar

Destructuraci�n
Nuevas formas de asignar valores a Arreglos y Objetos.
//Destructuraci�n de Arreglos
let numeros = [1, 2, 3];

//sin destructuraci�n
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

console.log(numeros, uno, dos, tres); //Imprime [1, 2, 3] 1 2 3

//con destructuraci�n
let [one, two, three] = numeros;

console.log(numeros, one, two, three); //Imprime [1, 2, 3] 1 2 3

//Destructuraci�n de Objetos
let persona = { nombre: 'Jonathan', apellido: 'MirCha' };
let { nombre, apellido } = persona;

console.log(persona); //Imprime Object {nombre: "Jonathan", apellido: "MirCha"}
console.log(nombre); //Imprime Jonathan
console.log(apellido); //Imprime MirCha

let datos = { correo: 'jonmircha@gmail.com', telefono: 5566778899 };

let { correo: email, telefono: phone } = datos;

console.log(datos); //Imprime Object {correo: "jonmircha@gmail.com", telefono: 5566778899}
console.log(email); //Imprime jonmircha@gmail.com
console.log(phone); //Imprime 5566778899
?? Regresar

Par�metros por defecto
Ahora es completamente posible definir un valor por defecto a los par�metros de nuestras funciones al igual que en otros lenguajes de programaci�n.
//Antes
function pais(nombre) {
  nombre = nombre || 'Terrestre';
  console.log(nombre);
}

pais(); //Imprime Terrestre
pais('M�xico'); //Imprime M�xico

//Ahora
function pais(nombre = 'Terrestre') {
  console.log(nombre);
}

pais(); //Imprime Terrestre
pais('M�xico'); //Imprime M�xico
?? Regresar

Par�metros�Rest
Los par�metros�Rest�son una forma de utilizar par�metros virtualmente infinitos, se definen agregando�...�adelante del nombre del par�metro rest, �ste tiene que ser siempre el �ltimo par�metro de la funci�n.
function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(n => {
    resultado += n;
  });

  return console.log(resultado);
}

sumar(1,2); //Imprime 3
sumar(1,2,3); //Imprime 6
sumar(1,2,3,4); //Imprime 10
sumar(1,2,3,4,5); //Imprime 15
?? Regresar

Operador de propagaci�n
Permite que una expresi�n sea expandida en situaciones donde se esperan m�ltiples argumentos o elementos.
let arr1 = [1, 2, 3, 4],
  arr2 = [5, 6, 7, 8];

console.log(arr1); //Imprime [1, 2, 3, 4]
console.log(...arr1); //Imprime 1 2 3 4

arr1.push(...arr2);
console.log(arr1); //Imprime [1, 2, 3, 4, 5, 6, 7, 8]

let superiores = ['hombros', 'brazos', 'tronco'],
  inferiores = ['pelvis', 'piernas', 'rodillas'],
  cuerpo = ['cabeza', ...superiores, ...inferiores, 'pies'];

console.log(cuerpo); //Imprime ["cabeza", "hombros", "brazos", "tronco", "pelvis", "piernas", "rodillas", "pies"]

console.log(...cuerpo); //Imprime cabeza hombros brazos tronco pelvis piernas rodillas pies
?? Regresar

Clases
En�ES�se incorporan al lenguaje clases para poder hacer Programaci�n Orientada a Objetos m�s facilmente (sin prototipos), soportan herencia, polimorfismo, superclases, instancias, m�todos est�ticos, constructores, setters y getters.
Definici�n de clase, constructor e instancia de objetos:
class Animal {
  //el constructor es un m�todo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  //m�todos p�blicos de la clase
  comunicar() {
    console.log('Me comunico con sonidos');
  }

  comer() {
    console.log('Ingiero alimentos');
  }

  respirar() {
    console.log('Respiro ox�geno');
  }

  reproducir() {
    console.log('Me reproduzco sexualmente');
  }
}

let lucy = new Animal('Lucy', 20, 'Hembra');
console.log(lucy); //Imprime Animal {nombre: "Lucy", edad: 20, genero: "Hembra"}
lucy.comunicar(); //Imprime Me comunico con sonidos
lucy.comer(); //Imprime Ingiero alimentos
lucy.respirar(); //Imprime Respiro ox�geno
lucy.reproducir(); //Imprime Me reproduzco sexualmente
Herencia, polimorfismo, m�todos est�ticos,�setters�y�getters:
//con la palabra extends la clase Humano hereda de Animal
class Humano extends Animal {
  //el constructor es un m�todo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, edad, genero) {
    //con el m�todo super() se manda a llamar el constructor de la clase padre
    super(nombre, edad, genero);
    this.razonar = true;
    this._nacionalidad = 'Terrestre';
  }

  //un m�todo est�tico se pueden ejecutar sin necesidad de instanciar la clase
  static saludar() {
    console.log('Hola soy un Humano');
  }

  //Los setters y getters son m�todos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  set nacionalidad(pais) {
    this._nacionalidad = pais;
  }

  get nacionalidad() {
    return this._nacionalidad;
  }

  //m�todos p�blicos de la clase redefinidos gracias al polimorfismo
  comunicar() {
    console.log('Me comunico hablando');
  }

  comer() {
    console.log('Como de todo, soy omn�voro');
  }

  respirar() {
    console.log('Respiro ox�geno con ayuda de mis pulmones');
  }

  reproducir() {
    console.log('Me reproduzco sexualmente, soy mam�fero y viv�paro');
  }

  pensar() {
    console.log('Pienso por que tengo intelecto');
  }
}

Humano.saludar(); //Imprime Hola soy un Humano
let jon = new Humano('Jonathan', 32, 'Macho');
console.log(jon); //Imprime Humano {nombre: "Jonathan", edad: 32, genero: "Macho", razonar: true, _nacionalidad: "Terrestre"}
jon.comunicar(); //Imprime Me comunico hablando
jon.comer(); //Imprime Como de todo, soy omn�voro
jon.respirar(); //Imprime Respiro ox�geno con ayuda de mis pulmones
jon.reproducir(); //Imprime Me reproduzco sexualmente, soy mam�fero y viv�paro
jon.pensar(); //Imprime Pienso por que tengo intelecto
jon.nacionalidad = 'M�xico';
console.log(jon.nacionalidad); //Imprime M�xico
console.log(jon); //Imprime Humano {nombre: "Jonathan", edad: 32, genero: "Macho", razonar: true, _nacionalidad: "M�xico"}
?? Regresar

M�dulos
Antes de�ES6, utilizamos bibliotecas como�Browserify�para crear m�dulos en el lado del cliente (navegadores), y�require�en el servidor (Node.js). Con�ES, ahora podemos utilizar directamente m�dulos de todos los tipos (AMD,�CommonJS�y�ECMAScript).
M�s informaci�n:
* Documentaci�n declaraciones de Exportaci�n.
* Documentaci�n declaraciones de Importaci�n.
* Writing Modular JavaScript With AMD, CommonJS & ES Harmony.
Exportando en formato�CommonJS
module.exports = 1;
module.exports = { foo: 'bar' };
module.exports = ['foo', 'bar'];
module.exports = function bar () {};
Exportando en formato�ECMAScript
Por nombres:
export let nombre = 'Jonathan';
export let edad  = 33;??
Por lista de objetos:
function sumar( a, b ) {
  return a + b;
}

function restar( a, b ) {
  return a - b;
}

export { sumar, restar };
Usando�export�individualmente:
export function sumar( a, b ) {
  return a + b;
}

export function restar( a, b ) {
  return a - b;
}
Usando�default:
function sumar( a, b ) {
  return a + b;
}

function restar( a, b ) {
  return a - b;
}

let operaciones = {
  sumar,
  restar
}

export default operaciones;

//otra forma
export { operaciones as default };
Mejores Pr�cticas: Utiliza siempre el m�todo�export default�al final de m�dulos�ECMAScript, esto dejar� claro lo que se est� exportando y lo que no. En los m�dulos�CommonJS�suele exportarse un s�lo valor u objeto. Siguiendo con este paradigma, hacemos que nuestro c�digo sea f�cil, legible y que podamos combinar entre m�dulos�CommonJS�y�ECMAScript.
Importando en formato�CommonJS
//considerando que existe una carpeta libs y dentro un archivo llamado rutas con extensi�n .js o .json
const rutas = require('./libs/rutas');
Importando en�ECMAScript
Archivo completo:
import 'react';
import './libs/operaciones';
Por nombre de las importaciones:
import React from 'react';
import { sumar, restar } from './libs/operaciones';
Tambi�n se pueden renombrar las importaciones:
import {
  sumar as mas,
  restar as menos
} from './libs/operaciones';
Importaci�n por espacio de nombres:
import * as aritmetica from './libs/operaciones';
Importar una lista de valores de un m�dulo:
import * as aritmetica from './libs/operaciones';

const { sumar, restar } = aritmetica;
Al importar un m�dulo exportado usando la sintaxis�Commonjs�(como�React) podemos hacer lo siguiente:
import React from "react";
const { Component, PropTypes } = React;
Simplificando:
import React, { Component, PropTypes } from "react";
Nota: Los valores que se exportan son�enlaces, no referencias. Por lo tanto, cambiar el enlace de una variable en un m�dulo, afectar� su valor. Evita cambiar la interfaz p�blica de m�dulos exportados.
?? Regresar

Promesas
Es una manera alternativa a las�callbacks�para modelar asincron�a.
* Construcci�n expl�cita del flujo de ejecuci�n.
* Separaci�n en bloques consecutivos.
* Manejo de errores m�s controlado.
* Combinaci�n de diferentes flujos as�ncronos.
* M�s informaci�n.
Promesas en el navegador
function adivinarNumero() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let n = Math.floor(Math.random() * 10);

      return (n >= 1 && n <= 5)
        ? resolve(`Adivinaste el n�mero: ${n}`)
        : reject(new Error(`No adivinaste el n�mero: ${n}`));
    }, 1000);
  });
}

adivinarNumero()
  .then( num => console.log(num) )
  .catch(error => console.log(error) );
Promesas en el servidor
const fs = require('fs'),
  file = './nombres.txt',
  newFile = './nombres_promises_es6.txt';

let promise = new Promise((resolve, reject) => {
  fs.access(file, fs.F_OK, (err) => {
    return (err)
      ? reject( new Error('El archivo no existe') )
      : resolve(true);
  });
});

promise
  .then((dataPromise) => {
    console.log('El archivo existe');

    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        return (err)
        ? reject( new Error('El archivo no se pudo leer') )
        : resolve(data);
      });
    });
  })
  .then((dataPromise) => {
    console.log('El archivo se ha le�do exitosamente');

    return new Promise((resolve, reject) => {
      fs.writeFile(newFile, dataPromise, (err) => {
        return (err)
          ? reject( new Error('El archivo no se pudo copiar') )
          : resolve('El archivo se ha copiado con �xito');
      });
    });
  })
  .then((dataPromise) => { console.log(dataPromise); })
  .catch((err) => { console.log(err.message); });
?? Regresar

Iteradores
Un�Iterador�es un mecanismo que tienen los lenguajes de programaci�n para recorrer secuencialmente distintas estructuras de datos.
Para que un objeto sea iterable en�JavaScript�es necesario que:
* Implemente el tipo�Symbol.iterator.
* Implemente la funci�n�next�que devuelve un objeto con dos valores:
1. done�que indica si ha terminado de iterar y
2. value�que devuelve el valor actual.
Ejemplos de Iteradores:
console.log(typeof String.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Array.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Map.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Set.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Object.prototype[Symbol.iterator]); // Imprime undefined
Recorriendo iteradores con el bucle�for...of, que permite recorrer objetos iterables:
//Antes
var anArray = ['Hola', 1, true, {}],
  aString = 'Hola soy iterable';

for (var i = 0; i < anArray.length; i++) {
  console.log( anArray[i] );
}

for (var i = 0; i < aString.length; i++) {
  console.log( aString[i] );
}

//Ahora
let anArray = ['Hola', 1, true, {}],
  aString = 'Hola soy iterable';

for ( let item of anArray ) {
  console.log( item ); //Imprime cada elemento del arreglo
}

for ( let character of aString ) {
  console.log( character ); //Imprime cada caracter de la cadena de texto
}
?? Regresar

S�mbolos
Un�S�mbolo�es un tipo de datos �nico e inmutable, puede ser utilizado como un identificador para las propiedades de los objetos.
Son �tiles cuando queremos agregar m�todos o atributos propios a objetos nativos del lenguaje o a los de alguna librer�a de terceros para evitar que, si existi�se alg�n m�todo o atributo con el nombre del que queremos crear evitar que el original se sobre escriba con esto se evita un�antipatr�n.
Cuando se recorran las propiedades de un objeto, las que sean definidas como s�mbolo no aparecer�n.
Recorriendo los elementos de un Objeto:
let anObject = {
    name: 'Jonathan',
    age: 36,
    email: 'jonmircha@gmail.com'
  },
  //Un s�mbolo se instancia sin new, porque no es un objeto y por tal no tiene constructor
  email = Symbol('email');

//Asignaci�n de un s�mbolo en un objeto
anObject[email] = 'hola@jonmircha.com';

for( let item of anObject ) {
  console.log(item); //Uncaught TypeError: anObject[Symbol.iterator] is not a function
}

for( let item in anObject ) {
  console.log(item); //Imprime name, age, email
}

console.log( Object.keys(anObject) ); // Imprime ["name", "age", "email"]
console.log( Object.getOwnPropertyNames(anObject) ); // Imprime ["name", "age", "email"]
console.log( Object.getOwnPropertySymbols(anObject) ); // Imprime [Symbol(email)]

console.log(
  anObject, //Imprime Object {name: "Jonathan", age: 36, email: "jonmircha@gmail.com", Symbol(email): "hola@jonmircha.com"}
  anObject.name, //Imprime "Jonathan"
  anObject.age, //Imprime 36
  anObject.email, //Imprime "jonmircha@gmail.com"
  anObject[email] //Imprime "hola@jonmircha.com"
);
Convirti�ndo un Objeto en Iterable:
let iterable = {
  0: 'Jonathan',
  1: 36,
  2: 'jonmircha@gmail.com',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let item of iterable) {
  console.log(item); //Imprime Jonathan, 36, jonmircha@gmail.com
}
?? Regresar

Generadores
Los generadores son un tipo especial de funci�n que devuelve un valor y permite luego volver a entrar en la funci�n en el mismo lugar en que se qued�, al tiempo que conserva el contexto de ejecuci�n.
Son funciones que pueden ser pausadas y resumidas cuando llamamos a la funci�n generador, no ejecuta el cuerpo de la funci�n, sino que devuelve un objeto generador. El generador implementa una interfaz que le proporciona un m�todo�next(), que ejecutar� el cuerpo de la funci�n hasta encontrar un�yield. En este punto, se detendr�.
El secreto del generador radica justamente en la palabra clave�yield, que es un tipo especial de�return�que, en lugar de devolver un solo valor y salirse de la funci�n, entrar� nuevamente en esta y continuar� ejecut�ndola hasta que se acabe o encuentre otra cl�usula�yield.
Para que una funci�n se considere generador debe declararse anteponiento un aster�sco�function*.
Para obtener los resultados del generador lo hacemos con el m�todo�next()�que devuelve un objeto de tipo:
{
  value: el valor retornado por yield
  done: indica si ha finalizado o no la ejecuci�n del cuerpo de la funci�n
}
Los generadores, al implementar�.next(), son iterables y suelen ser una forma m�s sencilla de describir un iterador.
function* generador(nombre) {
    yield `Hola ${name}`;
    yield 'Esta l�nea saldr� en la segunda ejecuci�n';
    yield 'Esta otra, en la tercera';
    if ( nombre === 'Jonathan' ) {
      yield 'Esta otra, saldr� en la cuarta solo si te llamas Jonathan';
    }
}

let gen = generador('Jonathan');
console.log( gen.next() ); //Imprime Object {value: "Hola Jonathan", done: false}
console.log( gen.next().value ); //Imprime Esta l�nea saldr� la segunda ejecuci�n
console.log( gen.next().value ); //Imprime Esta otra, en la tercera
console.log( gen.next().value ); //Imprime Esta otra, saldr� en la cuarta solo si te llamas Jonathan
console.log( gen.next() ); //Imprime Object {value: undefined, done: true}
M�s ejemplos con Generadores:
class LoremIpsum {
  constructor( text ) {
    this._text = text;
  }

  *words() {
    const re = /\S+/g;
    let match;

    while( match = re.exec( this._text ) ){
      yield match[0];
    }
  }
}

const lorem = new LoremIpsum('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatem eveniet ipsum in similique maxime sunt eaque veritatis sapiente. Fuga minus, non cumque deleniti consequatur. Odit reprehenderit non fugit cum!');

for ( let word of lorem.words() ) {
  console.log( word );
}

class Usuarios {
  constructor( gente ) {
    this._gente = gente;
  }

  *alias() {
    for ( let persona of this._gente ) {
      yield ( persona.sexo === 'H' ) ? `Sr. ${persona.nombre}` : `Sra. ${persona.nombre}`;
    }
  }
}

const gente = new Usuarios([
  { sexo: 'H', nombre: 'Jon' },
  { sexo: 'M', nombre: 'Irma' }
]);

for ( let persona of gente.alias() ){
  console.log( persona );
}
?? Regresar

Proxies
Los�proxies�proporcionan una�API�para capturar o interceptar cualquier operaci�n realizada sobre un objeto y para modificar c�mo se comporta ese objeto. Son �tiles para:
* Intercepci�n.
* Virtualizaci�n de objetos.
* Gesti�n de recursos.
* Hacer�profiling�y generar logs durante la depuraci�n de una aplicaci�n.
* Seguridad y control de acceso.
* Definici�n de "contratos" al usar objetos.
* M�s informaci�n.
La�API Proxy�define un constructor al que se le pasa como primer argumento el objeto que se va a capturar llamado�target�y como segundo argumento el�handler�que realizar� la captura. Ejemplo:
let target = { /* propiedades y m�todos */ },
  handler = { /* funciones capturadoras */ },
  proxy = new Proxy(target, handler);
El�handler�es el encargado de modificar el comportamiento original del objeto�target. Este�handler�contiene m�todos "capturadores" ( por ejemplo�.get(),�.set(),�.apply()�) que se ejecutan al realizar la llamada correspondiente del�proxy.
const persona = new Proxy({}, {
  set( obj, prop, val ) {
    if ( prop === 'edad' && ( !Number.isInteger( val ) || val < 0 ) ) {
      throw new Error( `Valor inv�lido para la propiedad ${prop}` );
    }
    return obj[prop] = val;
  }
});

persona.edad = 33;
console.log( persona.edad ); //Imprime 33

persona.edad = -10; //Imprime Error: Valor inv�lido para la propiedad edad
?? Regresar

Reflexi�n
Objeto global que proporciona funciones est�ticas capaces de intereceptar operaciones de�JavaScript, es muy �til cuando se trabaja con�proxies�y de hecho, comparten muchos m�todos.
La mayor�a de sus m�todos est�ticos tienen una equivalencia en el objeto�Object�o�Function.
Las ventajas que ofrece el uso de�Reflect�son:
* Aplicaci�n de funciones m�s fiable.
* Valores de retorno m�s �tiles.
* Sintaxis menos verbosa.
* Mejora la forma en la que se capturan los getters y setters.
* M�s informaci�n.
ES5�ya incluye varias funcionalidades �ntimamente relacionadas con la reflexi�n, como por ejemplo�Array.isArray()�o�Object.getOwnPropertyDescriptor().
ES6�introduce la�API Reflection�para agrupar todos estos m�todos y los nuevos que se vayan definiendo.
const obj = { x: 1, y: 2 };
console.log( obj ); //Imprime Object {x: 1, y: 2}

console.log( Reflect.has( obj, 'z' ) ); //Imprime false
console.log( Reflect.has( obj, 'x' ) ); //Imprime true

Reflect.deleteProperty( obj, 'x' );

console.log( Reflect.has( obj, 'x' ) ); //Imprime false
console.log( obj ); //Imprime Object {y: 2}
?? Regresar

Decoradores
Permiten anotar y modificar las clases y propiedades en tiempo de dise�o. Mientras que en�ES5�los objetos literales admiten expresiones arbitrarias en la posici�n del valor, las clases de�ES6�s�lo admiten funciones como valores literales, un decorador restaura la capacidad de ejecutar c�digo en tiempo de dise�o, mientras se mantiene una sintaxis declarativa.
Un decorador:
* Es una expresi�n.
* Eval�a una funci�n.
* Toma el�target,�name�y el�descriptor�del decorador como argumentos.
* Opcionalmente retorna un�descriptor�del decorador para instalar en el objeto�target.
* M�s Informaci�n.
Par�metros de un decorador:
* target:�El objeto al que queremos modificar su definici�n de propiedades.
* name:�El nombre de la propiedad a modificar.
* descriptor:�La descripci�n de la propiedad del objeto, que a su vez es:
o configurable:�indica si puede ser modificada.
o enumerable:�se puede usar con un�for...of.
o value:�valor asociado a la propiedad.
o writable:�indica si la propiedad puede ser cambiada con una asignaci�n.
o get:�indica si la propiedad es un�getter.
o set:�indica si la propiedad es un�setter.
const soloLectura = (target, name, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};

class Persona {
  constructor( {nombre, apellido} ) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  @soloLectura
  nombrar() {
    return `${this.nombre} ${this.apellido}`;
  }
}

const alguien = new Persona({
  nombre: 'Jonathan',
  apellido: 'MirCha'
});

console.log( alguien.nombrar() ); //Imprime Jonathan MirCha

alguien.nombrar = () => {
  return `${this.nombre}`;
} //Ejecutar� Cannot assign to read only property 'nombrar' of object '#<Persona>'
?? Regresar

Funciones As�ncronas
Son una nueva caracter�stica soportada en�ES, que nos permitir� realizar las mismas cosa que se pueden lograr con Generadores y Promesas pero con menos esfuerzo.
M�s Informaci�n:
* Documentaci�n MDN.
* Async Functions.
function createUser(name) {
  alert(`Usuario ${name} creado`);
}

function getFriends(name) {
  alert( `Obteniendo amigos de ${name}` );
  return 150;
}

async function setNewUser(name) {
  let newUser = await createUser(name),
    friends = await getFriends(name);

  if (friends !== 0) {
    alert( `${name} tienes ${friends} amigos` );
  } else {
    alert( `${name} eres un antisocial sin amigos` );
  }
}

setNewUser('Jonathan');
En�Node.js:
const fs = require('fs'),
  file = './nombres.txt',
  newFile = './nombres_async_es6.txt';


function accessFile(file) {
  fs.access(file, fs.F_OK, (err) => {
    return (err)
      ? new Error('El archivo no existe')
      : console.log('El archivo existe');
  });
}

function readFile(file) {
  fs.readFile(file, (err, data) => {
    return (err)
      ? new Error('El archivo no se pudo leer')
      : data;
  });
}

function writeFile(newFile, data) {
  fs.writeFile(newFile, data, (err) => {
    return (err)
      ? new Error('El archivo no se pudo copiar')
      : console.log('El archivo se ha copiado con �xito');
  });
}

async function copyFile() {
  let af1 = await accessFile(file),
    af2 = await readFile(file),
    af3 = await writeFile(newFile, af2);
}

copyFile();
?? Regresar

M�todos clase�String
Nuevos m�todos para Cadenas de Texto.
* .startsWith()
* .endsWith()
* .includes()
* .repeat()
* .normalize()
* .raw()
* .fromCodePoint()
* .codePointAt()
let nombre = 'Jonathan';

console.log( nombre.startsWith('jo') ); //Imprime false
console.log( nombre.endsWith('an') ); //Imprime true
console.log( nombre.includes('th') ); //Imprime true
console.log( nombre.repeat(3) ); //Imprime JonathanJonathanJonathan}
?? Regresar

N�meros octales y binarios
//octales
console.log(0o17); //Imprime 15

//binarios
console.log(0b100); //Imprime 4
?? Regresar

M�todos clase�Math
Nuevos m�todos de la Clase Matem�ticas, apto s�lo para �o�os ??:
* .acosh()
* .asinh()
* .atanh()
* .cbrt()
* .clz32()
* .cosh()
* .expm1()
* .fround()
* .hypot()
* .imul()
* .log10()
* .log1p()
* .log2()
* .sign()
* .sinh()
* .tanh()
* .trunc()
console.log( Math.acosh(3) ); //Imprime 1.7627471740390859
console.log( Math.asinh(2) ); //Imprime 1.4436354751788103
console.log( Math.atanh(1) ); //Imprime Infinity
console.log( Math.cbrt(4) ); //Imprime 1.5874010519681996
console.log( Math.clz32(5) ); //Imprime 29
console.log( Math.cosh(7) ); //Imprime 548.317035155212
console.log( Math.expm1(8) ); //Imprime 2979.9579870417283
console.log( Math.fround(9.56789) ); //Imprime 9.567890167236328
console.log( Math.hypot(11,23) ); //Imprime 25.495097567963924
console.log( Math.imul(13, 3) ); //Imprime 39
console.log( Math.log10(54) ); //Imprime 1.7323937598229686
console.log( Math.log1p(34) ); //Imprime 3.5553480614894135
console.log( Math.log2(100) ); //Imprime 6.643856189774724
console.log( Math.sign(46) ); //Imprime 1
console.log( Math.sinh(22) ); //Imprime 1792456423.065796
console.log( Math.tanh(19) ); //Imprime 0.9999999999999999
console.log( Math.trunc(40.56) ); //Imprime 40
?? Regresar

M�todos clase�Array
Nuevos m�todos para Arreglos.
* .from()
* .of()
* .copyWithin()
* .find()
* .findIndex()
* .fill()
* .includes()
let nombre = 'Jonathan';

console.log( Array.from(nombre) ); //Imprime Array [ "J", "o", "n", "a", "t", "h", "a", "n" ]

console.log( Array.of(7) ); //Imprime [7]
console.log( Array.of(1, 2, 3) ); //Imprime [1, 2, 3]

console.log( Array(7) ); //Imprime [ , , , , , , ]
console.log( Array(1, 2, 3) ); //Imprime [1, 2, 3]

console.log( ['a', 'b', 'c', 'd', 'e'] ); //Imprime ["a", "b", "c", "d", "e"]
console.log( ['a', 'b', 'c', 'd', 'e'].copyWithin(3, 0) ); //Imprime ["a", "b", "c", "a", "b"]

console.log( [20, 40, 100, 60, 80] ); //Imprime [20, 40, 100, 60, 80]
console.log( [20, 40, 100, 60, 80].find( n => n > 50 ) ); //Imprime 100
console.log( [20, 40, 100, 60, 80].findIndex( n => n > 50 ) ); //Imprime 2

console.log( [1, 2, 3].fill(4) ); //Imprime [4, 4, 4]
console.log( [1, 2, 3].fill(4, 1) ); //Imprime [1, 4, 4]
console.log( [1, 2, 3].fill(4, 0, 1) ); //Imprime [4, 2, 3]

console.log( [1, 2, 3].includes(2) ); //Imprime true
console.log( [1, 2, 3].includes(4) ); //Imprime false
?? Regresar

M�todos clase�Object
Nuevos m�todos para Objetos.
* .assign()
* .values()
* .entries()
const a = { a: 1 },
  b = { b: 2 },
  c = {};

Object.assign(c, a, b);

console.log( a ); //Imprime {a: 1}
console.log( b ); //Imprime {b: 2}
console.log( c ); //Imprime {a: 1, b: 2}

console.log( Object.values(c) ); //Imprime [1, 2]
console.log( Object.entries(c) ); //Imprime [ ["a", 1], ["b", 2] ]
?? Regresar

Maps�Sets�y�Weaks
ES�incorpora 4 nuevas estructuras de datos, que son�Map,�WeakMap,�Set�y�WeakSet. Si has trabajado con lenguajes como�Java�o�Python�ya te har�s una idea de para que sirven.
M�s informaci�n:
* Map
* WeakMap
* Set
* WeakSet
Map
El objecto�Map�nos permite relacionar (mapear) unos valores con otros como si fuera un diccionario, en formato clave/valor. Cualquier valor (tanto objetos como valores primitivos) puede ser usados como clave o valor.
Los Maps nos permiten saber de inmediato si existe una clave o borrar un par clave/valor concreto. Adem�s, podemos crear�Maps�a partir de un array de pares:
let map = new Map();
map.set('clave', 123);

let user = { userId: 1 };
map.set(user, 'Jonathan');

console.log( map ); //Imprime Map {"clave" => 123, Object {userId: 1} => "Jonathan"}
console.log( map.get('clave') ); //Imprime 123
console.log( map.get(user) ); //Imprime Jonathan

console.log( map.size ); //Imprime 2

console.log( map.has('clave') ); // Imprime true
console.log( map.delete('clave') ); //Imprime true
console.log( map.has('clave') ); //Imprime false

map.clear();
console.log( map.size ); //Imprime 0

map = new Map( [ ['user1', 'Jonathan'], ['user2', 'Irma'], ['user3', 'kEnAi'] ] );
console.log( map.size ); //Imprime 3

for( let [key, value] of map ){
  console.log( key, value );
}

//Imprime user1 Jonathan
//Imprime user2 Irma
//Imprime user3 kEnAi

console.log( map.keys() ); //Imprime MapIterator {"user1", "user2", "user3"}
console.log( map.values() ); //Imprime MapIterator {"Jonathan", "Irma", "kEnAi"}
console.log( map.entries() ); //Imprime MapIterator {["user1", "Jonathan"], ["user2", "Irma"], ["user3", "kEnAi"]}
WeakMap
Los�WeakMaps�son similares a los�Maps, pero con algunas diferencias:
Un�WeakMap�solo acepta objetos como claves, la referencia a las claves es d�bil, lo que significa que si no hay otras referencias al objeto que act�a como clave, el recolector de basura podr� liberarlo.
Debido a que usa referencias d�biles, un�WeakMap�NO dispone del m�todo�.keys()�para recuperar las claves, NI de propiedades o m�todos relacionados con m�s de un elemento a la vez, como�.values(),�.entries(),�.clear()�o�.size.
Tampoco podemos iterar un�WeakMap�con el bucle�for of.
let clave = { userId: 1 },
  clave2 = { userId: 2 },
  weakmap = new WeakMap();

weakmap.set( clave, 'Jonathan' );
console.log( weakmap ); //Imprime WeakMap {Object {userId: 1} => "Jonathan"}

console.log( weakmap.has(clave) ); //Imprime true
console.log( weakmap.get(clave) ); //Imprime Jonathan
console.log( weakmap.size ); //Imprime undefined

weakmap.delete(clave);
console.log( weakmap.get(clave) ); //Imprime undefined
console.log( weakmap ); //Imprime WeakMap {}

weakmap.set( clave2, 'Irma' );
console.log( weakmap.get(clave2) ); //Imprime Irma
console.log( weakmap ); //Imprime WeakMap {Object {userId: 2} => "Irma"}
Set
Los�Sets�son conjuntos de elementos no repetidos, que pueden ser tanto objetos, como valores primitivos.
Tiene m�todos equivalentes a un�Map, con la diferencia que utilizamos�.add()�para a�adir elementos, y que las�keys�y los�values�son lo mismo, el valor del objeto.
Del mismo modo,�.entries()�devuelve una pareja�[value, value].
let set = new Set();

set.add('Jonathan');
set.add('Irma');
set.add('Irma');

console.log( set.size ); //Imprime 2

for ( let item of set ) {
  console.log(item);
}

//Imprime Jonathan
//Imprime Irma

for ( let item of set.entries() ){
  console.log(item);
}

//Imprime ["Jonathan", "Jonathan"]
//Imprime ["Irma", "Irma"]

console.log( set.has('Jonathan') ); //Imprime true

set.delete('Jonathan');
console.log( set.has('Jonathan') ); //Imprime false

console.log( set.size ); //Imprime 1

set.clear();

console.log( set.size ); //Imprime 0
WeakSet
Similar al�WeakMap, pero con los Sets. Las dos principales diferencias de un�WeakSet�respecto a un�Set�son:
1. �nicamente pueden contener colecciones de objetos.
2. La referencia a los objetos es d�bil, por lo que si no hay otra referencia a uno de los objetos contenidos en el�WeakSet, el recolector de basura lo podr� liberar. Esto implica que:
o No hay una lista de objetos almacenados en la colecci�n.
o Los WeakSet no son enumerables.
B�sicamente, los m�todos de los que dispone un�WeakSet�son:
* .add()
* .delete()
* .has()
let objs = [ 'Jonathan', 'Irma', 'kEnAi' ],
  weakset = new WeakSet();

console.log( weakset ); //Imprime WeakSet {}

weakset.add(objs);
console.log( weakset ); //Imprime WeakSet {["Jonathan", "Irma", "kEnAi"]}
console.log( weakset.has(objs) ); //Imprime true

weakset.delete(objs);
console.log( weakset.has(objs) ); //Imprime false
?? Regresar
      
    Teoria de JAVASCRIPT
    2022
            
      
    Aprenda Javascript
      1
            
      
