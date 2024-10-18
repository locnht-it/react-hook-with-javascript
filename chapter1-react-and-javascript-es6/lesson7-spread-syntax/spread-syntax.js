console.log(`Lesson7 - Spread Syntax (...)`);

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = [...firstArr, ...secondArr]; // [1, 2, 3, 4, 5 ,6]
console.log(`>>> Check thirdArr: `, thirdArr);

const fourthArr = [...secondArr, ...firstArr]; // [4, 5, 6, 1, 2, 3]
console.log(`>>> Check fourthArr: `, fourthArr);

let myArr = [`Eric`, `LocNHT`, `React`];
//myArr.push(`New item`); // Add new item in the end of array.
//myArr = [...myArr, `new item`];

//myArr.unshift(`new item`); // Add new item in the start of array.
myArr = [`new item`, ...myArr];
console.log(`>>> Check myArr: `, myArr);

const myVehicle = {
  brand: `Ford`,
  model: `Mustang`,
  color: `red`,
};

const updateMyVehicle = {
  type: `car`,
  year: 2024,
  color: `yellow`,
};

console.log({ ...myVehicle, ...updateMyVehicle });

// Notice the properties that did not match were combined, but the property that did match, was overwritten by the last object that was passed.

const state = {
  name: `LocNHT`,
  age: `21`,
  address: `Ho Chi Minh City`,
};

const updateState = { ...state, age: 30 };
console.log(`>>> Check updateState: `, updateState);

const arrayOne = [`a`, `b`, `c`];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne, ...arrayTwo];
console.log(`>>> Check arraysCombined: `, arraysCombined);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
