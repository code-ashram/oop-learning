// 6. Add a getter and setter for the age property in the Person class, with validation in the setter to ensure the age
// is non-negative

interface Printable {
  printDetails(): void;
}

class Person implements Printable {
  public name: string;
  private age: number;
  private static totalPeople = 0

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    Person.totalPeople++
  }

  public get userAge(): number {
    return this.age;
  }

  public set setUserAge(value: number) {
    if (value >= 0) {
      this.age = value;
    } else {
      console.log("Age cannot be negative.");
    }
  }

  public static getTotalPeople() {
    return Person.totalPeople
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

  constructor(name: string, age: number, studentId: number) {
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

const user = new Person('Sachinandan', 37)
user.setUserAge = -9
console.log(user.userAge)
