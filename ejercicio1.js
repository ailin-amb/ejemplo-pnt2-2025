// 1- let y const
//a) declarar variable y reasignar valor
let edad = 36;
const nombre = 'Ailin';

console.log("Edad:", edad);
console.log("Nombre:", nombre);

edad = 37; //si se puede reasignar valor
// nombre no se puede porque es constante y dara error

console.log("Nueva edad", edad)
console.log('-----');


//b) crear un bucle que incremente una variable
for (let i = 0; i <3; i++) {
    console.log("Valor de i:", i)
}
console.log('-----');

// no se puede hacer con una constante, dara error ya que no puede cambiar su valor

//c) declarar una constante que sea un objeto y modificar una propiedad
const persona = {
    nombre:'Ailin',
    edad: 36
};

// Cambiamos las propiedades internas
persona.edad = 37;
persona.apellido = 'Ambasch';

console.log(persona);
console.log('-----');

// las propiedades internas se pueden modificar

//d)variables dentro de una funcion: var, let y const
function pruebaVariables() {
    var variableVar = 'soy var';
    let variableLet = 'soy let';
    const variableConst = 'soy const';

    if(true){
        var variableVar = 'var modiicada dentro del bloque';
        let variableLet = 'let dentro del bloque';
        const variableConst = 'const dentro del bloque';
        console.log('Dentro del bloque: ', variableVar, variableLet, variableConst);
    }

    console.log('Fuera del bloque: ', variableVar);
    // las otras dos variables dan error fuera del bloque
}
pruebaVariables();
console.log('-----');

// var tiene alcance de funcion
// let y const tienen alcance de bloque, solo dentro de las 

//2-Arrays
//a)crear un array y agregar una al principio y una al final
let frutas = ['manzana', 'banana', 'pera', 'naranja', 'kiwi']
frutas.unshift('uva'); //agrega al principio
frutas.push('sandia'); // agrega al final
console.log("Frutas: ", frutas);
console.log('-----');


//b)crear un array con el doble de cada numero
let numeros = [1 ,2, 3, 4, 5];
let dobles = [];

for (let i = 0; i < numeros.length; i++) {
    dobles.push(numeros[i] * 2);
}

console.log('Numeros originales: ', numeros);
console.log('Dobles: ', dobles);
console.log('-----');


//c) combinar arrays usando concat()
let colores1 = ['rojo', 'azul', 'verde'];
let colores2 = ['amarillo', 'violeta'];
let todosLosColores = colores1.concat(colores2);

console.log('Colores combinados: ', todosLosColores);
console.log('-----');


//d) eliminar primer y ultimo elemento sin modificar el original
let arrayOriginal = [10, 20, 30, 40, 50, 60];
// creamos una copia sin los indices q quiero eliminar, usando slice()
let nuevoArray = arrayOriginal.slice(1, -1);

console.log('Array original: ', arrayOriginal);
console.log('Array sin primero ni ultimo: ', nuevoArray);
console.log('-----');


//Objetos y como acceder a las propiedades
//a)crear un objeto libro con propiedades y mostrarlas
const libro = {
    titulo: 'Cien anios de soledad',
    autor: 'Gabriel Garcia Marquez',
    anio: 1967
};

console.log('Titulo: ', libro.titulo);
console.log('Autor: ', libro.autor);
console.log('Anio: ', libro.anio);
console.log('-----');


//b)crear un objeto persona, aniadir propiedades y modificar otra
let persona2 = {
    nombre: 'Ailin',
    edad: 36
};

//agregamos una propiedad
persona.hobby = 'leer';

//modificamos una propiedad existente
persona.edad = 37;


console.log('Persona actualizada: ', persona);
console.log('-----');


//c)crear una calculadora con metodos
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function (a, b) {
        return a * b;
    },
    dividir: function (a, b) {
        return a / b;
    }
};

console.log('Suma: ', calculadora.sumar(5, 3));
console.log('Resta: ', calculadora.restar(10, 4));
console.log('Multiplicacion: ', calculadora.multiplicar(6, 2));
console.log('Division: ', calculadora.dividir(12, 3));
console.log('-----');


//d)acceder a propiedades usando una variable
const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022
};

let propiedad = 'modelo';
console.log('Acceso usando variable: ', coche[propiedad]);
console.log('-----');

//si pongo coche.propiedad no funciona

//4- template literals
//a) crear cadena de variables (nombre, edad, profesion)
let nombre3 = 'Ailin';
let edad3 = 37;
let profesion = 'desarrollador web';

let mensaje = `Hola, soy ${nombre}, tengo ${edad} y soy ${profesion}.`;
//uso comillas invertidas con alt96, q es lo q usan los template literals (backticks)
console.log(mensaje);
console.log('-----');


