function fibonacci(n) {
    const result = [0, 1];
    while (result.length < n) {
        result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
}

console.log(fibonacci(8));