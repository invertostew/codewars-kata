const printerError = s => {
    let count = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (/^[n-z]$/.test(s[i])) {
            count += 1;
        }
    }
    return `${count}/${s.length}`;
};
