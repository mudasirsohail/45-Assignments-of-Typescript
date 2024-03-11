// task 6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white space 
// Person's name with various whitespace characters
var person_Name = " \t Mudasir \n Sohail";
// Print the name with whitespace
console.log("Name with whitespace: ", person_Name);
// Strip the whitespace using trim() method
var strippe_NAme = person_Name.trim();
// Print the stripped name
console.log("Name Without white space: ", strippe_NAme);
