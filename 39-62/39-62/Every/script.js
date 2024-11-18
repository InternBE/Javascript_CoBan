/* 
array.every(callback(element, index, array), thisArg);
*/

const numbers = [5, 8, 12, 20];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true


const values = [3, 6, 9, -1, 10];
const allPositiveIntegers = values.every(value => value > 0 && Number.isInteger(value));
console.log(allPositiveIntegers); // Output: false (vì có số -1)


const isAllIntegers = arr => arr.every(Number.isInteger);

console.log(isAllIntegers([1, 2, 3, 4])); // Output: true
console.log(isAllIntegers([1, 2.5, 3, 4])); // Output: false


const allStrings = arr => arr.every(element => typeof element === 'string');

console.log(allStrings(['apple', 'banana', 'cherry'])); // Output: true
console.log(allStrings(['apple', 'banana', 5])); // Output: false


const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 17 }
];

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // Output: false (vì Charlie chưa đủ tuổi)


const products = [
  { name: 'Laptop', inStock: true },
  { name: 'Phone', inStock: true },
  { name: 'Tablet', inStock: false }
];

const allInStock = products.every(product => product.inStock);
console.log(allInStock); // Output: false (vì có sản phẩm không sẵn trong kho)
