// Task 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// starting from ex 15 
var invites = ["Sameer", "Aadil", "Mussawir"];
var guestwhocannotcome = invites.pop();
console.log(" ".concat(guestwhocannotcome, " cannot come to the dinner"));
var newinvite = "Mudasir";
invites.push(newinvite);
invites.forEach(function (person) {
    console.log("Dear ".concat(person, ",You are invited to dinner "));
});
//    Informing people that I have found a bigger table
for (var _i = 0, invites_1 = invites; _i < invites_1.length; _i++) {
    var invite = invites_1[_i];
    console.log("Dear ".concat(invite, " I have found a bigger table for dinner"));
}
// add one new guest at the beggining of the array
invites.unshift("Ali");
console.log(invites);
// add one new guest at the Middle of the array
var middle_array = "Qasim";
var Midddle_index = invites.length / 2;
invites.splice(Midddle_index, 0, middle_array);
console.log(invites);
// add one new guest at the Last of the array
invites.push("Arshmaan");
console.log(invites);
// add one new guest at the Middle of the array
for (var _a = 0, invites_2 = invites; _a < invites_2.length; _a++) {
    var newinvite_1 = invites_2[_a];
    console.log(" ".concat(newinvite_1, ", You are invited to the dinner"));
}
