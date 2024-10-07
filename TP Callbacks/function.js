/*1. Multiplicar números con un callback:
o Crea una función multiplicar que acepte dos números y un callback.
o Usa el callback para mostrar el resultado de multiplicar los dos números.
*/

//Creo la función multiplicar que recibe un callback
function multiplicar(num1, num2, callback) {
  const resultado = num1 * num2;
  //Uso el callback
  callback(resultado);
}

// llamo a la función mulitplicar y como parametro le mando una función que muestra el resutlado
multiplicar(2, 4, (resultado) => {
  console.log(`El resutlado de la multipliacación es ${resultado}`);
});

/*¨
2. Operación con números usando callbacks:
o Define una función operarNumeros que acepte dos números y un callback.
o Crea dos callbacks, uno para sumar y otro para restar los números.
*/

function operarNumeros(num1, num2, callback2) {
  const resutlado = callback2(num1, num2);
  console.log(`El resultado es ${resutlado}`);
}

//sumar
operarNumeros(2, 5, (num1, num2) => num1 + num2);
//restar
operarNumeros(5, 7, (num1, num2) => num1 - num2);

/*
3. Uso de setTimeout con callbacks:
o Usa setTimeout para imprimir "Esto es un callback" después de 2 segundos.
*/

function pruebaSetTimeOur(callback) {
  //Lo que hace el setTimeout es esperar la cantidad de milisegundos que le dice, y luego ejecutar el callback
  setTimeout(callback, 2000);
}

pruebaSetTimeOur((resultado) => {
  console.log("Esto es un callback");
});

/*
4. Filtrar números pares con un callback:
o Define una función filtrarPares que acepte un array de números y un callback.
o Usa el callback para filtrar solo los números pares. */

function filtrarArreglo(arregloNumeros, filtro) {
  //Filtro el arreglo de numeros con el método filter para agarrar todos los elementos que cumplan con los requisitos del filtro
  const pares = arregloNumeros.filter(filtro);
  return pares;
}

//Creo el arreglo
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];

//Creo los diferentes filtros
const esPar = (num) => num % 2 === 0;
const esImpar = (num) => num % 2 !== 0;
const esMenor5 = (num) => num < 5;
//Hago los llamados a la función con los filtros callback
const pares = filtrarArreglo(arreglo, esPar);
const imapres = filtrarArreglo(arreglo, esImpar);
const menores5 = filtrarArreglo(arreglo, esMenor5);
//muestro los resutlados
console.log(pares);
console.log(imapres);
console.log(menores5);

console.clear();

/*


Ejercicios sobre Set
6. Crear y manipular un Set:
o Crea un Set con los números 1, 2, 3, 4, y 5.
o Añade el número 6 y elimina el número 3.
*/

const numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);

numeros.add(6);
numeros.delete(3);
console.log(numeros);

/*


7. Convertir un Set a un Array:
o Convierte el Set del ejercicio anterior en un array.
*/

function setToArray(set) {
  const arr = [];
  //Para recorrer un set se utiliza un forEach
  set.forEach((num) => arr.push(num));
  return arr;
}

let arreglo7 = setToArray(numeros);
console.log(arreglo7);

/*
8. Eliminar duplicados de un array usando Set:
o Dado un array [1, 2, 2, 3, 4, 4, 5], elimina los duplicados utilizando un Set.
*/

const arreglo8 = [1, 2, 2, 3, 4, 4, 5];
const sinRepetidos = new Set();
//Al pasar el arreglo a un set, los duplicados se eliminan automaitcamente, porque el set no permite duplicados
arreglo8.forEach((num) => sinRepetidos.add(num));
console.log(sinRepetidos);

/*
9. Comprobar existencia en un Set:
o Comprueba si el número 4 existe en el Set creado anteriormente y muestra el
resultado.
*/

const esta = numeros.has(4);
console.log(esta);

/*
10. Iterar sobre un Set:
o Itera sobre el Set creado en el ejercicio 6 e imprime cada número.
*/

function mostrarSet(set) {
  set.forEach((num) => console.log(num));
}
mostrarSet(numeros);

console.clear();
/*
Lic. Gabriel Chaldú
2
Ejercicios sobre Map
11. Crear y manipular un Map:
o Crea un Map con tres entradas: "nombre" -> "Juan", "edad" -> 30, "ciudad" ->
"Madrid".
o Añade una nueva entrada para "país" -> "España" y elimina la entrada
"ciudad".
*/

const persona = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
  ["ciudad", "Madrid"],
]);

persona.set("pais", "España");
console.log(persona);

/*
12. Acceder a valores en un Map:
o Accede al valor de "nombre" en el Map creado y muéstralo.
*/

