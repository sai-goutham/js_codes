const check = function (x, y) {
    if (x == 50 || y == 50 || (x + y == 50)) {
        return true
    }
    return false

}

console.log(check(50, 50));
console.log(check(20, 50));
console.log(check(20, 20));
console.log(check(20, 30));