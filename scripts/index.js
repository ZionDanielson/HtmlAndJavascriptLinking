"use strict";

console.log("the index.js has begun executing...");


// Here I declare all of the variables that I will need
// to hold element objects from the HTML page.
// This will let me interact with item.

// greeting is a DIV tag, and I can change it's .innerHTML
const greeting = document.getElementById("greeting");

// nameTextbox is an INPTU tag of type textbox, and it
// has a value property with it's value.
const nameTextbox = document.getElementById("nameTextbox");

//pressMeButton is a button element, it will raise an
// "onclicked" event that I want it to respond to.
const pressMeButton = document.getElementById("pressMeButton")




console.log("the index.js has finished executing...");