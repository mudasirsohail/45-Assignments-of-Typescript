// Task 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//  • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var firstName = "Mudasir";
var halfName = "Mudasir Sohail";
var fullNAme = "Mudasir Sohail Soomro";
if (firstName != fullNAme) {
    console.log("Name is Equal");
}
else {
    console.log("Name is not equal");
}
;
if (firstName == halfName) {
    console.log("name is equal");
}
else {
    console.log("Name is not equal");
}
// Tests using the lower case function
// if(firstName != fullNAme5){
//         console.log("Name is Equal")
// }
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality and inequality:
var number_1 = 15;
var number_2 = 20;
if (number_1 >= 18) {
    console.log("You can play football");
}
else {
    console.log("You are not eligible");
}
// // greater than and less than
if (number_2 > 18) {
    console.log("You can play football");
}
else {
    console.log("You are not eligible");
}
// // greater than or equal to
if (number_1 >= number_2) {
    console.log("we can be friends");
}
else {
    console.log("We cannot be friends");
}
// // less than or equal to
if (number_1 < number_2) {
    console.log("You are selected");
}
else {
    console.log("Your are not selected");
}
// Tests using "and" and "or" operators
// And (&)
if (number_1 == 15 && number_2 == 20) {
    console.log("true");
}
else {
    console.log("False");
}
// // or(||)
if (number_1 == 12 || number_2 != 20) {
    console.log("true");
}
else {
    console.log("False");
}
// Test whether an item is in a array
var PAk_team = ["Babar Azam", "Shaheen", "Amir", "Rizwan"];
if (PAk_team.includes("Babar Azam")) {
    console.log("The item is in array");
}
// // Test whether an item is not in a array
if (PAk_team.includes("Mueen")) {
    console.log("The item is in array");
}
else {
    console.log("the item is not in array");
}
