const upperCase = function (string) {
    if (string.length <= 3) {
        return (string.toUpperCase());
    }
    front_part = (string.substring(0, 3)).toLowerCase()
    back_part = (string.substring(3, string.length))
    return front_part + back_part
}
const abc = (upperCase("JAVAScript"));
console.log(abc);