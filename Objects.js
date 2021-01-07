//There are six ways to create an Object in JavaScript
//Method-1
function createObject1() {
    var person1 = new Object();
    person1.name = "Sanjay Rai";
    return person1;
}
createObject1();
//Method -2
function createObject2() {
    var person2 = {};
    person2.name = "Mamta Rai";
    return person2;
}
createObject2();
function createObject3() {
    var person3 = {};
    person3['name'] = "Ranjeet Rai";
    return person3;
}
var p3 = createObject3();
alert("name :" + p3.name);
//Method-4
var person4 = { name: "Vishal Rai", age: 16 };
alert("Name : " + person4.name + " \nAge : " + person4.age);
//Method -5 : Object creation using constructor function2
function Person() {
    this.name = "Braj";
    this.age = 18;
}
//call using new Operator
var person5 = new Person();
alert("Name : " + person5.name + " \nAge : " + person5.age);
//Method -6
var Animal = {
    type: "Invertibrates",
    displayType: function () {
        alert("Type is : " + this.type);
    }

};
var Horse = Object.create(Animal);
Horse.type = "Something Else";
Horse.displayType();
