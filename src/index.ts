// 8. Create a Team class that takes a list of Person objects as a constructor parameter. Add methods to add and remove
// people from the team

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

const people: Person[] = [
  new Person('Kishor', 37),
  new Person('Kirill', 36),
  new Person('Achilles', 2),
  new Person('Dimas', 34),
]

const team = new Team(people)

team.addPerson(new Person('Andrei', 32))
team.removePerson('Dimas')

console.log(team)
