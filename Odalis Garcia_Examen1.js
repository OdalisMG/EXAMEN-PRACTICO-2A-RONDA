let text1 = "casa blanca";
let result = "";
let characterToSearch= "a";
let countCharacter= 0;

/* Invertir la cadena de texto*/
for (let index = text1.length -1 ; index >= 0; index--) {
    result += text1.charAt(index);
}




console.log("El resultado de invertir " + text1 + " es " + result);

for (let index2 = 0; index2 < text1.length; index2++) {
    let newCharacter= text1.charAt(index2);
    if (characterToSearch==newCharacter) {
        countCharacter++;
    }
}

console.log("El texto " + text1 + " tiene " + countCharacter + " de la letra " + characterToSearch );