
console.log("Exercício 1");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

console.log("");
console.log("Exercício 2");

let soma = 0;

for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}
console.log(soma);

console.log("");
console.log("Exercício 3");

let media = soma /10;

console.log(media);

console.log("");
console.log("Exercício 4");

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

console.log("");
console.log("Exercício 5");

let maior = numbers[0];

for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior);

console.log("");
console.log("Exercício 6");

let impar = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    impar += 1;
  } 
}

if (impar == 0){
  console.log("Nenhum número Impar");
} else {
  console.log(impar)
}

console.log("");
console.log("Exercício 7");

let menor = numbers[0];

for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);

console.log("");
console.log("Exercício 8");

let exercicio8 = [1];

for (let index = 2; index < 26; index++) {
  exercicio8.push(index);
}
console.log(exercicio8);

console.log("");
console.log("Exercício 9");

for (let index = 0; index < exercicio8.length; index++) {
  exercicio8[index];
  console.log(exercicio8[index] / 2);
}