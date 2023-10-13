console.log("\nContinuemos con Arrays y Objetos!\n")

console.log("Un Array en JavaScript es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado con referencia a la posición que ocupa dentro del mismo\nAun asi un erray sigue siendo una variable!\nAhora veremos algunos de los metodos mas utilizados en la manipulaion de arrays:\n")

//1-Inicializacion
// Forma tradicional
const array = new Array("a", "b", "c");
// Mediante literales (preferidas)
const array1 = ["a", "b", "c"]; // Array con 3 elementos
const empty = []; // Array vacío (0 elementos)
const mixto = ["a", 5, true]; // Array mixto (string, number, boolean).
//2-Asignar valores

//3-Agregar/remover ítems
//Añadir un elemento al final de un array
let frutas = ["Manzana", "Banana"]
frutas.push('Naranja') // Añade "Naranja" al final

//Eliminar el último elemento de un array. Devuelve el elemento eliminado
ultimo = frutas.pop() // Elimina "Naranja" del final

//Añadir un elemento al principio de un array
frutas.unshift('Fresa') // Añade "Fresa" al inicio

//Eliminar el primer elemento de un array
frutas.shift() // Elimina "Fresa" del inicio

//Eliminar rango de valores pero no afecta el array
let nuevoArray = frutas.splice(0, 1)

//Eliminar un rango y puede reemplazarlo con otro valor , afecta al array .Esta funcion devuelve el valor extraido (valor)
let valor = frutas.splice(0,1,'nuevoValor')

console.log("Un objeto es una representacion de un objeto real mediante caracteristicas y acciones de forma resumida\n")

//4-Metodos de filtrado
/*
find()
Este método devuelve el valor del primer elemento del array que cumple con una condición. (No es compatible con Internet Explorer).
Tenga en cuenta que la función puede tomar 3 argumentos:
El valor del elemento.
El índice del elemento. (Opcional)
El array en sí. (Opcional)
*/
const numeros = [4, 9, 16, 25, 29];
let ValorEncontrado = numeros.find((valor) => valor > 18); // 25
/*
filter()
Este método crea un nuevo array con los elementos que cumplen una condición.
*/
let valoresNuevos = numeros.filter((valor) => valor > 18); // [45, 25]

//5-Recorrer un array
/*
forEach()
Este método llama a una función específica, una vez por cada elemento sobre el que itera dentro del array.
*/
let texto = "";
const numeros2 = [45, 4, 9, 16, 25];
numeros2.forEach((valor) => texto += valor + " ");
console.log(texto); // 45 4 9 16 25
/*map()
Este método realiza una función en cada elemento del array. Crea un nuevo array y no cambia el original.
(No se ejecuta en array sin valores)
En este ejemplo se multiplica cada valor del array por 2:
*/
const numeros1= [45, 4, 9, 16, 25];
numeros1.map((valor) => valor * 2);  // [90, 8, 18, 32, 50]


/*   OBJETOS   */
let mascota = {
    especie : "perro",
    nombre: "Sasha",
    edad: 5,
    vista: false,
    comer: function (){
        console.log("\nVen a comer Sasha!!\n")
    },
    dormir: function(){
        console.log("Hagamos una siesta...\n")
    }
}

console.log(`Te presento a la representacion ${typeof(mascota)} de mi mascota sasha :\nSe llama ${mascota.nombre} es un ${mascota.especie} y tiene ${mascota.edad} años`)
console.log("Algo que sasha hace todos los dias es comer y cuando es hora de hacerlo el debe ejecutar esa accion pero antes le aviso")
mascota.comer()
console.log("Sasha es un perro muy peresoso por lo que gran parte del dia esta en plan ")
mascota.dormir()

console.log(frutas[1]);

let persona = {
    nombre: "Juan",
    edad: 30,
    trabajo: "Desarrollador",
};
console.log(persona.nombre);