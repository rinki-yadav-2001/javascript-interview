class Animal {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  details() {
    console.log(`I have a pet which is ${this.breed} and ${this.color}.`);
  }
}

const animal = new Animal("German", "brown");
animal.details(); // Call the method without console.log()

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(breed, color, age) {
    super(breed, color); // Call the parent class constructor using super()
    this.age = age;
  }

  wagTail() {
    console.log(`${this.breed} dogggy wags its tail happily.`);
  }
}

const dog1 = new Dog("american", " golden", 2);
console.log(dog1);
dog1.wagTail();
