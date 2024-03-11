// Task 31;No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed
var userName = ["Mussawir", "Ali", "Aadil", "Sameer"];
if (userName.length === 0) {
    console.log("we need to find some users");
}
else {
    for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
        var user = userName_1[_i];
        if (user === "admin") {
            console.log("Hello admin, would you like to see status report");
        }
        else {
            console.log("Hello ".concat(user, " Thank you for logging in again"));
        }
    }
}
userName = [];
if (userName.length === 0) {
    console.log("we need to find some users");
}