//b)Funcion que devuelve una frase con calculo usando template literals
function calcularTotal(precio, cantidad) {
    let total = precio + cantidad;
    return `El total es: ${total}`;
}

console.log(calcularTotal(500, 3));
console.log('-----');


//c)mensaje de error con descripcion usando template literals
let error = 'Archivo no encontrado';
let mensajeError = `Error ${error}. Por favor, verifica la ruta o el nombre.`;

console.log(mensajeError);
console.log('-----');


//5- Arrow function
//a)convertir la funcion tradicional en una arrow function.
function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}

// version con arrow function
const saludarArrow = (nombre) => `Hola, ${nombre}!`

console.log(saludarArrow('Ailin'));
console.log('-----');

//b)arrow function qeu recibe un numero y devuelvo su cuadrado
const cuadrado = (num) => num * num;

console.log(cuadrado(4));
console.log('-----');

//c) arrow function que recibe dos numeros y devuelve el mayor
const mayor = (a, b) => (a > b? a: b);

console.log(mayor(8, 3));
console.log('-----');

//d)arrow function que recibe un array y devuelve otro con los elementos al cuadrado
//uso map() para hacerlo en una sola linea
const alCuadrado = (array) => array.map((num) => num * num);

console.log(alCuadrado([1, 2, 3, 4]));
console.log('-----');

//6-Metodos de array
//a) filtrar numeros pares usando filter()
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros2.filter((num) => num % 2 === 0);

console.log('Numeros pares: ', pares);
console.log('-----');

//b) crear array de estudiantes y usar map() para obtener solo nombres y edades
const estudiantes = [
    { nombre: 'Ailin', edad: 36, calificacion: 9},
    { nombre: 'Martin', edad: 22, calificacion: 8},
    { nombre: 'Sofia', edad: 30, calificacion: 7}
];

//usamos map() para crear un nuevo array con solo nombre y edad
const resumen = estudiantes.map((est) =>({
    nombre: est.nombre,
    edad: est.edad
}));

console.log('Resumen de estudiantes: ', resumen);
console.log('-----');

//c)usar fin() para obtener la primera persona mayor de 25 anios
const personas = [
    { nombre: 'Ailin', edad: 26},
    { nombre: 'Kaliska', edad: 22},
    {nombre: 'kaled', edad: 30},
    {nombre: 'Kerem', edad: 25}
];

const mayor25 = personas.find((p) => p,edad > 25);
console.log('Primera persona mayor de 25 anios: ', mayor25);
console.log('-----');

//d)usar reduce() para sumar todos los numeros de un array
const numerosReduce = [1, 2, 3, 4, 5];
const suma = numerosReduce.reduce((acumulador, num) => acumulador + num, 0);

console.log('Suma total: ', suma);
console.log('-----');

//7- Spread Operator
//a) funcion que recibe cantidad indefinida de argumentos y devuelve la suma
const sumarTodo = (...numeros) => numeros.reduce((acc, n) => acc + n, 0);

console.log('Suma total: ', sumarTodo(2, 5, 7, 3, 8));
console.log('-----');

//b) usar spread operator para encontrar el numero maximo
const numerosMax = [10, 25, 3, 99, 42];
const maximo = Math.max(...numerosMax);

console.log('Numero maximo: ', maximo);
console.log('-----');

//c) combinar dos objetos en uno solo usando spread
const objeto1 = {nombre: 'Ailin', edad: 26};
const objeto2 = {pais: 'Argentina', profesion: 'Desarrolladora'};

const combinado = { ...objeto1, ...objeto2};
console.log('Objeto combinado: ', combinado);
console.log('-----');

//d)aplanar un array conn subarray usando spread
const arrayConSubarrays = [1, [2, 3], [4]];
const arrayPlano = [].concat(...arrayConSubarrays);

console.log('Array plano: ', arrayPlano);
console.log('-----');

//8- Destructuring
//a) extraer propiedades de un objeto
const personaDes = {
    nombre: 'Ailin',
    edad: 26,
    profesion: 'Desarrolladora'
};

const { nombre: nom, edad: ed } = personaDes;
console.log('Nombre: ', nom);
console.log("Edad: ", ed);
console.log('-----');

//b) usar destructuring en una funcion
function mostrarInfo ({ nombre, edad}) {
    console.log(`La persona se llama ${nombre} y tiene ${edad} anios`);
}

mostrarInfo({ nombre: 'Martin', edad: 22});
console.log('-----');

//c) destructuring ocn un array
const ciudad = ['Bsas', 'Argentina', 3000000];
const [ nombreCiudad, pais, poblacion] = ciudad;

console.log(`Ciudad: ${nombreCiudad}, Pais: ${pais}, Poblacion: ${poblacion}`);
console.log('-----');


