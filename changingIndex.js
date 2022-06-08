const change = function (str1) {
    if (str1.length < 1) {
        return str1
    } else {
        mid = str1.substring(1, str1.length - 1)


    } return (str1.charAt(str1.length - 1) + mid + str1.charAt(0))
}

console.log(change("python"));