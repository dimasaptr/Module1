function greet(name: string = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();
greet("Alice");
greet("Bob");

const greetings = greet();
console.log(`===================`);

const stringArray: string[] = ["apple", "banana", "cherry"];
const unknownArray: unknown[] = ["apple", "banana", "cherry", 27]; // dihindari campur sari
const lastIndex = stringArray.length - 1;
console.log(stringArray[stringArray.length - 1]);
stringArray.push("date");
console.log(stringArray);
console.log(stringArray.length); 
