
/**
 * OBJECTS
 */
var person ={
    name : 'Duy',
    age : 27,
    gender : 'male',
    hobbies : ['reading', 'swim', 'travel'],
    sayHello: function() {
        return "hello, my name is " + this.name;
    },
};
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.sayHello());