
// Task 45: Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// According to task 45:

type car = {
    manufacture: "Toyota",
    model:"Corolla",
    [key:string]: any
}
function my_cars(manufacture:string, model:string, optional: Record<string, any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const newcar: car = my_cars ("Toyata", "Corolla", {color:"Blue", Year:2010})
console.log(newcar)

// In simple Method:

let car = {
    manufacture: "Toyota",
    model: "Corolla",
    Color:"Blue",
    Year: 2010
}
console.log(car)

