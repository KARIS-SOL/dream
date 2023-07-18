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
