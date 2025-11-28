function precedencia(op) {
    if (op === '^') return 3;
    if (op === '*' || op === '/') return 2;
    if (op === '+' || op === '-') return 1;
    return 0;
}

function stringToCharArray(str) {
    return str.split(" ").filter(t => t.length > 0);
}