/**
 * Calcula la transpuesta sin modificar la matriz original.
 * La lambda externa recorre columnas y la interna extrae cada elemento.
 */
const transponer = matriz => {
  if (!Array.isArray(matriz) || matriz.some(fila => !Array.isArray(fila))) {
    throw new TypeError('La matriz debe ser una lista de listas.');
  }

  if (matriz.length === 0) {
    return [];
  }

  const columnas = matriz[0].length;
  if (matriz.some(fila => fila.length !== columnas)) {
    throw new Error('Todas las filas deben tener la misma longitud.');
  }

  return matriz[0].map((_, indiceColumna) =>
    matriz.map(fila => fila[indiceColumna])
  );
};

const ejecutarEjemplo = () => {
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log('Problema 3 - Matriz original');
  console.table(matriz);
  console.log('Matriz transpuesta');
  console.table(transponer(matriz));
};

if (require.main === module) {
  ejecutarEjemplo();
}

module.exports = { transponer, ejecutarEjemplo };
