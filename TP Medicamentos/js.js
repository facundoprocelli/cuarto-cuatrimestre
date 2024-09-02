import { Medicamento } from './Medicamento.js';
import { Inventario  } from './Inventario.js';
import {  Venta } from "./Venta.js";

 const m1 = new Medicamento (1, "Diclofenac", 100, 15);
 const m2 = new Medicamento (2, "Tafirol", 150, 12);
 const m3 = new Medicamento (3, "Gargaleta", 130, 16);
 const m4 = new Medicamento (4, "Plac-Out", 10, 20);
 const m5 = new Medicamento (5, "Ibuprofeno", 160, 2);


 const inventario = new Inventario();


 inventario.agregarMedicamento(m1);
 inventario.agregarMedicamento(m2);
 inventario.agregarMedicamento(m3);
 inventario.agregarMedicamento(m4);
 inventario.agregarMedicamento(m5);

const medicamentoEntonctrado = inventario.buscarMedicamento(2);
console.log(medicamentoEntonctrado);

inventario.actualizarStock(3, 23) 

 inventario.mostrarInventario();

 const v1 = new Venta(m5, 4 );

 v1.registrarVenta();
 console.log(v1);
 inventario.mostrarInventario();

 
