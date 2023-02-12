/* 
  Inicializacion
  asignacion
*/
class Auto {
	constructor(marca, modelo, año) {
		this.marca = marca
		this.modelo = modelo
		this.año = año
	}
	encender() {
		console.log(
			`El auto ${this.marca} ${this.modelo} del año ${this.año} está encendiendo.`
		)
	}
	acelerar() {
		console.log(
			`El auto ${this.marca} ${this.modelo} del año ${this.año} está acelerando.`
		)
	}
}

class Team {
	constructor(name) {
		this.name = name
		this.players = []
	}
	play() {
		console.log(`${this.name} is playing!`)
	}

	train() {
		console.log(`${this.name} is training!`)
	}

	static info() {
		console.log(`This is an static method`)
	}

	get sqad() {
		return this.players.join(`,`)
	}

	set squad(players) {
		this.players = []

		for (const player of players) {
			this.players.push(player.name)
		}
	}
}
