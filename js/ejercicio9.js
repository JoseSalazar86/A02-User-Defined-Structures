let cadenaCifrada = "Rfgb rf ry rwrepvpvb 9";
let cadenaDecodificada = "";

for (let i = 0; i < cadenaCifrada.length; i++) {
    let char = cadenaCifrada[i];
    let code = char.charCodeAt(0);

    if ((code >= 65 && code <= 90) || (code >=90 && code <= 120)){
        let base = (code >= 65 && code <= 90) ? 65 : 97 ;
        char = String.fromCharCode(((code - base + 13) % 26) + base);
    }

    cadenaDecodificada += char;
}

console.log(cadenaDecodificada);