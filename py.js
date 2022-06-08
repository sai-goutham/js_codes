const name_check = function (str1) {
    if (str1 == null || str1 == undefined || str1.substring(0, 2) == 'py') {
        return str1
    } else {
        return "py" + str1
    }

}

console.log(name_check('pytoh'));
console.log(name_check("java"));
