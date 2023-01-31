//Imprimir un mensaje:
console.log("Hola, mundo!");

//Variables con tipos:
let edad1: number = 30;
let estatura: number = 1.75;
let genero: string = 'M';
let casado: boolean = false;
let nombre: string = "Juan";
console.log("Mi nombre es " + nombre + ".");
console.log("Tengo " + edad1 + " años.");
console.log("Mi estatura es " + estatura + " metros.");
console.log("Soy del género " + genero + ".");
console.log("Estoy casado: " + casado + ".");

//Funciones:
function saludar(nombre: string): void {
        console.log("Hola, " + nombre + "!");
    }
saludar("Juan");

//Clases:
    class Persona {
        nombre: string;
        edad: number;
        genero: string;
        constructor(nombre: string, edad: number, genero: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        }
        presentarse(): void {
        console.log("Hola, soy " + this.nombre + ".");
        }
    }
    let juan = new Persona("Juan", 30, "M");
    juan.presentarse();
    