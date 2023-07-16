"use strict";
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello! `);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);

ellie.speak();

// Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // 값을 return
  get age() {
    return this._age;
  }
  // 값을 설정 -> 그러므로 value 를 받아와야함
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // } 혹은
    this._age = value < 0 ? 0 : value;
  }
}

// 사용자가 실수로 -1 이라고 설정해도, setter 를 통해 0 이 되야함
// 사람의 나이는 -1 이 될 수 없잖아!
const user1 = new User("Steve", "job", -1);
console.log(user1.age);

// 3. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }
}

// 상속
class Rectangle extends Shape {}

// 다양성
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
// drawing blue color of
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, "red");
triangle.draw();
// drawing red color of
console.log(triangle.getArea()); // 200
