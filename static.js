class Book {
  static test = "value1";

  static hello() {  // static method
    return "Hello from static method!!";
  }
  static helloAnother() {  // static method
      return `${this.hello()} from another static method`;
  }

  static{
      console.log("inside static blocks");
      console.log(this.test);
  }
  constructor(name) {
      this.bookname = name;
      console.log(this.test);
      //console.log(this.constructor.test);
      console.log(Book.test);
      
    }
}
class Storybooks extends Book {
  static test2 = "value2";

  static hello2() {  // static method
    return "Hello from static method in child Class!!";
  }
      static {
      console.log(super.test);
    }
}


mybook = new Book("Story");

// console.log(Book.hello());
// console.log(Book.helloAnother());
// console.log(Book.test);
// console.log(mybook.bookname);
// console.log(mybook.hello);
// console.log(mybook.test);

console.log(Storybooks.test)


myNumber = new Number();

console.log(Number.MAX_VALUE)
console.log(myNumber.MAX_VALUE)
//myNumber.MAX_VALUE