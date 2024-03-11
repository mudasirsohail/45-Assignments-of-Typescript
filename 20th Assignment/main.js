// Task 20: Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
var Rivers = ["Nile River", "Amazon River", "Yangtze River", "Mississippi River", "Ob River"];
var countries = ["China", "India", "United States", "Indonesia", "Brazil"];
var cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"];
var languages = ["Mandarin Chinese", "Spanish", "English", "Hindi", "Arabic"];
var allItems = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], mountains, true), Rivers, true), countries, true), cities, true), languages, true);
console.log(allItems);
