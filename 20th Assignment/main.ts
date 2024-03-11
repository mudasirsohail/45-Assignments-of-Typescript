// Task 20: Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

const mountains:string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
const Rivers:string[] = ["Nile River", "Amazon River", "Yangtze River", "Mississippi River", "Ob River"];
const countries: string[] = ["China", "India", "United States", "Indonesia", "Brazil"];
const cities: string[] = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"];
const languages: string[] = ["Mandarin Chinese", "Spanish", "English", "Hindi", "Arabic"];

const allItems: string[] = [...mountains ,...Rivers ,...countries ,...cities ,...languages ]
console.log(allItems)
