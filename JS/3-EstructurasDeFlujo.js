let edad = 23
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/* 
  Ciclos, Bucles o Loops
  Condicionales
*/
//if else
// Programa: "Analizar edad para votar" -------------------------------
edad <- 21
if (edad >= 18) {
  console.log("Edad =", edad, "años: puede votar")
} else {
  console.log("Edad =", edad, "años: no puede votar")
}

var ahora = new Date();

// obtiene el número de día
// de la semana, de 0 a 6
var diaDeLaSemana = ahora.getDay();

switch (diaDeLaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Día inexistente");
}
//Ciclos, Bucles o Loops
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
for(var i=0; i<7; i++) {
  console.log(dias[i]);
}
var i = 5;

while (i > 0) {
  console.log("i es igual a " + i);
  i--;
}
var i = 5;

do {
  console.log("i es igual a " + i);
    i--;
} while (i > 0);