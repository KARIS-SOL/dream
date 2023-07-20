"use strict";
// const name = "ellie";
// const age = 4;
// print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }

// 개선하기위해서 Objcect 를 사용한다

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties → 계산된 properties

console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand (Lovely shorthand)
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };

// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// const person4 = makePerson("ellie", 30);
// console.log(person4);

// 4. Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person4 = new Person("ellie", 30);
console.log(person4);

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("job" in ellie);
console.log(ellie.job);

// 6. for … in vs for … of
