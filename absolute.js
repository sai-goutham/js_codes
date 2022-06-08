const absolute = function (n) {
    diff = 0
    if (n > 19) {
        return (n - 19) * 3
    }
    return 19 - n

}

console.log(absolute(19));