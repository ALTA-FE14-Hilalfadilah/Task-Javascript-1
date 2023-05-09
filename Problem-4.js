function caesarCipher(str, num) {
    num = num % 26; // menangani angka yang lebih besar dari 26
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt();

        // periksa apakah karakter adalah huruf
        if (charCode >= 65 && charCode <= 90) {
            charCode += num;
            if (charCode > 90) {
                charCode = 64 + (charCode - 90);
            }
        } else if (charCode >= 97 && charCode <= 122) {
            charCode += num;
            if (charCode > 122) {
                charCode = 96 + (charCode - 122);
            }
        }

        result += String.fromCharCode(charCode);
    }
    return result;
}

console.log(caesarCipher('abc', 3));
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1));
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1000));

