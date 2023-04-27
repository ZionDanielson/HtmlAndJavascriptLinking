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

// pressMeButton is a button element, it will raise an
// "onclicked" event that I want it to respond to.
const pressMeButton = document.getElementById("pressMeButton")


function init(){
    console.log ("hello from inside the init function!")
    //code inside the init here will run
    // when the page is finished initiializing.

    // it does so because of the window.onload line below...
    
    onPressMeButtonClicked.onclick = onPressMeButtononClicked;


    // This line of code will wire up the init function to exp
    //when the page is done loading
    window.onload = init;

    function onPressMeButtonClicked(){
        // code inside this function should execute when the button is clicked
        console.log("hello from inside the onPressMeButtonClicked() function!")
        
        let username = nameTextbox.value;


        greeting.innerHTML = `Hello to ${username} from inside the onPressMeButtonClicked`

    }
}


console.log("the index.js has finished executing...");