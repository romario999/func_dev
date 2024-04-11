//звичайна рекурсія
function pow(x, n) {
    if (n === 0) {
        return 1;
    }
    else if (n < 0) {
        return 1 / pow(x, -n);
    }
    else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 3)); 
console.log(pow(5, 2)); 
console.log(pow(3, -1));

//--------хвостова рекурсія-----


function pow(x, n, result = 1) {
    if (n === 0) {
        return result;
    }
    else if (n < 0) {
        return pow(x, n + 1, result / x);
    }
    else {
        return pow(x, n - 1, result * x);
    }
}

console.log(pow(2, 3)); 
console.log(pow(5, 2)); 
console.log(pow(3, -1)); 
