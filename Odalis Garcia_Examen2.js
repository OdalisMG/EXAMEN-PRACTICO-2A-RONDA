let numero = 100;
let arr = new Array(numero);
for (let i = 0; i < numero; i++) {
    arr[i] = i + 1;
}
if(numero % 2 === 0){
document.write("Es par");
} else {
document.write("Es impar")
}

arr.sort(() => Math.random() > 0.5 ? 1 : -1);
const suerte = arr.slice(0, 5);