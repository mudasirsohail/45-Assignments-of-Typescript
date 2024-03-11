// TASK 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

function order_sandwiches(...items:string[] ){
        console.log("Ordered Sandwich :")
    for(let i = 1; i <= items.length; i++){
        console.log(`- ${items[i]}`)
    }
    
}
console.log("Enjoy your sandwich")
order_sandwiches("Tomato", "lattice", "Sauce")
order_sandwiches("Cheese", "Chicken", "Beef")
order_sandwiches("Fish", "Chilli", "Yogurt")
