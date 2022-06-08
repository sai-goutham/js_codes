const triple = function (n) {
    if (n <= 19) {
        return (19 - n)
    } else {
        return (n - 19) * 3
    }
}

console.log(triple(3))
console.log(triple(2754));


var hon = ['goutham', 'sai', 'obama', 'trump']
hon.forEach(function (s) {
    document.write(s.length + " ")

});

let num = [12, 36, 983, 25, 764, 85]
num.push(560);
num.pop();
num.push(48);
num.push(561);
num.pop();
num.pop();
s = document.write(num)
console.log(s)