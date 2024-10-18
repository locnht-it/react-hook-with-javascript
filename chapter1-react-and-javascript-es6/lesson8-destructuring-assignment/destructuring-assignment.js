console.log(`Lesson8 - Destructuring Assignment`);

// The old way:
// const person = { name: `Eric`, age: 26, eyeColor: `black`, like: `girl` };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26

// With destructuring:
const person = { name: `LocNHT`, age: 21, eyeColor: `black`, like: `girl` };
const { name, age } = person;
// const age = person.age; const name = person.name

console.log(name); //LocNHT
console.log(age); //21

const city = [`ha noi`, `da nang`, "sai gon", `ca mau`];
// old way
// const hanoi = city[0];
// const danang = city[1];
// const hcm = city[2];
//With destructuring:
const [x, y, , z] = city;
console.log(x, y, z);

// When destructuring arrays, the order that variables are declared is important.

const react = [`facebook`, `all-in-one`, `javascript`];
const [, , tech] = react;
console.log(`>>> Check tech: `, tech);

const dev = {
  salary: 2000,
  tool: `laptop`,
  like: `bugs`,
};
//const { like } = dev;
const { like: eric } = dev;
console.log(`>>> Check bugs: `, eric);
