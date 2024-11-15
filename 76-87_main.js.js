// ClassList Property

//add
//contains
//remove
//toggle

// var boxElement = document.querySelector('.box');

// console.log(boxElement.classList);

// boxElement.classList.add('red');

// console.log(boxElement.classList.contains('red'));

// boxElement.classList.remove('red');

// setInterval(()=>{
//     boxElement.classList.toggle('red');
// },1000)



//DOM Events
//1. Attribute Events

//2. Assign events using the element node
//  var h1Element = document.querySelector('h1');
//  h1Element.onclick = function(){
//     console.log(Math.random());
//  }


// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }

// inputElement.oninput = function(e){
//     console.log(e.target.value);
// }

//===================
//DOM events
//1. preventDefault

// var aElement = document.links;
// for(var i = 0; i < aElement.length; i++)
// {
//     aElement[i].onclick = function(e){
//         if(!e.target.href.startsWith('http://google.com.vn'))
//         {
//             e.preventDefault();
//         }
//     }
// }

//2. stopPropagation
// document.querySelector('div').onclick = function(){
//     console.log('DIV')
// }
// document.querySelector('button').onclick = function(e){
//     e.stopPropagation();
//     console.log('Click me!')
// }

//===========================
//EventsListener
// var btn = document.getElementById('btn');
// function viec1(){
//     console.log('Viec 1');
// }
// function viec2(){
//     console.log('Viec 2');
// }

// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);


// setTimeout(function(){
//     btn.removeEventListener('click', viec1)
// }, 3000);
//==========================


//JSON
//Dùng JSON.parse() để chuyển một chuỗi JSON thành một đối tượng JavaScript.
// var jsonString = '{"name": "Nguyen Van A", "age": 25}';
// var user = JSON.parse(jsonString);
// console.log(user.name); // Output: Nguyen Van A

//Dùng JSON.stringify() để chuyển một đối tượng JavaScript thành một chuỗi JSON.
// var user = {
//     name: "Nguyen Van A",
//     age: 25
// };
// var jsonString = JSON.stringify(user);
// console.log(jsonString); 
//================================

//PROMISE
//  Sync Async
// setTimeout(function(){
//     console.log(1);
// },1000);
// // console.log(1);
// console.log(2);
//  "Nỗi đau"
// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//             setTimeout(function(){
//                 console.log(4);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// Cách sử dụng của Promise
// Pending: Trạng thái ban đầu, khi Promise đang đợi xử lý.
// Fulfilled: Trạng thái khi Promise hoàn thành thành công và trả về một kết quả.
// Rejected: Trạng thái khi Promise thất bại và trả về một lỗi. 
// let myPromise = new Promise(function(resolve, reject) {
//     let success = true; // giả sử điều kiện này để quyết định thành công hoặc thất bại

//     if(success) {
//         resolve("Thao tác thành công!");
//     } else {
//         reject("Thao tác thất bại.");
//     }
// });

// Cách hoạt động của Promise, Promise Chain
// Hàm trả về một Promise giả lập hành động bất đồng bộ
// function doSomethingAsync(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (value > 0) {
//                 resolve(value * 2);  // Resolve với giá trị gấp đôi
//             } else {
//                 reject('Giá trị phải lớn hơn 0');
//             }
//         }, 1000);
//     });
// }

// doSomethingAsync(5)  // Bước đầu tiên: Hàm trả về Promise
//     .then(result => {
//         console.log('Bước 1:', result); // Kết quả của Promise đầu tiên
//         return doSomethingAsync(result); // Chuyển kết quả vào Promise tiếp theo
//     })
//     .then(result => {
//         console.log('Bước 2:', result); // Kết quả của Promise thứ hai
//         return doSomethingAsync(result); // Chuyển kết quả vào Promise tiếp theo
//     })
//     .then(result => {
//         console.log('Bước 3:', result); // Kết quả của Promise thứ ba
//     })
//     .catch(error => {
//         console.error('Lỗi:', error); // Xử lý lỗi (nếu có)
//     });

// Promise Methods
//1 Resolve 
// const promise1 = Promise.resolve(42);
// promise1.then(value => console.log(value));  
// //2 Reject
// const promise2 = Promise.reject(new Error("Something went wrong"));
// promise2.catch(error => console.log(error.message));  // Output: Something went wrong
//3 All
// const promise1 = Promise.resolve(3);
// const promise2 = Promise.resolve(4);
// const promise3 = Promise.resolve(5);

// Promise.all([promise1, promise2, promise3])
//   .then(values => {
//     console.log(values);  // Output: [3, 4, 5]
//   })
//   .catch(error => {
//     console.log(error);  // Nếu có Promise nào bị reject, lỗi sẽ được xử lý ở đây
//   });

//===================
//ECMAScript 6




