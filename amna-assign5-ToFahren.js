// Assignment 5
// Write code to convert temperture from Farenheit into Celsius.


import {ToCelsius} from "./amna-assign5-ToCelsius.js";

let ToFahren = inCelsius => { 
  let f = (inCelsius * 9/5 ) + 32;

console.log(`${inCelsius} C in Fahrenheit is : ${f} F`);
}

ToFahren(36);

export {ToFahren};

