// Assignment 5
// Write code to convert temperture in Celsius to Fahrenheit and from Farenheit to Celsius.

import {ToFahren} from "./amna-assign5-ToFahren.js";

var ToCelsius= inFahrenheit => {
  let c = (inFahrenheit - 32) * 5 / 9;
  
console.log(`${inFahrenheit} F in Celsius is : ${c} C`);
} 

ToCelsius(98.6);

export {ToCelsius};


