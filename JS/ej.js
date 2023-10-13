let words = ['20', '2', '43', '1'];

// Ordenar en orden ascendente
console.log (words.sort())

// Ordenar en orden descendente

console.log (words.sort().reverse())
// Ordenar con localCompare en orden ascendente
console.log (words.sort((a, b) => a.localeCompare(b)))
// Ordenar con localCompare en orden descendente
console.log (words.sort((a, b) => b.localeCompare(a)))
