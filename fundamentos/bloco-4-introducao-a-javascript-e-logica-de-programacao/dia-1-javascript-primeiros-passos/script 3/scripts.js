const a = 7;
const b = 17;
const c = 27;

if(a > b && a > c){
  console.log(a);
}

else if(a < b && c < b){
  console.log(b);
}

else if(a < c && b < c){
  console.log(c);
}

else {
  console.log("impossível com os número que eu botei");
}