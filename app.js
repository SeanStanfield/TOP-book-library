let user = new Object();
user.name = "Sean";
user.age = 19;
user["has girlfriend"] = true;

let gfname = "zoe";
user[gfname] = true;

let fruit = "apple";
let bag = {
  [fruit]: 5,
};

function makeUser(name, age) {
  return {
    name: name,
    age, //shorthand for the above
  };
}

let newuser = makeUser("Sean", 19);
console.log(newuser);

console.log(bag.apple);

//can use variable names as keys if using square bracket notation.

console.log(user);

//can use the "in" operator to check if a key exists
let searchKey = "name";
console.log(searchKey in user);

salaries = {
  john: 100,
  ann: 160,
  pete: 130,
};

salariesA = {};

let sum = 0;

for (let prop in salariesA) {
  sum += salaries[prop];
  console.log(sum);
}

myConstructor = function () {
  this.a = "A";
  this.b = "B";
}; //This is my constuctor funtion for
//creating new instances

myConstructor.prototype.z = "Z";
//to add properties that I can passdown the chain
//You must add the properties to the prototype
//NOT the original constructor function

let myInstance = new myConstructor();
//creating a new instance of myConstructor
// console.log(myInstance.z);
//This is reachable through the prototype not the original

myInstance.innerFunc = function (inner) {
  myInstance.b = "New B";
  this.innerProp = inner + " is a new property";
  // console.log(this.innerProp + " " + this.a + " " + this.b);
};
myInstance.innerFunc("INNER");
//Added a new method to the instance of myConstructor
//this new function has access to all the properties up the chain such as this.a
//properties in the lowest point on the chain will always be called.

let human = {
  eyes: 2,
  limbs: 4,
  language: "english",
};

let japan = {
  __proto__: human,
  language: "japanese",
};

// console.log(japan.eyes, japan.__proto__.language);

function house() {
  this.hasStairs = true;
}

house.prototype.hasGarden = function () {
  if (this.hasAGarden) {
    return true;
  } else return false;
};

function apartment() {
  (this.hasKitchen = true), (this.hasStairs = false), (this.hasAGarden = true);
}

apartment.prototype = Object.create(house.prototype);

let southView = new apartment();
// console.log(southView.hasGarden());
