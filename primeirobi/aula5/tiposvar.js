const listarFrutas = ["maçã", "banana", "laranja", "uva", "abacaxi","abacate"];

const listaAbacate = listarFrutas.map(fruta => fruta + "abacate");

console.log(listaAbacate);

const listaLaranjas = listarFrutas.filter(fruta => fruta === "laranja");
console.log(listaLaranjas);