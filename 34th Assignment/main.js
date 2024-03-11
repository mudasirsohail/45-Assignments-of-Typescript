// Task 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var pizzatypes = ["Margherita", "Pepperoni", "Vegetarian"];
console.log("names of the pizza \n");
for (var _i = 0, pizzatypes_1 = pizzatypes; _i < pizzatypes_1.length; _i++) {
    var pizza = pizzatypes_1[_i];
    console.log(pizza);
}
console.log("\n sentence about the pizza:");
for (var _a = 0, pizzatypes_2 = pizzatypes; _a < pizzatypes_2.length; _a++) {
    var pizza = pizzatypes_2[_a];
    console.log("i like  ".concat(pizza, " pizza  "));
}
console.log("\n I really love pizza!");
