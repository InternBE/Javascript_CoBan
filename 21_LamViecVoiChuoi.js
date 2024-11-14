var myString = "Lap trinh JavaScript";
console.log(myString.length); // Kết quả: 20

var myString = "Lap trinh JavaScript";
console.log(myString.indexOf("JavaScript")); // Kết quả: 10

var myString = "Lap trinh JavaScript";
console.log(myString.slice(4, 9)); // Kết quả: 'trinh'

var myString = "Lap trinh JavaScript";
var newString = myString.replace("JavaScript", "JS");
console.log(newString); // Kết quả: 'Lap trinh JS'

var myString = "Lap trinh JavaScript";
console.log(myString.toUpperCase()); // Kết quả: 'LAP TRINH JAVASCRIPT'

var myString = "Lap trinh JavaScript";
console.log(myString.toLowerCase()); // Kết quả: 'lap trinh javascript'

var myString = "  Lap trinh JavaScript  ";
console.log(myString.trim()); // Kết quả: 'Lap trinh JavaScript'

var myString = "Lap trinh JavaScript";
var array = myString.split(" ");
console.log(array); // Kết quả: ['Lap', 'trinh', 'JavaScript']
