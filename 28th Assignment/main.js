// Task 28 : Stages of Life: Write an if-else chain that determines a person’s stage of life.
//  Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var myage = 18;
if (myage < 2) {
    console.log("you are a baby");
}
else if (myage <= 2 && myage < 4) {
    console.log("you are a toddler");
}
else if (myage <= 4 && myage < 13) {
    console.log("you are a kid");
}
else if (myage <= 13 && myage < 18) {
    console.log("you are a teenager");
}
else if (myage >= 20 && myage < 65) {
    console.log("you are an Adult");
}
else {
    console.log("You are elder");
}
