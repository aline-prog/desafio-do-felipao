// Solicita ao usuário o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = prompt("Digite o nome do herói: ");
let xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói: "));

// Aplica a estrutura de decisão para determinar o nível do herói com base na XP
let nivelHeroi;
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibe a mensagem final com o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
