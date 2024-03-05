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