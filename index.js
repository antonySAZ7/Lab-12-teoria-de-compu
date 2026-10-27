const { ejecutarEjemplo: ejecutarProblema1 } = require('./problema1/not_church');
const { ejecutarEjemplo: ejecutarProblema2 } = require('./problema2/ordenar_diccionarios');
const { ejecutarEjemplo: ejecutarProblema3 } = require('./problema3/transponer_matriz');
const { ejecutarEjemplo: ejecutarProblema4 } = require('./problema4/eliminar_elementos');

const separador = () => console.log('\n' + '='.repeat(64) + '\n');

console.log('LABORATORIO 12 - PROGRAMACION FUNCIONAL');
separador();
ejecutarProblema1();
separador();
ejecutarProblema2();
separador();
ejecutarProblema3();
separador();
ejecutarProblema4();
