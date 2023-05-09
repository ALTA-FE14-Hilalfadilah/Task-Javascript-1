function PlayWithAsterik(n) {
    for (let i = 0; i <= n; i++) {
        let star = ' ';
        for (let j = 1; j <= n - i; j++) {
            star += ' ';
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            star += '*';
        }
        console.log(star);
    }
}

PlayWithAsterik(5);