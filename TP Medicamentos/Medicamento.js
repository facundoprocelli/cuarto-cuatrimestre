 export class Medicamento {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarDetalles() {
    console.log(`-------- Medicamento ------- \n 
            id: ${this.id} \n
            nombre: ${this.nombre} \n
            precio: ${this.precio} \n
            stock: ${this.stock}`);
  }
}
