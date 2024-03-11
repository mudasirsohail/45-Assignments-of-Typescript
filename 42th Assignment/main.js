// task 42: Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified
var magiciannames = ["Mussawir", "Mudasir", "Micheal"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log("The Great ".concat(magician, " "));
    }
}
// let magiannns = ["Mudasir", "Mussawir", "Micheal"]
show_magicians(magiciannames);
