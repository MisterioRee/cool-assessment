
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function convertOperatorToOperation(operator) {
    switch (operator) {
        case '+':
            return 'add';
        case '-':
            return 'subtract';
        default:
            return 'add';
    }
}