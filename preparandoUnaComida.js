console.log("🍽 Bienvenido al local de comidas rápidas");

// Simulamos la preparación de cada ítem usando Promesas
function prepararEnsalada() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("🥗 Ensalada lista");
      resolve("ensalada");
    }, 4000); // 4 segundos
  });
}

function prepararHamburguesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("🍔 Hamburguesa lista");
      resolve("hamburguesa");
    }, 8000); // 8 segundos
  });
}

function prepararBebida() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("🥤 Bebida lista");
      resolve("bebida");
    }, 2000); // 2 segundos
  });
}

// Función principal que coordina todo el proceso
async function prepararPedido() {
  try {
    console.log("⏳ Preparando su pedido...");

    // Preparamos todo al mismo tiempo
    const resultados = await Promise.all([
      prepararEnsalada(),
      prepararHamburguesa(),
      prepararBebida()
    ]);

    console.log("✅ Todos los ítems listos:", resultados.join(", "));
    console.log("🎉 ¡Su pedido está completo y listo para entregar!");
  } catch (error) {
    console.log("❌ Hubo un problema con el pedido:", error);
  }
}

// Ejecutamos la función principal
prepararPedido();