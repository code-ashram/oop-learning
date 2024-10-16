// 7. Create an abstract class Employee with abstract methods getSalary() and work(). Extend this class in Manager and Developer classes, each implementing the abstract methods differently

abstract class Employee {
  id: string
  name: string

  protected constructor(name: string) {
    this.id = crypto.randomUUID()
    this.name = name
  }

  abstract getSalary(): number

  abstract work(): string
}

class Manager extends Employee {
  public department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getSalary(): number {
    return 14_000
  }

  work(): string {
    return `${this.name} work in ${this.department} departament`
  }
}


class Developer extends Employee {
  public position: string

  constructor(name: string, position: string) {
    super(name)
    this.position = position
  }

  getSalary(): number {
    return 17_000
  }

  work(): string {
    return `${this.name} work in ${this.position} departament`
  }
}

const manager = new Manager('Anton', 'HR')
console.log(manager.getSalary(), manager.work())

const developer = new Developer('Alex', 'front-end')
console.log(developer.getSalary(), developer.work())
