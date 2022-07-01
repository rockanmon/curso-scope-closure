var a; //declarando
var b = 'b'; //declaranmos y asignamos
b = 'bb'; //reasignación
var a = 'aa;' //redeclaración

// Global scope

var fruit = 'apple'; //Global
console.log(fruit); 


function bestFruit() {
    console.log(fruit);
}

bestFruit()

function countries() {
    country = 'Colombia'; //Global
    console.log(country);
}

countries();
console.log(country);
