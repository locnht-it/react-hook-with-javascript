console.log(`Lesson6 - Template Literals (Template Strings)`);

const s1 = `Hello World`;

const s2 = "Hello World";

const s3 = "Hello World";

console.log(s1, " + ", s2, " + ", s3);

console.log(`String text line 1 \nstring text line 2`);

console.log(`String text line 1
string text line 2`);

let a = 5;
let b = 10;
console.log("Fifteen is " + (a + b) + " and \n not " + (2 * a + b) + ".");
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

const base_url = "localhost:8080";
const api = "get-user";
const fetch_page = 2;

console.log(`//${base_url}/${api}?page=${fetch_page}`);
