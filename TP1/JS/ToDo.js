//30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays.
//Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes.

function tarea(titulo, descripcion, fecha) {
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.fecha = fecha;
  this.completada = false;

  this.verTarea = function () {
    console.log(`------Tarea-----\nTitulo: ${titulo} \nDescripción ${descripcion}\nFecha ${fecha}\nCompletada: ${this.completada}`);
  }
  this.completarTarea = function () {
    this.completada = true;
    console.log("Tarea completada");
  }
}


function toDoList () {
    this.listaDeTareas = [];

    this.agregarTarea = function (tarea) {
        this.listaDeTareas.push(tarea);
    }
    this.mostrarTodasLasTareas = function () {
        this.listaDeTareas.forEach(tarea => {
            console.log(tarea.verTarea());
        });
    }

    this.buscarTareaXNombre = function (nombreTarea) {
        for (let i = 0; i < this.listaDeTareas.length; i++) {
            const tarea = this.listaDeTareas[i];
            
            if(tarea.titulo === nombreTarea) {
                return tarea;
            }
        }
        return null;
    } 

    this.completarTareaXNombre = function(nombreTarea) {

        let tarea = this.buscarTareaXNombre(nombreTarea);
        if(tarea != null) {
        tarea.completarTarea();
        tarea.verTarea();
        }
    }

}


const lista = new toDoList();
const t1 = new tarea("Ordenar Pieza", "Hay que ordenar toda la habitación", "14/08");
const t2 = new tarea("Hacer guia de progrmación", "Hay que ordenar toda la habitación", "14/08");
const t3 = new tarea("Completar foro de Legislación ", "Hay que ordenar toda la habitación", "14/08");
lista.agregarTarea(t1);
lista.agregarTarea(t2);
lista.agregarTarea(t3);
lista.mostrarTodasLasTareas();
lista.completarTareaXNombre("Ordenar Pieza");



