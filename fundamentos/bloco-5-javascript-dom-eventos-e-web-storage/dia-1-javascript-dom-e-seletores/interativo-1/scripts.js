console.log(document.getElementById("elementoOndeVoceEsta"));
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = 'rgb(155, 0, 255)';
document.getElementById("primeiroFilhoDoFilho").innerText = 'Um texto';
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling)
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling)
console.log(document.getElementById("pai").lastChild.previousSibling.previousElementSibling)

let beloPrimo = 'Bom exercício';
let beloPrimoItem = document.createElement('p');

beloPrimoItem.innerText = beloPrimo;
quartoEUltimoFilho.appendChild(beloPrimoItem);