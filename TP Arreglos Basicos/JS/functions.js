

//------------------------Objetos Literales -----------------------------------
//1. Crear un Objeto Literal 
//• Crea un objeto literal llamado “persona” con las propiedades “nombre”, 
//“edad” y “profesión”. Asigna valores a cada propiedad y muestra el objeto 
//en la consola. 


//Un objeto literal es aquel que no necesita new para ser creado.
//sino que se le asignan los valores en el momento de la delcaración.

const persona  = {
    nombre: "Facundo",
    edad : 20,
    profesion : "Programador"
}

console.log(persona);

//2. Acceder a Propiedades de un Objeto 
//• Accede y muestra en la consola la propiedad “nombre” del objeto 
//“persona” creado en el ejercicio 1. 


console.log(persona.nombre);    


//3. Actualizar una Propiedad de un Objeto 
//• Cambia la propiedad “edad” del objeto “persona” a un nuevo valor y 
//muestra el objeto actualizado en la consola.

persona.edad = 23;
console.log(persona);



//4. Eliminar una Propiedad de un Objeto 
//• Elimina la propiedad “profesión” del objeto “persona” y muestra el objeto 
//actualizado en la consola. 


// El operador delete sirve para eliminar propiedades del objeto literal 
delete persona.profesion;
console.log(persona);



//5. Agregar una Nueva Propiedad a un Objeto 
//• Agrega una propiedad “email” al objeto “persona” y asígnale un valor. 
//Muestra el objeto actualizado en la consola. 

//Hay dos formas de agregar atributos al objeto literal 
//Utilizando el operador .
persona.email = "facundoporcelli@gmail.com";

//Usando la notación de corchetes
persona ["telefono"] = "2235929828";

console.log(persona);



// ----------------------------- Arreglos ------------------------------------


//6. Crear un Array de Números 
//• Crea un array llamado “numeros” que contenga los números del 1 al 5. 
//Muestra el array en la consola. 

const numeros = [1,3,5,4,2];
console.log(numeros);


//7. Acceder a un Elemento de un Array 
//• Accede y muestra en la consola el tercer elemento del array “numeros”. 


console.log(numeros[2]);


//8. Agregar un Elemento a un Array 
//• Agrega el número 6 al final del array “numeros” y muestra el array 
//actualizado en la consola. 

numeros.push(6);
console.log(numeros);


//9. Eliminar el Último Elemento de un Array 
//• Elimina el último elemento del array “numeros” y muestra el array 
//actualizado en la consola. 


//Para eliminar elemntos de un arreglo se puede usar 
    //.unshift para elimianr el primer elemento
    //.splice (2,1) para elimianr 1 desde la posicion 2
    //.splice (2) para eliminar todo desde la posicion 2

numeros.splice(numeros.length -1);
console.log(numeros);


//10. Recorrer un Array con un Bucle 
//• Usa un bucle “for” para recorrer el array “numeros” y muestra cada 
//elemento en la consola. 


for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//---------------- Arreglos de Objetos -------------------------


//11. Crear un Array de Objetos 
//• Crea un array llamado “productos” que contenga tres objetos, cada uno 
//con las propiedades “nombre” y “precio”. Muestra el array en la consola.

const productos = [
    {
        nombre : "Jabon",
        precio: 100
    },
    {
        nombre : "Coca-Cola",
        precio : 1000
    },
    {
        nombre : "Esprite",
        precio : 600
    }
]

console.log(productos);

//12. Acceder a un Valor Dentro de un Array de Objetos 
//• Accede y muestra en la consola el precio del primer producto en el array 
//“productos”. 

console.log(productos[0].precio);


//13. Actualizar una Propiedad en un Array de Objetos 
//• Cambia el precio del segundo producto en el array “productos” a un 
//nuevo valor y muestra el array actualizado en la consola. 

productos[1].precio = 700;
console.log(productos);

//14. Eliminar un Elemento de un Array 
//• Elimina el primer producto del array “productos” y muestra el array 
//actualizado en la consola. 

productos.shift();
console.log(productos);


//15. Buscar un Elemento en un Array de Objetos 
//• Usa el método “find” para buscar un producto cuyo nombre sea 
//"Producto2" en el array “productos” y muestra el producto encontrado en 
//la consola. 

//Hay que usar un callback o funcion felcha, 
//basicamente busco, en productos un produto en donde el precio sea === a 700
let producto2 = productos.find(productos => productos.precio === 700);
console.log(producto2);


//16. Ordenar un Array de Números 
//• Ordena el array “numeros” en orden ascendente y muestra el array 
//ordenado en la consola.


//Se utiliza el metodo . sort y a-b ascendente, a + b descendente, 
numeros.sort((a,b) => a - b);
console.log(numeros);


//17. Filtrar un Array de Números 
//• Usa el método “filter” para crear un nuevo array que contenga solo los 
//números mayores que 3 en el array “numeros” y muestra el nuevo array 
//en la consola. 

const numerosMayores = numeros.filter(numeros => numeros > 3);
console.log(numerosMayores);



//18. Crear un Objeto Literal Anidado 
//• Crea un objeto “empresa” con las propiedades “nombre”, “ubicación” y 
//un objeto anidado “empleados” que tenga una propiedad “cantidad”. 
//Muestra el objeto “empresa” en la consola. 


const empresa = {
    nombre: "pastelitos S.A",
    ubicacion: "José Ingenieros 5678",
    empleados : {
        cantidad : 12,
    }
}

console.log(empresa);


//19. Acceder a un Valor en un Objeto Anidado 
//• Accede y muestra en la consola la cantidad de empleados del objeto 
//“empresa”. 


console.log(empresa.empleados.cantidad);

//20. Combinar Arrays 
//• Crea dos arrays, “array1” y “array2”, y usa el método “concat” para 
//combinarlos en un solo array llamado “arrayCombinado”. Muestra 
//“arrayCombinado” en la consola.

const array1 = [1,2,3], array2 = [4,5,6];

const arrayCombiando =array1.concat(array2);
console.log(arrayCombiando);


/*
Instrucciones 
• Realiza cada uno de los siguientes ejercicios en un archivo JavaScript. 
• Asegúrate de probar y verificar tus respuestas en la consola del navegador. 
Ejercicios 
Lic. Gabriel Chaldú  
ic. Gabriel Chaldú 







Lic. Gabriel Chaldú 

*/ 