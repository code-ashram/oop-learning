// 5. Add a static property totalPeople to the Person class to track how many Person objects have been created. Add a
// static method getTotalPeople() to return this value

interface Printable {
  printDetails(): void;
}

class Person implements Printable  {
  public name: string;
  protected age: number;
  private static totalPeople = 0

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    Person.totalPeople++
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

const testVariable = new Person('Kishor', 37)
