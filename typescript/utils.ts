export interface Person {
    name: string;
    age: number;
  }
  
  export function greet(person: Person) {
    console.log(`Hello, ${person.name}!`);
  }
  
  export class Calculator<T extends number | string> {
    add(a: T, b: T): T {
      if (typeof a === "number" && typeof b === "number") {
        return a + b as T;
      }
      return `${a}${b}` as T;
    }
  }