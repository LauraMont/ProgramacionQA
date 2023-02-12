
function suma(a, b) {
    return a +
      b;
  }
console.log(suma(10, 20));

/* 
  Funciones arrow
  Funciones nombradas
*/

// Definición de la función
function suma_y_muestra(primerNumero, segundoNumero) {
  var resultado = primerNumero + segundoNumero;
  console.log("El resultado es " + resultado);
}

// Declaración de las variables
var numero1 = 3;
var numero2 = 5;

// Llamada a la función
suma_y_muestra(numero1, numero2);

const func = function () {
  return "Función tradicional.";
};

const func1 = () => {
  return "Función flecha.";
};
const func2 = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
const func3 = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
const func4 = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b