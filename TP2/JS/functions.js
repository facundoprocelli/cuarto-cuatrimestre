//--------------------Arreglos con Tipos de Datos Primitivos:------------------

//1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.

const arreglo1 = [1, 2, 2, 3, 4, 5, 2, 6, 7, 8];

function sumarArreglo(arreglo) {
  let rta = 0;
  arreglo.forEach((num) => {
    rta = rta + num;
  });
  return rta;
}

console.log(sumarArreglo(arreglo1));

//2. Promedio: Calcula el promedio de los números en un arreglo.

function calcularPromedio(arreglo) {
  let pos = 0;
  arreglo.forEach((posicion) => {
    pos++;
  });

  let total = sumarArreglo(arreglo);

  return total / pos;
}

console.log(calcularPromedio(arreglo1));

//3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de
//números.

function buscarMenor(arreglo) {
  return Math.min(...arreglo);
}

function buscarMayor(arreglo) {
  return Math.max(...arreglo);
}

console.log(buscarMenor(arreglo1));
console.log(buscarMayor(arreglo1));

//4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su
//índice, si existe.

function buscarPosValor(arreglo, dato) {
  for (let i = 0; i < arreglo.length; i++) {
    const valor = arreglo[i];
    if (valor == dato) {
      return i;
    }
  }

  return -1;
}

console.log(buscarPosValor(arreglo1, 5));

//5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con
//números pares y otro con números impares.

function separaArreglo(arreglo) {
  const arrPares = [];
  const arrImares = [];

  arreglo.forEach((numero) => {
    if (numero % 2 == 0) arrPares.push(numero);
    else arrImares.push(numero);
  });

  console.log(arrImares);
  console.log(arrPares);
}

separaArreglo(arreglo1);

//6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.

function eliminarDuplicados(arreglo) {
  let arregloSinDuplicados = [];
  //Hago un bulce y busco el valor actual en el arreglo sin duplicados, si no está, lo agrego
  arreglo.forEach((numero) => {
    if (!arregloSinDuplicados.find((valor) => valor === numero)) {
      arregloSinDuplicados.push(numero);
    }
  });
  return arregloSinDuplicados;
}

console.log(eliminarDuplicados(arreglo1));

//7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.

function ordenarArreglo(arreglo) {
  return arreglo.sort((a, b) => a - b);
}

console.log(ordenarArreglo(arreglo1));

//8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.

//Utilizando el filter, te da un nuevo arreglo que cumpla con el requisito del filtro
function eliminarValorArreglo(arreglo, valor) {
  return arreglo.filter((numero) => numero != valor);
}

//Aca se recorre el bucle, cunado lo encuentra lo borra y vuelve una posicion para atras para
//Asegurarse de que no se saltee ningun numero
function eliminarValorArregloV2(arreglo, valor) {
  for (let i = 0; i < arreglo.length; i++) {
    const num = arreglo[i];

    if (num === valor) {
      arreglo.splice(i, 1);
      i--;
    }
  }
  return arreglo;
}

console.log(eliminarValorArreglo(arreglo1, 2));
console.log(eliminarValorArregloV2(arreglo1, 3));

//9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya
//duplicados.

function combinarArreglosSinDuplicados(arreglo1, arreglo2) {
  let nuevArreglo;
  nuevArreglo = arreglo1.concat(arreglo2);
  nuevArreglo = eliminarDuplicados(nuevArreglo);
  nuevArreglo = ordenarArreglo(nuevArreglo);
  return nuevArreglo;
}

let arreglo2 = [5, 6, 3, 32, 5, 8, 9, 4, 3, 2];

console.log(combinarArreglosSinDuplicados(arreglo1, arreglo2));

//--------------------------- Arreglos con Tipos de Datos Compuestos: ----------------------------
//10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.

const listaDeCompras = [
  {
    producto: "Coca cola",
    cantidad: 3,
  },
  {
    producto: "Srpite",
    cantidad: 2,
  },
  {
    producto: "Fanta",
    cantidad: 5,
  },
  {
    producto: "Manaos",
    cantidad: 8,
  },
  {
    producto: "Mirinda",
    cantidad: 2,
  },
  {
    producto: "Prity",
    cantidad: 1,
  },
];

console.log(listaDeCompras);

//11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y
//correos electrónicos.

