//Giới thiệu về Prototype trong JavaScript
//Cách sử dụng Prototype
ObjectName.prototype.propertyName = value;
ObjectName.prototype.methodName = function() {
  // phương thức
};

//Ví dụ minh họa: Tạo đối tượng Animal và mở rộng nó.
// Tạo một hàm constructor cho Animal
function Animal(name) {
    this.name = name; // thuộc tính name
  }
  
  // Thêm phương thức speak vào prototype của Animal
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  // Tạo đối tượng mới từ Animal
  const animal1 = new Animal("Dog");
  const animal2 = new Animal("Cat");
  
  // Gọi phương thức speak
  animal1.speak(); // Output: Dog makes a noise.
  animal2.speak(); // Output: Cat makes a noise.

//Mở rộng Prototype với các đối tượng con:
// Tạo một hàm constructor cho Dog kế thừa từ Animal
function Dog(name) {
    Animal.call(this, name); // Gọi hàm constructor của Animal
  }
  
  // Kế thừa từ Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Thêm phương thức bark vào Dog
  Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
  };
  
  // Tạo đối tượng Dog
  const dog1 = new Dog("Rex");
  
  // Sử dụng phương thức từ Animal và Dog
  dog1.speak(); // Output: Rex makes a noise.
  dog1.bark();  // Output: Rex barks.
  