const nombre = persona.get("nombre");
console.log(nombre);

/*
13. Iterar sobre un Map:
o Itera sobre las entradas del Map e imprime cada par clave-valor.
*/

//La función forEach esta diseñada para agarar primero el valor y luego la clave.
//Es por eso que aca muestra solo los valores
persona.forEach((v) => console.log(v));

//Luego cuando agarro los datos, se puede ver que primero agarro el v y luego la k, porque así estsá diseñado
persona.forEach((v, k) => console.log(`${k} ===> ${v}`));

/*
14. Comprobar existencia en un Map:
o Comprueba si el Map tiene la clave "edad" y muestra el resultado.
*/

const tieneEdad = comprobarKey(persona, "edad");
console.log(tieneEdad);

function comprobarKey(map, key) {
  if (map.get(key) != undefined) {
    return true;
  } else return false;
}

/*
15. Convertir un Map a un Array:
o Convierte el Map creado en el ejercicio 11 a un array de arrays.
*/

const arregloDeArreglo = [];
persona.forEach((v, k) => arregloDeArreglo.push([k,v]));
console.log(arregloDeArreglo);


console.clear();
/*
Ejercicios sobre Arrays y Métodos de Array
16. Filtrar números mayores que 10:
o Dado un array [5, 10, 15, 20, 25], usa filter para obtener los números mayores
que 10.
*/


let arreglo16 = [5,10,15,20, 25];

function  filtrarMayores(arreglo, callback) {
  let arr = arreglo.filter(callback);
  return arr;
}

const filtroMayores = (n) => n >10;
 arreglo16 = filtrarMayores(arreglo16, filtroMayores);
console.log(arreglo16);

/*
17. Doblar los números en un array:
o Usa map para crear un nuevo array donde cada número en el array [1, 2, 3, 4,
5] se ha doblado.
*/

const arreglo17 = [1,2,3,4,5];
const multiplicador = (n) => n *2;
console.log( arreglo17.map(multiplicador));

/*
18. Convertir un array de nombres a mayúsculas:
o Dado un array ["juan", "maria", "pedro"], usa map para convertir cada nombre
a mayúsculas.
*/
const arreglo18 = ["juan", "maria", "pedro"];
const mayusculizador = (n) =>  n.toUpperCase();
const nombreMayuscula = arreglo18.map(mayusculizador); // Cuando usamos upper o lower case, tenemos que asignarlo  a una nueva variable 
console.log(nombreMayuscula);


/*
19. Filtrar palabras cortas:
o Dado un array ["árbol", "casa", "elefante", "sol"], usa filter para obtener las
palabras con menos de 5 letras.
*/


const arreglo19 = ["árbol", "casa", "elefante", "sol"];
const palabrascortizador = (palabra) => palabra.length < 5; // length es una propiedad no una función por lo tanto no lleva parentesis.
const palabrasCortas = arreglo19.filter(palabrascortizador);
console.log(palabrasCortas);


/*
20. Sumar números pares en un array:
o Dado un array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa filter para obtener los números
pares y luego utiliza reduce para sumarlos.
*/

//Arreglo
const arreglo20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Callbacks
const obtenerPares = (n) => n % 2 === 0;

const sumador = ((acumulador, valorActual) =>{
  return  acumulador  = acumulador + valorActual;
});

//Resultados
const arregloNumPares = arreglo20.filter(obtenerPares);
console.log(arregloNumPares);

const resutaldo = arregloNumPares.reduce(sumador);
console.log(resutaldo);

console.clear();
/*
Lic. Gabriel Chaldú
3
Ejercicios avanzados
1. Transformar objetos usando map:
o Dado un array de objetos [{ nombre: "Juan", edad: 20 }, { nombre: "María",
edad: 25 }, { nombre: "Pedro", edad: 30 }], usa map para crear un nuevo array
de strings que contenga solo los nombres.
*/

const arregloPersonas = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 30 }];

  const agarraNombres = (actual) => actual.nombre;

  const arregloNombres = arregloPersonas.map(agarraNombres);
  console.log(arregloNombres);


/*
2. Filtrar objetos en un array:
o Dado un array de objetos [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana",
edad: 23 }, { nombre: "Luis", edad: 16 }], usa filter para obtener solo los objetos
donde la persona sea mayor de edad (edad >= 18).
*/

const arregloPersonas2 =[
  { nombre: "Carlos", edad: 17 },
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 16 }];

  const filtrarPersonasMayores = (actual) => actual.edad >= 18;

  const arregloDeMayores = arregloPersonas2.filter(filtrarPersonasMayores);
  console.log(arregloDeMayores);

