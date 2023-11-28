// Comparing Two JSON Values (Difference In Order):
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

if (obj1 === obj2) {
  console.log("True");
} else {
  console.log("False"); //False
}