// Lấy phần tử với id "container"
const container = document.getElementById('container');

// Thuộc tính nodeName
console.log(container.nodeName); // "DIV"

// Thuộc tính nodeType
console.log(container.nodeType); // 1 (Element)

// Thuộc tính childNodes
console.log(container.childNodes); 
// NodeList(3) [Text, <p#paragraph>, Text] (bao gồm cả text nodes)

// Thuộc tính firstChild và lastChild
console.log(container.firstChild.nodeName); // "#text" (do khoảng trắng)
console.log(container.lastChild.nodeName); // "#text" (do khoảng trắng)

// Bỏ qua text nodes, chỉ lấy các phần tử con (children)
console.log(container.firstElementChild.nodeName); // "P"
console.log(container.lastElementChild.nodeName); // "P"

// Truy cập một phần tử con
const paragraph = document.getElementById('paragraph');
console.log(paragraph.textContent); // "Hello, World!"

// Truy cập phần tử <span> bên trong <p>
const span = paragraph.firstElementChild;
console.log(span.textContent); // "World"

// Truy cập anh chị em kế tiếp của <p> đầu tiên
console.log(paragraph.nextElementSibling.textContent); // "This is a second paragraph."

// Thay đổi nội dung của <span>
span.textContent = 'Everyone';
console.log(paragraph.textContent); // "Hello, Everyone!"

// Thay đổi HTML bên trong <p>
paragraph.innerHTML = 'Goodbye, <strong>Everyone</strong>!';
console.log(paragraph.innerHTML); // "Goodbye, <strong>Everyone</strong>!"
