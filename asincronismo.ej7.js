// Paso 7 - Traer los preparativos desde una API usando fetch

// Definimos una función asíncrona (porque vamos a usar "await")
async function listaParaViajar() {

  try {
    // Pedimos los datos al servidor (la API)
    const respuesta = await fetch("https://www.mockachino.com/33754ea7-2586-48/preparativos");

    // Convertimos esa respuesta en formato JSON (objeto de JavaScript)
    const datos = await respuesta.json();
    const preparativos = datos.preparativos;
    console.log("Datos recibidos: ", preparativos);

    // Filtramos los que todavía NO están listos (valor = false)
    const faltantes = preparativos.filter(item => !item.valor);

    // Mostramos el resultado en consola
    if (faltantes.length === 0) {
      console.log("Todo listo para viajar 😎");
    } else {
      // Creamos una lista con los nombres de los faltantes
      const listaFaltantes = faltantes.map(item => item.requisito).join(", ");
      console.log(`Faltan preparar: ${listaFaltantes}`);
    }

  } catch (error) {
    // Si algo sale mal (por ejemplo, no se puede conectar), lo mostramos
    console.error("❌ Hubo un error al obtener los preparativos:", error);
  }
}

// Llamamos a la función para que se ejecute
listaParaViajar();


//¿Qué hace cada parte?
//	•	async: indica que la función usará operaciones que tardan (como pedir datos a Internet).
//	•	await fetch(...): espera la respuesta de la URL antes de seguir.
//	•	.json(): convierte los datos que llegan en texto a un formato que JavaScript puede entender (objeto o array).
//	•	filter(): se queda solo con los preparativos que no están listos.
//	•	map() y join(): arman una frase con los nombres de esos faltantes.
//	•	try...catch: por si hay un error, que no se rompa el programa. 