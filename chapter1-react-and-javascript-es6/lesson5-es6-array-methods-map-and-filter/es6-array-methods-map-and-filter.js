console.log(`Lesson5 - ES6 Array Methods - Map and Filter`);

// MAP()
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
const myArray = [`apple`, `banana`, `orange`];
const myList = myArray.map((item) => `<p>${item}</p>`); // jsx
console.log(myList, myArray);

const myArray2 = [1, 2, 3, 4];
const myList2 = myArray2.map((item) => item * 2);
console.log(myList2, myArray2);

const myList3 = myArray2.map((item, index) => {
  console.log(item, index);
  return item * item;
});
console.log(myList3, myArray2);

const newArray = [];
for (let i = 0; i < myArray2.length; i++) {
  let item = myArray2[i] * 10;
  newArray.push(item);
}
console.log(`>>> Check newArray: `, newArray);

// FILTER()
// filter() method creates a new array filled with elements that pass a test provided by a function.
// filter() method does not execute the function for empty elements.
// filter() method does not change the original array.
const ages = [20, 21, 22, 23];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 21;
// }
const result = ages.filter((item) => {
  console.log(item);
  return item >= 21;
});
console.log(`>>> Check result:`, result);
