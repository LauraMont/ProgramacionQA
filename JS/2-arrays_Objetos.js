console.log("\nContinuemos con Arrays y Objetos!\n")

console.log("Un Array en JavaScript es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado con referencia a la posición que ocupa dentro del mismo\nAun asi un erray sigue siendo una variable!\nAhora veremos algunos de los metodos mas utilizados en la manipulaion de arrays:\n")

/* 
    Arrays
    1-Inicializar 
    2-Asignar valores
    3-Agregar/remover ítems
        splice
        slice
        concat
        push/pop
    4-Metodos de filtrado
        Filter - Find 
    5-Recorrer un array
        ForEach - Map

*/

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
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final

// ["Manzana", "Banana", "Naranja"]

//Eliminar el último elemento de un array
let ultimo = frutas.pop() // Elimina "Naranja" del final

// ["Manzana", "Banana"]

//Añadir un elemento al principio de un array
let nuevaLongitud1 = frutas.unshift('Fresa') // Añade "Fresa" al inicio

// ["Fresa" ,"Manzana", "Banana"]

//Eliminar el primer elemento de un array
let primero = frutas.shift() // Elimina "Fresa" del inicio

// ["Manzana", "Banana"]

/*Eliminar un único elemento mediante su posición
Continuando con los mismos ejemplos, si quisieras eliminar «Banana» del array podrías emplear dos parámetros: 

La posición del primer elemento que se elimina
El número de elementos que se quieren eliminar. 
De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir «Banana».
*/

let elementoEliminado = frutas.splice(pos, 1)

// ["Manzana", "Fresa"]

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
const numeros3 = [4, 9, 16, 25, 29];
numeros.find((valor) => valor > 18); // 25
/*
filter()
Este método crea un nuevo array con los elementos que cumplen una condición.
*/
const numeros= [45, 4, 9, 16, 25];
numeros.filter((valor) => valor > 18); // [45, 25]

//5-Recorrer un array
/*
forEach()
Este método llama a una función específica, una vez por cada elemento sobre el que itera dentro del array. No cambia el array original.

☑️ DATO!
No puedes controlar el bucle, por ejemplo, con las instrucciones break o continue. En el caso de que necesites usar break, puedes utilizar el método every().
Tenga en cuenta que la función toma 3 argumentos. 

El valor del elemento.
El índice del elemento. (Opcional)
El array en sí. (Opcional)
*/
let texto = "";
const numeros2 = [45, 4, 9, 16, 25];
numeros.forEach((valor) => texto += valor + " ");
console.log(texto); // 45 4 9 16 25
/*map()
Este método realiza una función en cada elemento del array. Crea un nuevo array y no cambia el original.
(No se ejecuta en array sin valores)
En este ejemplo se multiplica cada valor del array por 2:
*/
const numeros1= [45, 4, 9, 16, 25];
numeros.map((valor) => valor * 2);  // [90, 8, 18, 32, 50]


/* 
    OBJETOS
    Inicializacion
    Asignacion
*/
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


let frutas = ["manzana", "banana", "pera"];
console.log(frutas[1]);

let persona = {
    nombre: "Juan",
    edad: 30,
    trabajo: "Desarrollador",
};
console.log(persona.nombre);