const temp = function (name, value) {
    if (name = 'celusis') {
        let n2 = (value * 9 / 5) + 32;
        console.log(`conversion of celusis ${value} to fhaerenheit is:${n2} `);
    } else if (name = 'faherenheit') {
        let n3 = (value - 32) * 5 / 9;
        console.log(`conversion of faherenheit ${value} to celusis is:${n3} `);

    }
}
const abc = temp('celusis', 27)