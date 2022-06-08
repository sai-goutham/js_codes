today = new Date()
var dussera = new Date(today.getFullYear(), 10, 14)
if (today.getMonth() == 10 && today.getDay() > 14) {
    dussera.setFullYear(dussera.getFullYear() + 1);

}

var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((dussera.getTime() - today.getTime()) / (one_day)) + " days left until Dussera Left!");