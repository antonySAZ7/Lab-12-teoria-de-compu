# Laboratorio 12 - Programación funcional

**Curso:** Teoría de la Computación  
**Lenguaje:** JavaScript (Node.js)  
**Fecha:** noviembre de 2025

Este repositorio contiene la solución de los cuatro problemas del Laboratorio 12. Los programas usan funciones de primera clase, funciones lambda (funciones flecha), composición, `map`, `filter` y `reduce`, evitando modificar las listas originales.

## Estructura

```text
.
|-- problema1/
|   `-- not_church.js
|-- problema2/
|   `-- ordenar_diccionarios.js
|-- problema3/
|   `-- transponer_matriz.js
|-- problema4/
|   `-- eliminar_elementos.js
|-- output/
|   `-- pdf/
|       `-- respuestas_lab12.pdf
|-- tests/
|   `-- laboratorio.test.js
|-- index.js
|-- package.json
`-- README.md
```

## Requisitos

- Node.js 18 o una versión posterior.
- No se necesitan paquetes externos.

## Ejecucion

Ejecutar todos los ejemplos:

```bash
npm start
```

Ejecutar un problema por separado:

```bash
node problema1/not_church.js
node problema2/ordenar_diccionarios.js
node problema3/transponer_matriz.js
node problema4/eliminar_elementos.js
```

Ejecutar las pruebas automáticas:

```bash
npm test
```

## Video

[Ver demostración en YouTube](https://youtu.be/REEMPLAZAR_ID_VIDEO)

> Antes de entregar, subir el video como **no listado** y reemplazar `REEMPLAZAR_ID_VIDEO` por el identificador real del video.

### Guía breve para el video (máximo 10 minutos)

1. Mostrar la estructura del repositorio y mencionar que se utilizó JavaScript funcional.
2. Explicar `TRUE`, `FALSE` y `NOT` como booleanos de Church.
3. Ejecutar `node problema1/not_church.js` y relacionar la salida con la reducción-beta del PDF.
4. Mostrar las funciones lambda de los problemas 2, 3 y 4.
5. Ejecutar `npm start` y luego `npm test`.
6. Mostrar el PDF de respuestas teóricas.

## Nota sobre el Problema 1

Aunque el Problema 1 es principalmente teórico, `not_church.js` permite demostrar en ejecución la operación `NOT` definida mediante cálculo lambda. Esto proporciona contenido ejecutable para el video solicitado por el enunciado.
