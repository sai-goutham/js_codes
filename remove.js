const remove = function (str1, char_pos) {
    if (char_pos > str1.length) {
        return "Incorrect char_position was given"
    } else {


        part1 = str1.substring(0, char_pos)
        part2 = str1.substring(char_pos + 1, str1.length)
        return (part1 + part2)
    }
}
console.log(remove("Python", 0));
console.log(remove("javascript", 4));
console.log(remove('one', 7));