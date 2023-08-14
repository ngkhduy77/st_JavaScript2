document.addEventListener("DOMContentLoaded", function() {
    let fruits = ["apple", "banana", "orange"];
    const fruitsList = document.querySelector(".fruitsList");

    fruits.forEach(function(fruit, index) {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitsList.appendChild(li);
    });
});

function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    let time = document.getElementById("timeInput").value;
    console.log("TIME ->", time);
    let hour = time.substring(0, 2);
    console.log(hour);
    let message;
    if (hour >= 0 && hour < 12) {
        message = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        message = "Good afternoon";
    } else {
        message = "Good evening";
    }
    let greetingElement = document.getElementById("Greeting");
    greetingElement.innerText = `${message}, ${name}`;
}

// function person (name, age){
//     this.name = name;
//     this. age = age;
// }
/**
 * tạo thêm Method greet cho Person
 * sử dụng Property prototype để inheritance class person
 */
// person.prototype.greet= function() {
//     console.log(`this name = ${this.name} and this age  = ${this.age}`)
// }
/**
 * Tạo person bằng class
 */
class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`This name = ${this.name} and this age = ${this.age}`);
    }
}
/**
 * thuc thi doi tuong
 */
const person1 = new person("p1", 23);
const person2 = new person("p2", 24);
console.log(person1.name);
console.log(person2.name);
person1.greet();
person2.greet();