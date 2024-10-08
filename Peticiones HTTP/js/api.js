const urlBase = "http://localhost:3000/tareas";

//Estructura estandar de una petición de tipo fetch GET
export async function getTareas() {
  try {
    const response = await fetch(urlBase);

    if (!response.ok) {
      throw new Error("HTTP request error" + response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Error red");
    } else {
      console.log("Error al obtener los datos de las tareas");
    }
    throw error;
  }
}

//Estructura estandar de una petición de tipo POST
export async function postTarea(tarea) {
  try {
    const response = await fetch(urlBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarea),
    });
    if (!response.ok) {
      throw new Error("HTTP request error" + response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Error red");
    } else {
      console.log("Error al grabar la tareas");
    }
    throw error;
  }
}

//Estructura estandar de una petición de tipo DELETE
export async function deleteTarea(id) {
  try {
    const response = await fetch(`${urlBase}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("HTTP request error" + response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Error red");
    } else {
      console.log("Error al eliminar  la tareas");
    }
    throw error;
  }
}

//Estructura estandar de una petición de tipo GET por ID
export async function getTareaById(id) {
  try {
    const response = await fetch(`${urlBase}/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("HTTP request error" + response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Error red");
    } else {
      console.log("Error al buscar  la tareas");
    }
    throw error;
  }
}

//Estructura estandar de una petición de tipo PUT
export async function putTarea(id, tarea) {
  try {
    const response = await fetch(`${urlBase}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarea),
    });

    if (!response.ok) {
      throw new Error("HTTP request error" + response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Error red");
    } else {
      console.log("Error al buscar  la tareas");
    }
    throw error;
  }
}

export async function getTarea() {
  try {
    const response = await fecth(urlBase);

    if (!response.ok) {
      throw new Error("Error al hacer la peticion" + response.status);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error de conexion");
    } else {
      console.error("Hubo un error en la petición");
    }
    throw error;
  }
}




export async function postTarea(tarea) {
  
  try{
    const response = await fetch(urlBase, {
      method: "POST",
      headers: "Contetn-Type: application/json",
      body: JSON.stringify(tarea)
    });
    if(!response.ok) {
      throw new Error("Error a la hora de hacer la peticion" + response.status);
    }
    return await response.json();
  }
  catch (error) {

    if(error instanceof TypeError) {
      console.error("Error en la conexion");
    } else {
      console.error("error en la petición");
    }
throw error;                
  }
}



async function getQcy(id) {

  try{
    const response = await fetch (`${urlBase}/${id}`);

    if (!response.ok) {
      throw new Error("Error a la hora de hacer la peticion" + response.satuts);
    }

    return response.json();
  }
  catch(error) {
    if (error instanceof TypeError) {
      console.error("Error de conexion");
    }
    else {
      console.error("Sucedió un error");
    }
    throw error;
  }
}


