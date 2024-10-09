// 4. Create an interface Printable with a method printDetails(). Implement this interface in the Person and Student
// classes, with each class providing its own implementation of printDetails()

interface Printable {
  printDetails(): void;
}

class Person implements Printable  {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public printDetails(): void {
    console.log(`Person ${this.name}`)
  }

  public greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person implements Printable {
  public readonly studentId: number

  constructor (name: string, age: number, studentId: number) {
    super(name, age)
    this.studentId = studentId
  }

  public printDetails(): void {
    console.log(`Student ${this.studentId}`)
  }

  public greet() {
    return `${super.greet()}. My ID is: #${this.studentId}!`
  }
}

// const user = new Person('Sachinandan', 37)
// const student = new Student('Kiryadev', 37, 108)
//
// user.printDetails()
