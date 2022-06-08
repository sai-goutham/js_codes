function area(s1, s2, s3) {
  const s = (s1 + s2 + s3) / 2;
  return Math.sqrt((s * (s - s1) * (s - s2) * (s - s3)))

}

const abc = area(5, 6, 7)
console.log(`The Area of triangle is: ${abc}`)


var s1 = 5;
var s2 = 6;
var s3 = 7;

var s = (s1 + s2 + s3) / 2;
var area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
console.log(area);