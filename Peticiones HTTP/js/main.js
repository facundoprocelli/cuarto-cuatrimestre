import { getTareas, postTarea, deleteTarea } from "../js/api.js";

import { Tarea } from "../tarea/Tarea.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const lista = await getTareas();
    crearTabla(lista);
  } catch (error) {
    console.log(error);
    manejarError(
      error,
      "Hubo un problema a al cargar las tareas. Por favor, inténtalo de nuevo"
    );
  }
});

function manejarError(error, mensaje) {
  console.error("Error al cargar las tareas: ", error);
  alert(mensaje);
}

function crearTabla(lista) {
  lista.forEach((tarea) => {
    crearFila(tarea);
  });
}


function crearFila(tarea) {
  //Creo la etiqueta tr para hacer una tabla
  const tr = document.createElement("tr");

  //Creo y  cargo las columnas con la infromación de la tarea
  const tdNombre = document.createElement("td");
  tdNombre.textContent = tarea.nombre;
  const tdId = document.createElement("td");
  tdId.textContent = tarea.id;

  //Creo un atributo que me permita eliminar la tarea al click

  const tdEliminar = document.createElement("td");
  tdEliminar.innerHTML = `<a href = "#" > Eliminar</a>`;
  tdEliminar.onclick = async () => {
    try {
      await deleteTarea(tarea.id);
    } catch (error) {
      manejarError(error, "Error al eliminar la tarea");
    }
  };

  //Modificar Tarea

  const tdModificar = document.createElement("td");
  tdModificar.innerHTML = `<a href="../modificar-tarea.html?id=${tarea.id}">Modificar</a>`;

  const lista = document.getElementById("listaTareas");
  tr.append(tdId, tdNombre ,tdEliminar, tdModificar);
  lista.appendChild(tr);
}


const formulario = document.getElementById("formulario");
const input = document.getElementById("tarea");

formulario.addEventListener("submit", async () => {
  try {
    const tarea = new Tarea(input.value);
    await postTarea(tarea);
  } catch (error) {
    manejarError(error, "Hubo un porblema al crear la tarea");
  }
});
