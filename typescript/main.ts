import { greet, Calculator } from "./utils";

const person = { name: "Alice", age: 25 };
greet(person); // Output: Hello, Alice!

const calculator = new Calculator<number>();
const result = calculator.add(5, 10);
console.log(result); // Output: 15

const names: string[] = ["Alice", "Bob", "Charlie"];
const filteredNames = names.filter((name) => name.length > 4);
console.log(filteredNames); // Output: ["Alice", "Charlie"]

class Animal {
  constructor(private name: string) {}

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.move(10); // Output: Buddy moved 10m.
dog.bark();   // Output: Woof! Woof!

interface Shape {
  name: string;
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.name = "Rectangle";
  }

  name: string;

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.name); // Output: Rectangle
console.log(rectangle.area()); // Output: 50

// Tuple
const tuple: [string, number, boolean] = ["Alice", 25, true];
console.log(tuple[0]); // Output: Alice

// Enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const color: Color = Color.Red;
console.log(color); // Output: RED

// Type Assertion
const value: any = "Hello TypeScript!";
const length = (value as string).length;
console.log(length); // Output: 17

// Nullish Coalescing Operator
const name = null ?? "Anonymous";
console.log(name); // Output: Anonymous

// Optional Parameters
function greetPerson(name: string, age?: number) {
  console.log(`Hello, ${name}!`);
  if (age) {
    console.log(`You are ${age} years old.`);
  }
}

greetPerson("Alice"); // Output: Hello, Alice!
greetPerson("Bob", 30); // Output: Hello, Bob! You are 30 years old.

// Type Aliases
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 5, y: 10 };
console.log(point); // Output: { x: 5, y: 10 }
