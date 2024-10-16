console.log(`Lesson4 - ES6 Arrow Functions`);

// function test() {
//   console.log(`>>> test`);
// }

// test = () => {
//   console.log(`>>> test`);
// };

test = () => console.log(">>> test");

test();

hello = (value, value2) => `Hello World! ` + value + value2;

console.log(hello(`Loc`, `Nam`));

const hello2 = () => `Hello World!`;
console.log(`>>> Check hello2(): `, hello2());
const hello3 = () => {
  return `Hello World!`;
};

console.log(`>>> Check hello3(): `, hello3());
