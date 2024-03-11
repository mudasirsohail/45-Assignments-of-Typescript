// task 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.

function make_shirt(size:string = "large", message:string = "I love Typescript"){
   console.log(`You ordered a ${size} Shirt that says ${message}`)
}

make_shirt()
make_shirt("medium")
make_shirt("Small")
