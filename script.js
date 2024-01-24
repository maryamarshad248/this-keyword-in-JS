'use strict';

// this keyword in global scope is just a window object:
console.log(this);

// for a regular function the this keyword will be undefined in strict mode:

const calcAge = function (birthyear) {
  console.log(2024 - birthyear);
  console.log(this);
};
calcAge(1991);

// this keyword in an arrow function is a window object because it shows
// lexical scoping which means that it uses this keyword of its parent
// function or parent scope

const calcAgeNew = birthyear => {
  console.log(2024 - birthyear);
  console.log(this);
};
calcAgeNew(1996);

// inside a method the this keyword will be the object that is calling the method

const Maryam = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
Maryam.calcAge();

// borrowing method (borrow the method from one object to the other)

const Ayesha = {
  year: 2011,
};
// this keyword always point to which iscalling the method
Ayesha.calcAge = Maryam.calcAge;
Ayesha.calcAge();

// this keyword will be undefined because it is a regular function
//because it is not attatch to an object and there is no owner of f function
const f = Maryam.calcAge;
f();
