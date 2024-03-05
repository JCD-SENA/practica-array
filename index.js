/*
Admito que originalmente (y esto se puede notar revisando otras ramas o commits anteriores) originalmente hacia un programa
distinto por cada ejercicio, eso fue hastá que me di cuenta que eso no tenia sentido por lo que decidí corregir el error
juntando el contenido de ramas anteriores.
*/

let arrayVacio = []
console.log(arrayVacio)

let matriz = [1, 2, 3]
console.log(matriz)

let matrizDistintosValores = [1, 2, 3, 'a', 'b', 'c']
console.log(matrizDistintosValores)

let matriz2 = new Array(1, 2, 3, 'a', 'b', 'c')
console.log(matriz2)

let secuencia = Array.from(matriz2, (a,e) => {
    return e + 1
})
console.log(secuencia)

matriz.fill(0)
console.log(matriz)

//Cometí un error en la rama de sacar un substring ya que leí slice en vez de split
let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat"
let lorem = texto.split(" ")[0]
console.log(lorem)

let numeros1 =  [1,  2,  3 ]
let numeros10 = [10, 20, 30]
let numeros = [...numeros1, ...numeros10]
console.log(numeros)

let matriz3 = [1,3,4,6,4,3,5,4,3,2]
let unicos = [...new Set(matriz3)]
console.log(unicos)

function generarTablas (matriz) {
	return Array.from(matriz, (a,e) => {
		let tabla = new Array(10)
		for (let i = 0; i < 10; i++) {
			tabla[i] = a * (i + 1)
		}
		return tabla
	})
}
console.log(generarTablas([1, 5, 10]))

console.log(matriz3.length)

unicos.push(7)
console.log(unicos)