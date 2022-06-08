const num = function (x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true
    } else {
        return "Number out of bound"
    }
}
const anc = num(44, 56)
console.log(anc);