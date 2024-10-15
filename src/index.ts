//9. Add overloaded version of the greet() method in the Person class. One version takes no arguments, and another
// version takes a message string

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

  public greet(): string

  public greet(message: string): string

  public greet(message?: string): string {
    return message
      ? `I'm ${this.name}! ${message}.`
      : `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}

class Team {
  public list: Person[]

  constructor(list: Person[]) {
    this.list = list
  }

  public addPerson (person: Person) {
    this.list.push(person)
  }

  public removePerson (personName: string) {
    this.list = this.list.filter((person) => person.name !== personName)
  }
}

const user = new Person('Achilles', 17)

console.log(user.greet())
console.log(user.greet('sdfsdfsdf'))
