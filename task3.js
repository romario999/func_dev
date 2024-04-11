// звичайна рекурсія

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = 10;
console.log("F(" + n + ") =", fibonacci(n));


// -----хвостова рекурсія---------

function fibonacciTail(n1, a = 0, b = 1) {
    if (n1 === 0) {
        return a;
    }
    if (n1 === 1) {
        return b;
    }
    return fibonacciTail(n1 - 1, b, a + b);
}

// Приклад використання:
const n1 = 10;
console.log("F(" + n1 + ") =", fibonacciTail(n1));
