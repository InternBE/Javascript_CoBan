


/* Cú pháp
array
.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

*/

const numbers = [10, 5, 15, 8, 25, 12];
const maxNumber = numbers.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator;
}, 0);

console.log('Maxnumber: ',maxNumber); // Output: 25

const totalNumbers = numbers.reduce((sum, index)=>{
  console.log("Tổng: ",sum);
  return sum + index;
  
}, 0);

//làm phẳng mảng từ depth Array
var depthArray = [1, 2, [3, 4], 5, [6, 'v', 7]];

var flatArray = depthArray.reduce(function(flatOutPut, depthItem)
{
  return flatOutPut.concat(depthItem);
},[]);

console.log("My array", flatArray);
//Tính tổng thành phần
const cart = [
  { product: 'Apple', quantity: 2 },
  { product: 'Banana', quantity: 5 },
  { product: 'Orange', quantity: 3 }
];

const totalQuantity = cart.reduce((accumulator, item) => {
  return accumulator + item.quantity;
}, 0);

console.log("Tổng số lượng:",totalQuantity); // Output: 10

//Gộp các phần tử trong mảng dựa trên nhóm 
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Mike', age: 25 },
  { name: 'Sara', age: 30 }
];

const groupedByAge = people.reduce((accumulator, person) => {
  const age = person.age;
  if (!accumulator[age]) {
    accumulator[age] = [];
  }
  accumulator[age].push(person.name);
  return accumulator;
}, {});

console.log(groupedByAge);
// Output: { '25': ['John', 'Mike'], '30': ['Jane', 'Sara'] }
