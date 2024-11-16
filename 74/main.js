// Lấy phần tử DOM có class "box"
const boxElement = document.querySelector('.box');

Object.assign(boxElement.style, {
    width: '300px',
    height: '200px',
    backgroundColor: 'lightcoral',
    border: '1px solid black'
  });
  
// In ra console giá trị chiều rộng (width) để kiểm tra
console.log(boxElement.style.width); // "300px"
