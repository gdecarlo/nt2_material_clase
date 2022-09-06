async function entregarComida() {
  console.log("Empieza el proceso..");
  const ensalada = await getEnsalada();
  const hamburguesa = await getHamburguesa();
  const bebida = await getBebida();

  //const resultado = await Promise.all([])
  console.log(`Su pedido de ${ensalada} ${hamburguesa} ${bebida} esta listo`);
}

function getEnsalada() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🥗");
    }, 2000);
  });
}

function getHamburguesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🍔");
    }, 3000);
  });
}

//no tenes control
function getBebida() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🍺");
    }, 4000);
  });
}

entregarComida();
