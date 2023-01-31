
class Auto {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
    encender() {
      console.log(`El auto ${this.marca} ${this.modelo} del año ${this.año} está encendiendo.`);
    }
    acelerar() {
      console.log(`El auto ${this.marca} ${this.modelo} del año ${this.año} está acelerando.`);
    }
  }