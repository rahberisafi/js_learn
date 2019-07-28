let car = {
  make: 'bmw',
  model: '22626',
  year: 2010,
  getPrice: function(){
    // perform some calc
    return 5000;
  },
  printDescription: function(){
    console.log(this.make + ' ' + this.model);
  }
}

car.printDescription();
console.log(car.year);

// console.log(car['year']);
// console.log(1);

// let anotherCar = {};
// anotherCar.whatever = 'bob';
// console.log(anotherCar.whatever);

// var a = {
//   myProperty: { b: 'hi' }
// };
//
// console.log(a.myProperty.b);

var c = {
  myProperty: [
  { d: 'this' },
  { e: 'car' },
  { f: 'get' },
  { g: 'crazy' }
  ]
};
