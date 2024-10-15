console.log(`Lesson1 - ES6 Variables`);

// VAR
// If you use var outside of a function, it belongs to the global scope.
// If you use var inside of a function, it belongs to that function.
// If you use var inside a block, i.e. a for loop, the variable is still available outside of that block.
// => var has a function scope, not a block scope.
console.log(`VAR`);
var name = `Ngo Huynh Tan Loc`;
var age = 26;

function test1() {
  var x = 10;
  console.log(`>>> Check infor: `, name, age);
}

// console.log(`>>> Check x: `, x);

test1();

// LET
// let is the block scoped version of var, and is limited to the block (or expression) where it is defined.
// If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
// => let has a block scope.
console.log(`LET`);

function test2() {
  var x = 10;
  if (x === 10) {
    // do something
    let y = 5;
  }
}
// console.log(`>>> Check y: `, y);

// CONST
// const is a variable that once it has been created, its value can never change.
// => const has a block scope.
console.log(`CONST`);

const z = 15;
// z = 20; => error, const cannot change through re-assignment.
// const z = 20; => error, const cannot be re-declared.
console.log(`>>> Check z: `, z);

// When you're adding to an array or object, you're not re-assigning or re-declaring the constant. It's already declared and assigned, you're just adding to the "list" that the constant points to.

const a = {};
a.name = `LocNHT`;
console.log(`>>> Check a: `, a);

const b = [];
b.push(`Foo`);
console.log(`>>> Check b: `, b);
