function getMilk(money, costPerBottles) {
console.log("leaveHouse");
console.log("moveRight");
console.log("moveRight");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveRight");
console.log("moveRight");

console.log("buy " + calcBottles(money, costPerBottles) + " bottles of milk");

console.log("moveLeft");
console.log("moveLeft");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveLeft");
console.log("moveLeft");
console.log("enterHouse");

return calcBottles(10, 3);

}

function calcBottles(startingMoney, costPerBottles){

var numberofBottles = Math.floor(startingMoney / costPerBottles);

return numberofBottles;
}

function calcBottles(startingAmount, costPerBottles){
var change = startingAmount % costPerBottles;
return change;
}

console.log("Hello master, here is your " + getMilk(5, 1.5) + " change.");''