/*
3. Contar elementos únicos en un array usando Map:
o Dado un array de números [2, 3, 4, 2, 3, 5, 4, 5, 6], utiliza un Map para contar
cuántas veces aparece cada número en el array. El resultado debe ser un Map
donde las claves sean los números del array y los valores sean la cantidad de
veces que cada número aparece.
*/

const arregloDeNumeros = [2, 3, 4, 2, 3, 5, 4, 5, 6];

const contarNumeros = (veces, numero) => {
}





/*

4. Encadenamiento de métodos de array:
o Dado un array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa una combinación de
filter, map, y reduce para obtener la suma de los cuadrados de los números
pares.
*/

//Arreglo
const arregloDeNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Callbacks
const conseguirPares = (n) => n % 2 === 0;

const conseguirCuadrado = (n) => Math.pow(n,2);

const sumarTodo = (acumulador, valorActual) => {
   return  acumulador = acumulador + valorActual;
}

//Resultados
const numerosPares = arregloDeNumeros2.filter(obtenerPares);
console.log(numerosPares);
const numerosCuadrados = numerosPares.map(conseguirCuadrado);
console.log(numerosCuadrados);
const resultadoFinal = numerosCuadrados.reduce(sumarTodo);
console.log(resultadoFinal);


/*
5. Transformar un objeto en un Map:
o Dado un objeto { a: 1, b: 2, c: 3 }, transforma el objeto en un Map donde las
claves son las propiedades del objeto y los valores son los valores
correspondientes.
*/

const objeto = { a: 1, b: 2, c: 3 };
const miMapa = new Map(Object.entries(objeto));   // Si quiero pasar un objeto a mapa, tengo que usar Objetc.entries(), que convierte el objeto en entradas de mapa 
console.log(miMapa);


/*
6. Crear un objeto a partir de un Map:
o Dado un Map que contiene [["nombre", "Pedro"], ["edad", 30], ["ciudad",
"Sevilla"]], convierte este Map en un objeto.
*/

const miMapaDePedro = [
  ["nombre", "Pedro"],
  ["edad", 30],
  ["ciudad", "Sevilla"]];

  const arregloDePedro = Object.fromEntries(miMapaDePedro); // Para pasar de un mapa a un arreglo uso el metodo Object.fromEntries, que convierte un mapa en un arreglo
  console.log(arregloDePedro);



/*
7. Combinar arrays de objetos usando filter y map:
o Dado dos arrays de objetos: estudiantes con propiedades id y nombre, y notas
con propiedades idAlumno y nota, usa filter y map para combinar ambos
arrays en uno nuevo que contenga el nombre del alumno y su nota
correspondiente.
*/

//Arreglos
const estudiantes = [
  {id: 1, nombre: "Facu"}, 
  {id: 2, nombre: "Nico"}, 
  {id: 3, nombre: "Eze"}, 
  {id: 4, nombre: "Santi"}
]


const notas = [
  { idAlumno: 1, nota: 85 },
  { idAlumno: 2, nota: 90 },
  { idAlumno: 3, nota: 78 },
  { idAlumno: 4, nota: 92 }
];


// Callbacks

//Me fijo que haya estudiantes que tengan el mismo id que los id de las notas
const filtroNotas = nota => estudiantes.some(estudiantes => estudiantes.id === nota.idAlumno);



//creo un nuevo obejto estudiante el cual se compone de 
const crearObjetoFiltrado = nota => {
  //Busco la nota del estudainte que coincide con el nombre
  const estudiante =  estudiantes.find(est => est.id === nota.idAlumno);

  // creo y retorno un objeto con el nombre del estudiante y su nota en cuestión
  return {
    nombre: estudiante.nombre,
    nota: nota.nota
  }
}


//Resultados
const notasFiltradas = notas.filter(filtroNotas);
console.log(notasFiltradas);
const resultado = notasFiltradas.map(crearObjetoFiltrado);
console.log(resultado);


/*
8. Eliminar elementos duplicados y mantener el orden usando Set y filter:
o Dado un array de números [1, 2, 2, 3, 4, 4, 5, 1, 6, 7], usa Set junto con filter
para eliminar los elementos duplicados, pero manteniendo el primer elemento
encontrado en su posición original.*/

//La razon por la que se usa el filter es para tener un control expicito de todos los numeros y su orden
const arrayNumeros = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7];

const sinRepe = new Set();
const filtrarNumerosRepetidos =  (num => {
  if(!sinRepe.has(num)) {
    sinRepe.add(num);
    return true;
  }
  return false;
});

const rta = arrayNumeros.filter(filtrarNumerosRepetidos);


console.log(rta);




