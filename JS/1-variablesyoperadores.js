let variable = 5;

console.log("\nHola! Veremos Variables en JS \nEn JS hay muchos tipos de variables pero no tenemos que declararlas solo usamos let o var (este ultimo no es recomendable de utilizar)")
console.log("Una variable puede cambiar de tipo de variable segun lo que contenga ,aqui te dejo algunos ejemplos de variables:\n")

variable = 10 
console.log(`Soy una variable de tipo ${typeof(variable)} ,contego numeros enteros como: ${variable}`)
variable = 10.56
console.log(`Tambien puedo contener numeros con decimales! Tales como ${variable}`)

variable = "Hola!"

console.log(`\nAhora soy una variable de tipo ${typeof(variable)} ,contego caracteres asi como: ${variable}\n`)

variable = true
console.log(`Ahora soy una variable de tipo ${typeof(variable)} ,solo puedo contener dos tipos de valores: ${variable}`)
variable = false
console.log(`Y ${variable}, me suelen utilizar para indicar el estado de algo\n`)

let var1

console.log(`Cuando no me asignan ningun valor por defecto soy ${var1}`)

console.log("Por cierto puedes hacer operaciones conmigo!\n")

var1 = 10 + 10 

console.log(`Puedes realizar cualquier operaciones matematica con los operadores aritmeticos!\nOtro operador interesante es el modulo(%),al hacer modulo da como resultado el resto de la division de ambos numeros\n`)

console.log(`Por ejemplo: 18 % 4 =${18%6}\n`)