function contacto(nombre, nroTelefono, correo) {
  this.nombre = nombre;
  this.nroTelefono = nroTelefono;
  this.correo = correo;

  this.mostrarcontacto = function () {
    console.log(`----Contacto----\n
                    Nombre: ${this.nombre}\n
                    NroTelefono: ${this.nroTelefono}\n
                    Correo: ${this.correo}`);
  };
}

const c1 = new contacto("Facu", "2235929828", "facundoprocelliqgmail.com");
const c2 = new contacto("Facun", "2235893939", "facundoprocelliqgmail123.com");
const c3 = new contacto(
  "Facundo",
  "2235923455",
  "facundoprocelliqgmail456.com"
);

const agendaDeContactos = [c1, c2, c3];

console.log(agendaDeContactos);

//12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la
//palabra en el párrafo.

function buscarPalabra(parrafo, palabra) {
  let veces = 0;
  let arregloDePalabras = parrafo.split(" ");
  arregloDePalabras.forEach((palabraAux) => {
    if (palabraAux === palabra) {
      veces++;
    }
  });
  return veces;
}

console.log(
  buscarPalabra(
    "hola este es un hola parrafo hola la verdad hola es qu eno estoy seguro hola",
    "hola"
  )
);

//13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.

function orednarListaDeCompras(listaDeCompras, propiedad) {
  if (propiedad === "cantidad")
    return listaDeCompras.sort((a, b) => a[propiedad] - b[propiedad]);
  else if (propiedad === "producto")
    return listaDeCompras.sort((a, b) => a[propiedad].localeCompare(b[propiedad]) );
}

console.log(orednarListaDeCompras(listaDeCompras, "producto"));

//14. Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades
//y precios.

function registro() {
  let ventasTotales = 0;
  this.registroVentas = [];

  this.vender = function (producto, cantidad, precio) {
    const venta = {producto, cantidad, precio};
    this.registroVentas.push(venta);
    ventasTotales += 1;
  };

  this.calcularPrecioFinal = function(cantidad, precio) {
    return cantidad * precio;
  }

  this.mostrarVenta = function (venta) {
    console.log(`----- Venta ----\n
                Producto: ${venta.producto}\n
                Cantidad: ${venta.cantidad}\n
                Precio Total: ${venta.cantidad * venta.precio}`);
  };



  this.mostrarHistorialVentas = function() {
    this.registroVentas.forEach(venta => {
      console.log(this.mostrarVenta(venta));
    });

  }
}

const reg = new registro();

reg.vender("Agua", 2,10);
reg.vender("Coca cola", 1,30);
reg.vender("Auttito", 4,20);


reg.mostrarHistorialVentas();

//15. Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular 
//el       hola tod bine co andas  total. 

class producto {
  constructor(nombre, cantidad, precio, id) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.id = id;
  }
  
}

class carritoDeCompras {
  constructor() {
    this.carro = [];
  }

  agregarProductoAlCarrito(producto) {
    this.carro.push(producto);
  }

  //Esta función no elimina el elemento del arreglo, sino que crea uno nuevo
  eliminarProductoDelCarrito(idPruducto) {
    return this.carro.filter(producto => producto.id != idPruducto);
  }

  eliminarProductoDelCarritoV2(idPruducto) {

    for (let i = 0; i < this.carro.length; i++) {
      const producto = this.carro[i];
      if(producto.id == idPruducto){
        this.carro.splice(i,1);
      }
    }
  }

  eliminarProductoDelCarritoV3(idProducto) {
    const index = this.carro.findIndex(producto => producto.id === idProducto);
    if(index !== -1) {
      this.carro.splice(index,1);
    }
  }


  calcularPrecioFinal() {
    let precioFinal = 0;
    this.carro.forEach(producto => {
      precioFinal += (producto.precio * producto.cantidad);
    });
    return precioFinal;
  }


  mostrarCarrito(){
    this.carro.forEach(producto => {
      console.log(producto);
    });
  }
}


const carro = new carritoDeCompras();

carro.agregarProductoAlCarrito( new producto("cocaCola", 2, 12,1));
carro.agregarProductoAlCarrito( new producto("Sprite", 2, 5,2));
carro.agregarProductoAlCarrito( new producto("Fanta", 2, 15,3));

carro.eliminarProductoDelCarritoV3(2);
console.log(carro.calcularPrecioFinal());
carro.mostrarCarrito();

/*
16. Gestor de Tareas: Crea un gestor de tareas que permita agregar, completar y listar tareas 
pendientes.*/
