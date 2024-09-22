import {Tarea} from "../tarea/Tarea.js";
import { getTareaById, putTarea } from "./api.js";

const input = document.getElementById("tarea");
const param = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", async () => {
    const tarea = await getTarea();
    input.value = tarea.nombre;
})

async function getTarea() {
    try {
        const tarea = getTareaById(param.get("id"));
        return tarea;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


async function actualizarTarea() {
    try{
        const tarea = new Tarea(input.value);
        const id = param.get("id");
        await putTarea(id, tarea);
        window.location.href = "index.html";
    }catch(error) {
        console.error(error);
    }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", () => {
    event.preventDefault();
    actualizarTarea();
})