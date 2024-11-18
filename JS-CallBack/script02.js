

// const subjects = ["JavaScript", "Python", "Ruby"];

// const result = subjects.map(function(subject, index) {
//     return `Subject ${index + 1}: ${subject}`;
// });
// console.log(result);


Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const subjects = ["JavaScript", "Python", "Ruby"];
const result = subjects.myMap((subject, index) => {
    return `Subject ${index + 1}: ${subject}`;
});
console.log(result);
