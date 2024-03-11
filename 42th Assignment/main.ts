// task 42: Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified


let magiciannames: string[] = [ "Mussawir", "Mudasir", "Micheal"]
function show_magicians(magicians:string){
   for(let magician of magicians ){
      console.log(`The Great ${magician} `)
   }
} 

show_magicians(magiciannames)
