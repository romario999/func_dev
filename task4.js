//звичайна рекурсія
function countSteps(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return countSteps(n - 1) + countSteps(n - 2);
    }
}

console.log(countSteps(5));

//------хвостова рекурсія-----
function countSteps(n1, first = 1, second = 1) {
    if (n1 === 0) {
        return first;
    } else if (n1 === 1) {
        return second;
    } else {
        return countSteps(n1 - 1, second, first + second);
    }
}

console.log(countSteps(5));
