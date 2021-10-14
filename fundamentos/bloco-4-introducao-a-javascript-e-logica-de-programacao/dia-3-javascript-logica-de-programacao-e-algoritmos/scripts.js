console.log("Exercício 1");

let n = 5;
let asterisco = "*";
let linha = "";

for (let index = 0; index < n; index++) {
  linha = linha + asterisco;
}

for (let index = 0; index < n; index++) {
  console.log(linha);
}

console.log("");
console.log("Exercício 2");
let linha2 = "";

for (let index = 0; index < n; index++) {
  linha2 = linha2 + asterisco;
  console.log(linha2);
}

console.log("");
console.log("Exercício 3");
let linha3 = "";
let coluna = n;

for (let index = 0; index < n; index++) {
  for (let cindex = 0; cindex <= n; cindex++) {
    if(cindex < coluna){
      linha3 = linha3 + ' ';
    } else {
      linha3 = linha3 + asterisco;
    }
  }
  console.log(linha3)
  linha3 = '';
  coluna -= 1;
}

console.log('');
console.log("Exercício 4");
let linha4 = '';
let coluna2 = n;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let index = 0; index <= meio; index++) {
  for (let cindex = 0; cindex <= n; cindex++) {
    if(cindex > esquerda && cindex < direita){
      linha4 = linha4 + asterisco;
    } else {
      linha4 = linha4 + ' ';
    }
  }
  console.log(linha4);
  linha4 = '';
  direita ++;
  esquerda --;
}