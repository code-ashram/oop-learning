// 10. Create a generic class Storage<T> that can store and retrieve items of any type. Use this class to store string,
// number and Person objects

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

  public set userAge(value: number) {
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

class StorageBox<T> {
  public storage: T[]
  private validator: (value: unknown) => boolean

  constructor(validator: (value: unknown) => boolean) {
    this.validator = validator
    this.storage = []
  }

  public addContent(value: T): void {
    if (!this.validator(value)) {
      // throw new Error('Invalid item type')
      console.log('Error!')
      return
    }

    this.storage.push(value)
  }

  public getContent(index: number): T {
    return this.storage[index]
  }
}

const userValidator = (value: unknown): value is Person => value instanceof Person
const numberValidator = (value: unknown): value is number => typeof value === 'number'
const stringValidator = (value: unknown): value is string => typeof value === 'string'

const user = new Person('Kishor', 37)
const user2 = new Person('Kiryadev', 35)

const strStorage = new StorageBox<string>(stringValidator)
const numStorage = new StorageBox<number>(numberValidator)
const personStorage = new StorageBox<Person>(userValidator)

strStorage.addContent('some string')
numStorage.addContent(2)
numStorage.addContent(34)
personStorage.addContent(user)

console.log(strStorage.storage)
console.log(numStorage.storage)
console.log(personStorage.storage)
