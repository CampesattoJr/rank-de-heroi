let rankDeHeroi = rank(78,17)
let classificacao = " "

function rank(vitorias, derrotas) {
	let rankAoVivo = vitorias - derrotas
    return rankAoVivo
}

if (rankDeHeroi <= 10) {
	classificacao = "Ferro"
} else if (rankDeHeroi > 10 && rankDeHeroi <= 20) {
	classificacao = "Bronze"
} else if (rankDeHeroi > 20 && rankDeHeroi <= 50) {
	classificacao = "Prata"
} else if (rankDeHeroi > 50 && rankDeHeroi <= 80) {
	classificacao = "Ouro"
} else if (rankDeHeroi > 80 && rankDeHeroi <= 90) {
	classificacao = "Diamante"
} else if (rankDeHeroi > 90 && rankDeHeroi <= 100) {
	classificacao = "Lendário"
} else {
    classificacao = "Imortal"
}

console.log("O Herói tem saldo de vitórias:" + rankDeHeroi + ", e está no nível:" + classificacao)