const test = require('node:test');
const assert = require('node:assert/strict');

const { TRUE, FALSE, NOT, aBooleano } = require('../problema1/not_church');
const { ordenarPorClave } = require('../problema2/ordenar_diccionarios');
const { transponer } = require('../problema3/transponer_matriz');
const { eliminarElementos } = require('../problema4/eliminar_elementos');

test('Problema 1: NOT invierte los booleanos de Church', () => {
  assert.equal(aBooleano(NOT(TRUE)), false);
  assert.equal(aBooleano(NOT(FALSE)), true);
});

test('Problema 2: ordena por model y no modifica la lista original', () => {
  const entrada = [
    { make: 'Nokia', model: 216 },
    { make: 'Mi Max', model: 2 },
    { make: 'Samsung', model: 7 }
  ];
  const copia = structuredClone(entrada);

  assert.deepEqual(
    ordenarPorClave(entrada, 'model').map(telefono => telefono.model),
    [2, 7, 216]
  );
  assert.deepEqual(entrada, copia);
});

test('Problema 3: transpone una matriz cuadrada', () => {
  assert.deepEqual(transponer([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]);
});

test('Problema 3: tambien admite matrices rectangulares y vacias', () => {
  assert.deepEqual(transponer([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]);
  assert.deepEqual(transponer([]), []);
});

test('Problema 4: elimina coincidencias e ignora elementos inexistentes', () => {
  const entrada = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
  const resultado = eliminarElementos(entrada, ['amarillo', 'cafe', 'blanco']);

  assert.deepEqual(resultado, ['rojo', 'verde', 'azul', 'gris', 'negro']);
  assert.deepEqual(entrada, ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro']);
});

test('Las funciones rechazan entradas invalidas importantes', () => {
  assert.throws(() => ordenarPorClave([{ a: 1 }, { b: 2 }], 'a'));
  assert.throws(() => transponer([[1, 2], [3]]));
  assert.throws(() => eliminarElementos('no es lista', []));
});
