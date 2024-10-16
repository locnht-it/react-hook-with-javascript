console.log(`Lesson3 - Object Javascript (array)`);

// Object
let person = {
  name: `Ngo Huynh Tan Loc`,
  age: 26,
  eyeColor: `black`,
  "Dia chi": `Thu Duc City`,
};
console.log(`>>> Check var: `, person);
console.log(`>>> Check name: `, person.name);
console.log(`>>> Check dia chi: `, person["Dia chi"]);

// Array
let person2 = [`Trung Bui`, 26, `Thu Duc City`];
console.log(`>>> Check name person2: `, person2[0]);

let React = {
  language: `javascript`,
  author: `facebook`,
};
console.log(`>>> Check React: `, React);

let tutorial = {
  name: `React Tutorial`,
  author: `Ngo Huynh Tan Loc`,
  language: `javascript`,
};

console.log(
  `>>> Check React Tutorial: `,
  tutorial.name,
  tutorial["author"],
  tutorial["language"]
);
