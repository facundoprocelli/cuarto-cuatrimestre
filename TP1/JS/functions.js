
//1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola. 

let nombre = "facu";
const nombre2 = "Santi";

console.log(nombre, nombre2);

//2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado. 

let num1 = 10, num2 = 11;
let resultado  = num1 + num2;

console.log(resultado);

//3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola. 

const PI = 3.14159;
console.log(PI);

//-----Funciones - function


//. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo presonalizado

function saludar(nombre) {
    let saludo = `Hola ${nombre}, como estás?`;
    console.log(saludo);
}

saludar(nombre);

// Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y `false` si es impar. 

function esPar(numero) {
    if(numero % 2 == 0){
        return true;
    } else {
        return false;
    }
}

let rta = esPar(13);
console.log(rta);

//6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la suma de sus elementos.

function sumarArray(arreglo){
    let rta = 0;
    arreglo.forEach(element => { rta = rta + element; });

console.log(rta);
}
let arreglo = [1,2,3,4,5];
sumarArray(arreglo);

//Objetos literales y constructores 

//7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`. 

const persona  = {
    nombre : "Facundo",
    edad : 20,
    profesion : "PRogramador"
}

console.log(persona);

//8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un objeto con esas propiedades. 

function Producto (nombre, precio, stock) {

    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.mostrarProducto = function (){
         console.log(`Producto: ${nombre} \nPrecio: ${precio} \nStock: ${stock}`)
        }

}

const silla = new Producto("alemana", 100, 23);
silla.mostrarProducto();


//9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`, `director` y `anio`


function pelicula (titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
    this.mostrarPelicula = function () {
        console.log(`Titulo: ${titulo} \nDirector: ${director} \n Anio de estreno: ${anio}`);
    }
}

const JakSparrow = new pelicula("De un disparow", "Yo,quien más?", 2023);
JakSparrow.mostrarPelicula();

//Arrays 

//10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.

const frutas = ["Manzana", "Pera", "Banana", "Arandano"];
console.log(frutas[2]);

//11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado. 

frutas.push("Kiwi");
frutas.forEach(fruta => {
    console.log(fruta);
});


//12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne un
// nuevo array solo con los números pares. 


function filtrarPares(arreglo) {

    let nuevo = [];
    arreglo.forEach(num => {
        if(num % 2 == 0) {
            nuevo.push(num);
        }
    });
    return nuevo;
    
}
let arr = [1,2,3,4,5,6,7];
console.log(filtrarPares(arr));

//13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un 
//objeto persona con esas propiedades. 


function crearPersona(nombre, edad) {

   return {
    nombre : nombre,
    edad : edad
   }
}

let persona1 = crearPersona("Facu", 20);
console.log(persona1);


//------------Funciones y Objetos combinados ---------

//14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información. 

function obtenerInfo(persona) {
    console.log(`Nombre: ${persona.nombre} \n Edad: ${persona.edad}`);
}
obtenerInfo(persona1);

//15. Crear una función `duplicarArray` que tome un array de números como parámetro y 
//retorne un nuevo array con cada elemento duplicado. 

function duplicarArray(arregloDeNumeros) {

    let arr = [];

    arregloDeNumeros.forEach(num => {
        arr.push(num);
        arr.push(num);
    });

    return arr;

}

function mostrarArreglo(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}
let array = [1,2,3,7,8,9]; 

console.log(duplicarArray(array));

//16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la 
//cadena invertida.
function invertirCadena(cadena) {

    return cadena.split('').reverse().join(''); 
    cadena
    // .split convierte la cadena en un arreglo de caracteres
    // .reverse da vuelta el arreglo de caracteres
    // .join une el arreglo y lo convierte en cadena
}

let cadena16 = "AbC123";
console.log(invertirCadena(cadena16));



//17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como 
//parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al 
//número. 


function filtrarPorLongitud(arregloDePalabras, longitudMinima) {

    let arr = [];

    arregloDePalabras.forEach(palabra => {
        
        if(palabra.length > longitudMinima) {
            arr.push(palabra);
        }

    });

    return arr;
}

let arreglo17 = ["Hola", "Chau", "no", "si", "Pomodoro"];

let arr17 = filtrarPorLongitud(arreglo17, 5);
console.log(arr17);


//18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como 
//`nombre`, `edad` y `promedio`. 


function estudiante(nombre, edad, promedio) {

    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;

    this.mostrarInfo = function () {
        console.log(`Alumno: ${nombre} \n  Edad: ${edad} \n Promedio:  ${promedio}`);
    }

}

const e1 = new estudiante("Facu", 20, 8.7);
const e3 = new estudiante("Santi", 19, 7.7);
const e2 = new estudiante("Lauti", 19, 9.7);

let arrEstudiantes = [e1,e2,e3];

console.log(arrEstudiantes);

//19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y 
//retorne el objeto del estudiante con ese nombre. 

function buscarEstudiante(arrEstudiante, nombreEstudiante) {

  let es = arrEstudiante.find(e => e.nombre == nombreEstudiante );
    
  // .find Se utiliza para buscar un elemento que cumpla un requerimiento dentro de un arreglo.
  return es;
}

let e19 = buscarEstudiante(arrEstudiantes, "Facu");
e19.mostrarInfo();




/*

Más sobre Arrays y Funciones 
Objetos y Arrays de Objetos 
20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio 
de sus promedios. 
Uso avanzado de Objetos y Funciones 
21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como 
`arrancar` y `detener`. 
22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar` 
que imprima un saludo personalizado. 
23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un 
producto al carrito. 
Manipulación de Arrays y Objetos 
24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y 
retorne un nuevo array con los números ordenados de menor a mayor. 
25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y 
retorne un nuevo array sin el estudiante con ese nombre. 
26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de 
los productos. 
Lic. Gabriel Chaldu 
Programación IV 
Uso avanzado de Funciones y Objetos 
27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`, 
`multiplicar` y `dividir`. 
28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`, 
`retirar` y `saldo`. 
29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método 
`detalles` que imprima la información del libro. 
Proyecto Final: Manejo de Datos 
30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays. 
Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes.
*/