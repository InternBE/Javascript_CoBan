let hour = 9;
if (hour < 10 || hour > 18) {
  console.log("The office is closed.");
}

hour = 12;
let isWeekend = true;
if (hour > 10 && hour < 18 && !isWeekend) {
  console.log("The office is open.");
}

let isRaining = false;
if (!isRaining) {
  console.log("You can go outside.");
}
