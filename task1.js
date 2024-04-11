// головна рекурсія
function reverseString(str) {
    if (str === "") {
        return str;
    }
    else {
        process.stdout.write(str.charAt(str.length - 1));
        return reverseString(str.substring(0, str.length - 1));
    }
}

const inputString = "tiger";
console.log("Рядок у зворотньому порядку:");
reverseString(inputString);

// хвостова рекурсія

function reverseString(str, reversedStr = '') {
    if (str === '') {
        console.log(reversedStr);
        return;
    }

    reverseString(str.slice(1), str[0] + reversedStr);
}

reverseString("tiger");
