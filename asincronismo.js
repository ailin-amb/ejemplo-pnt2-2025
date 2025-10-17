const preparativos = [
    { requisito: "documentos al dia", valor: true},
    { requisito: "reservas de hotel", valor: false},
    { requisito: "transporte confirmado", valor: true},
    { requisito: "seguro de viaje", valor: true},
    { requisito: "dinero", valor: false}
];

function listaParaViajar(preparativos) {
    // filtramos los q todavia no estan listos
    const faltantes = preparativos.filter(item => !item.valor);

    if (faltantes.length === 0) {
        console.log("Todo listo para viajar");
    } else {
        //obtenemos el nombre de los faltantes
        const listaFaltantes = faltantes.map (item => item.requisito).join(", ");
        console.log(`Faltan preparar: ${listaFaltantes}`);
    }
}
listaParaViajar(preparativos);

// Agregar nuevo requisito
preparativos.push({ requisito: "vacunas necesarias", valor: true });

// Eliminar "seguro de viaje"
const indice = preparativos.findIndex(item => item.requisito === "seguro de viaje");
if (indice !== -1) {
  preparativos.splice(indice, 1);
}

// Actualizar "transporte confirmado" a false
const transporte = preparativos.find(item => item.requisito === "transporte confirmado");
if (transporte) {
  transporte.valor = false;
}

// Volver a ejecutar para ver cambios
listaParaViajar(preparativos);