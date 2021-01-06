//named function
function addNum(a, b) {
    console.log("named function addNum is called...");
    return a + b;
}
console.log("Sum = " + addNum(12, 13));
//Anonymous Function
var anon = function (a, b) {
    console.log("anonymous function addNum is called...");
    return a + b;
}
anon(2, 5);
setTimeout(function () {
    console.log("This message is displayed after 5 seconds");
}, 5000);
//constructors
var cons = new Function("a", "b", "console.log('inside constructor function'); return a+b;");
console.log(cons(12, 23));
//self invoking function
(function (a, b) {
    console.log("inside self invoking function");
    return a + b;
})(56, 89);
