// Task 43:Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log("The Great ".concat(magician, " "));
    }
}
var newarray = ["Mudasir", "Mussawir", "Micheal"];
for (var _i = 0, newarray_1 = newarray; _i < newarray_1.length; _i++) {
    var array = newarray_1[_i];
    console.log(array);
}
show_magicians(newarray);
