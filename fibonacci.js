function fibs(n) {
    const result = [0, 1];
    while (result.length < n) {
        result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
}

function fibsRec(n) {
    if (n === 0) return [0,];
    if (n === 1) return [0, 1,];
    return fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibsRec(8));