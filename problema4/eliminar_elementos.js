/**
 * Conserva un elemento solamente cuando no pertenece al conjunto a borrar.
 * filter crea una lista nueva; la entrada permanece intacta.
 */
const eliminarElementos = (lista, elementosABorrar) => {
  if (!Array.isArray(lista) || !Array.isArray(elementosABorrar)) {
    throw new TypeError('Ambos argumentos deben ser listas.');
  }

  const prohibidos = new Set(elementosABorrar);
  return lista.filter(elemento => !prohibidos.has(elemento));
};

const ejecutarEjemplo = () => {
  const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
  const coloresABorrar = ['amarillo', 'cafe', 'blanco'];

  console.log('Problema 4 - Eliminar elementos');
  console.log('Lista inicial:', colores);
  console.log('Elementos a borrar:', coloresABorrar);
  console.log('Resultado:', eliminarElementos(colores, coloresABorrar));
};

if (require.main === module) {
  ejecutarEjemplo();
}

module.exports = { eliminarElementos, ejecutarEjemplo };
