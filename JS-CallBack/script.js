//Cú pháp
/*
    +function()
    +có tham số truyền vào
*/

function greet(name, name02,callback) {
    console.log("Hello, " + name);
    callback(name02); // Gọi hàm callback
}

function sayGoodbye(name02) {
    console.log(name02 +" Tạm biệt!");
}

greet('Everyone', 'Amazing Tech', sayGoodbye);



