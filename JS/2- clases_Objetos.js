
console.log("\nContinuemos con objetos!\nUn objeto es una representacion de un objeto real mediante caracteristicas y acciones de forma resumida\n")

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

