// Task 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// List of guests 
var Guests_Name = ["Mussawir", "Ali", "Sameer", "Aadil",];
console.log("Only two people can be invited to the dinner");
// // Remove guest from the list
// while(Guests_Name.length > 2){
//     const removed_guests = Guests_Name.pop()  
//     console.log(`Sorry ${removed_guests} I can't invite you to the dinner dinner` )
// }
// message to the 2 persons who are still invited
Guests_Name.forEach(function (Guests_Name) {
    console.log("".concat(Guests_Name, ", You are Still invited to the dinner"));
});
// removes the last two names from your list 
Guests_Name.pop();
Guests_Name.pop();
// final list 
console.log("final list: ", Guests_Name);
