function ubahHuruf(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const bobAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = alphabet.indexOf(char.toUpperCase());
        if (index === -1) {
            result += char; // jika bukan huruf, tambahkan ke hasil tanpa pengubahan
        } else {
            const newChar = bobAlphabet[index] || bobAlphabet[index - alphabet.length];
            result += (char === char.toUpperCase()) ? newChar : newChar.toLowerCase();
        }
    }

    return result;
}


console.log(ubahHuruf('SEPULSA OKE', 10));
console.log(ubahHuruf('ALTERRA ACADEMY', 10));
