/**
 * Devuelve una nueva lista ordenada por la clave indicada.
 * La lista original no se modifica.
 */
const ordenarPorClave = (diccionarios, clave) => {
  if (!Array.isArray(diccionarios)) {
    throw new TypeError('Se esperaba una lista de diccionarios.');
  }

  if (diccionarios.some(diccionario => !(clave in diccionario))) {
    throw new Error(`Todos los diccionarios deben contener la clave "${clave}".`);
  }

  return [...diccionarios].sort((primero, segundo) => {
    const valorA = primero[clave];
    const valorB = segundo[clave];

    if (typeof valorA === 'string' && typeof valorB === 'string') {
      return valorA.localeCompare(valorB, 'es', { sensitivity: 'base' });
    }

    return valorA < valorB ? -1 : valorA > valorB ? 1 : 0;
  });
};

const ejecutarEjemplo = () => {
  const telefonos = [
    { make: 'Nokia', model: 216, color: 'Black' },
    { make: 'Mi Max', model: 2, color: 'Gold' },
    { make: 'Samsung', model: 7, color: 'Blue' }
  ];

  console.log('Problema 2 - Ordenar diccionarios por la clave "model"');
  console.log(ordenarPorClave(telefonos, 'model'));
};

if (require.main === module) {
  ejecutarEjemplo();
}

module.exports = { ordenarPorClave, ejecutarEjemplo };
