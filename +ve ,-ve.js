function checkNumber(x, y) {
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        return true
    } else {
        return false
    }
}
console.log(checkNumber(2, 2));
console.log(checkNumber(-2, 2));
console.log(checkNumber(2, -2));
console.log(checkNumber(-2, -2));