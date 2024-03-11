// Task 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
var invitation = ["Mussawir", "Aadil", "Sameer"];
invitation.forEach(function (person) {
    console.log(" I would like to invite you Mr ".concat(person, " for the dinner."));
});
