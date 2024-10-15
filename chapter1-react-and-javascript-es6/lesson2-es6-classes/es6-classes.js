console.log(`Lesson2 - ES6 Classes `);

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getAddress() {
    return `I live in ` + this.address;
  }
}

const test = new Person(`Hoi Dan IT`, `Ha Noi`);
console.log(`>>> Check test: `, test);
console.log(`>>> Check address: `, test.getAddress());

class Novel {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getAuthor() {
    return `Author: ` + this.author;
  }
}

let myNovel = new Novel(`Toi thay hoa vang tren co xanh`, `Nguyen Ngoc Anh`);
console.log(myNovel.title, `-`, myNovel.getAuthor());
