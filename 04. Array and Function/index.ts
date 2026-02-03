function greet(name: string = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();
greet("Alice");
greet("Bob");

const greetings = greet();

console.log(greetings);

