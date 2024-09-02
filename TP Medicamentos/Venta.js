export class Venta {


    constructor(medicamento, cantidad) {
        this.medicamento = medicamento;
        this.cantidad = cantidad;
        this.total = cantidad * medicamento.precio;
    }

    registrarVenta() {

        const stockMedicamento = this.medicamento.stock;

        if(stockMedicamento > this.cantidad) {
            this.medicamento.stock = this.medicamento.stock - this.cantidad;
        } else{
            console.log("La venta no se puede registrar por faltante de unidades");
        }
    }



}