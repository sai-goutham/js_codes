const frntandbackindex = function (str) {
    const first_index = str.substring(0, 1)
    const mid = str.slice(1)
    return first_index + mid + first_index

}
console.log(frntandbackindex('python'));
