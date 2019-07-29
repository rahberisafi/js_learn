// function first(){
//   return this;
// }
//
// console.log(first() === global);
//
//
// // this is node's global object
// // because that's where the
// // first method was called
//
// function second() {
//     'use strict';
//
//      return this;
// }
//
// console.log(second() === global);
// console.log(second() === undefined);


// let myObject = { value: 'my Object' };

// value is set on the global object

// global.value = 'Global Object';
//
// function third(name) {
//   return this.value + name;
// }
//
// // console.log(third());
//
// console.log(third.call(myObject, 'bob'));
// console.log(third.apply(myObject, ['bob']));

function fifth() {
  console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
  firstName: 'bob',
  lastName: 'tabor',
  print: fifth
}

let customer2 = {
  firstName: 'richard',
  lastName: 'gvv',
  print: fifth
}

customer2.print();
customer1.print();
