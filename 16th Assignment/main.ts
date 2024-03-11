// Task 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// starting from ex 15 
let invites = ["Sameer", "Aadil", "Mussawir"]
const guestwhocannotcome = invites.pop()
console.log(` ${guestwhocannotcome} cannot come to the dinner`)
const newinvite = "Mudasir"
invites.push (newinvite)
invites.forEach((person: string) => {
   console.log(`Dear ${person},You are invited to dinner `)})

// Informing people that I have found a bigger table
for(let invite of invites){
console.log(`Dear ${invite} I have found a bigger table for dinner`)}

// add one new guest at the beggining of the array
invites.unshift("Ali")
console.log(invites)

// add one new guest at the Middle of the array
let middle_array:string = "Qasim"
let Midddle_index = invites.length/2
invites.splice(Midddle_index,0,middle_array)
console.log(invites)

// add one new guest at the Last of the array
invites.push("Arshmaan")
console.log(invites)

// add one new guest at the Middle of the array
for(let newinvite of invites){
   console.log(` ${newinvite}, You are invited to the dinner`)
}


