// Booleanos de Church: cada booleano selecciona uno de dos valores.
const TRUE = verdadero => falso => verdadero;
const FALSE = verdadero => falso => falso;

// NOT = lambda p. p FALSE TRUE
const NOT = proposicion => proposicion(FALSE)(TRUE);

// Convierte un booleano de Church a un booleano de JavaScript para mostrarlo.
const aBooleano = proposicion => proposicion(true)(false);

const ejecutarEjemplo = () => {
  console.log('Problema 1 - NOT con booleanos de Church');
  console.log(`NOT TRUE  = ${aBooleano(NOT(TRUE))}`);
  console.log(`NOT FALSE = ${aBooleano(NOT(FALSE))}`);
};

if (require.main === module) {
  ejecutarEjemplo();
}

module.exports = { TRUE, FALSE, NOT, aBooleano, ejecutarEjemplo };
