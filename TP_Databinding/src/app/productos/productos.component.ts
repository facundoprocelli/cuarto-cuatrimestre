import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

    productos = [
    { id: 1, nombre: 'Producto A', precio: 100, stock: 10, descuento: false },
    { id: 2, nombre: 'Producto B', precio: 200, stock: 20, descuento: false },
    { id: 3, nombre: 'Producto C', precio: 300, stock: 30, descuento: false }
    ];


 // Variable para el nuevo producto
 nuevoProducto = {
  nombre: '',
  precio:  0,
  stock: 0,
  descuento: false
};

// Método para agregar un producto
agregarProducto() {
  // Crear un nuevo producto con un ID único
  const nuevoProducto = {
    id: this.productos.length + 1, // ID único basado en la cantidad de productos
    nombre: this.nuevoProducto.nombre,
    precio: this.nuevoProducto.precio,
    stock: this.nuevoProducto.stock,
    descuento: false // El nuevo producto no tiene descuento por defecto
  };

  // Agregar el nuevo producto a la lista
  if(nuevoProducto.nombre !== "") {
  this.productos.push(nuevoProducto);
  }
  // Limpiar los campos del formulario
  this.nuevoProducto.nombre = '';
  this.nuevoProducto.precio = 0;
}

IdEliminar = 0;


eliminarProducto(id: any) {

 const indice = this.productos.findIndex(prodBuscado => prodBuscado.id === id);
  this.productos.splice(indice,1);

this.IdEliminar = 0;
}

idActualizar = 0;
precioActualizar = 0;
actualizarPrecio(id:any, precio: any) {
  const indice = this.productos.findIndex(prodBuscado => prodBuscado.id === id);
  this.productos[indice].precio = precio;

this.idActualizar = 0;
this.precioActualizar = 0;
}



idActualizarStock = 0;
stockActualizar = 0;
actualizarStock(id:any, stock:any) {
  const indice = this.productos.findIndex(prod => prod.id === id)
  this.productos[indice].stock = stock;

}


}







