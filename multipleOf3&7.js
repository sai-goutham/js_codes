const multiple = function (number) {
    if (number % 3 == 0 || number % 7 == 0) {
        return true
    } else {
        return false
    }
}
console.log(multiple(12));
console.log(multiple(14));
console.log(multiple(10));
console.log(multiple(11));