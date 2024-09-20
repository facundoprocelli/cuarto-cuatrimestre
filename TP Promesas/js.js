/* Ejercicio 1: Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje
cuando se resuelva.
*/

//La manera clásica

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("La promesa se cumlpió");
  }, 2000);
});

myPromise.then((mensaje) => {
  //  console.log(mensaje);
});

//La manera buena Async - Await
async function saludar() {
  const mensaje = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola como dice que le va");
    }, 2001);
  });

  console.log(mensaje);
}
//saludar();

/* Ejercicio 2: Crea una función que acepte un número y devuelva una Promise que se resuelva
con el doble del número después de 1 segundo.
*/

async function duplicar(num) {
  const resultado = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2); //Acá es donde va la resolución o la lógica de la función
    }, 1000); //La cantidad de tiempo que espero
  });
  return resultado; //Retorno una promesa
}

async function esperar() {
  //Creo una función para esperar
  value = await duplicar(4); // Uso el await para esperar a la promesa duplicar
}
//esperar();

/*Ejercicio 3: Crea dos Promises que se resuelvan después de 3 segundos cada una. Combina
ambas Promises para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar
Promise.all) */

async function promise1() {
  const resultado = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Soy la promise 1 y me resolví");
    }, 3000);
  });
  return resultado;
}

async function promise2() {
  const resultado = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Soy la promise 2 y me resolví");
    }, 4000);
  });
  return resultado;
}

async function promiseGlobal() {
  try {
    const resultado = await Promise.all([
      //Cuando se usa rl Promise.all, no hay que usar el new, ya que se compone de promesas existentes (p1 y p2)
      promise1(), //Hay que llamar a la promesa con el ()
      promise2(),
    ]);
    console.log(resultado);
  } catch {
    console.log("Error en alguna promesa");
  }
}

//promiseGlobal();

/*Ejercicio 4: Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y
devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos. */

async function peticionGET() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const JSONrespuesta = JSONrta;
      resolve(JSONrespuesta);
    }, 2000);
  });
}

const JSONrta = {
  mensaje: "Petición exitosa",
  codigo: 200,
  datos: {
    nombre: "Facundo",
    edad: "20",
    altura: "183",
  },
};

async function ejecutarPeticion() {
  const resultado = await peticionGET();
  console.log(resultado);
}

//ejecutarPeticion();

/**Ejercicio 5: Crea una función que acepte un arreglo de números y devuelva una Promise que se
resuelva con la suma de los números después de 1 segundo. (Usar reduce)
**/

async function sumador(arregloNum) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = arregloNum.reduce(
        (acumulador, numero) => acumulador + numero,
        0
      );
      resolve(resultado);
    }, 1000);
  });
}


async function mostrar(arregloNum) {
    const resultado = await sumador(arregloNum);
    console.log(resultado);
}

//console.log( sumador([1,2,3,4,5]));
//mostrar([1,2,3,4,5]);


/**Ejercicio 6: Crea una función asincrónica que haga una solicitud HTTP a una API de tu elección
utilizando la función fetch y devuelva el resultado en formato JSON. Maneja los errores
posibles. */


const urlBase = "https://cat-fact.herokuapp.com/facts"; //Endpoint de la petición


async function pedirDatoGato() {
    
    try {
        const response = await fetch(urlBase, {method: 'GET'}); //Hagun un fetch del endpoint

        if(!response.ok) { //Si hay error de petición lo digo
            throw new Error("Http error");
        }

        return await(response.json()); //Convierto la petición  a JSON
    } catch(error) {
        //Manejo los diferentes errores
        if(error instanceof TypeError) {
            console.error("Error de red!!");
        } else{
            console.error("Sucedió un error");
        }
        throw error;
    }
} 


async function mostrarRespuestaGato() {

    try {
const rta = await pedirDatoGato();
    console.log(rta);
    }
    catch (error) {
        console.error(error);
    }
}



mostrarRespuestaGato();


