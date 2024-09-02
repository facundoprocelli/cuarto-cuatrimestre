import { Medicamento } from './Medicamento.js';

export class Inventario {
    constructor() {
        this.medicamentos = [];
    }

    agregarMedicamento(medicamento) {
        this.medicamentos.push(medicamento);
    }

    buscarMedicamento(idMedicamento) {
       const dato = this.medicamentos.find((medicamento) =>medicamento.id === idMedicamento);
        return dato;
    }

    mostrarInventario () {
        this.medicamentos.forEach(medicamento => {
            console.log(medicamento.mostrarDetalles());
        });
    }

    actualizarStock(id, cantidad) {
        let medicamento = this.buscarMedicamento(id);
        
        if(medicamento instanceof Medicamento) {
            medicamento.stock = cantidad;
        }
    }
}