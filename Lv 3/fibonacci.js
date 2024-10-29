// fibonacci.js
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeries(n) {
    const series = [];
    for (let i = 0; i <= n; i++) {
        series.push(fibonacci(i));
    }
    return series;
}

// Jangan hapus kode di bawah ini!
export { fibonacci, fibonacciSeries };