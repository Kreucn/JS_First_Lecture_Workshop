// JS by Kristoffer Egholm Wendelboe & Dan Høegh
// UCN MMD 2020

// //Keyword function is used
// //Looking for the parameters in the parentheses (if there are any)
// function alertMe() {
//     alert('You are alerted!');
// }
// //Overall: don't write two functions that do the same thing
// //Get use to work with the naming convention - camelCase (first letter is called pascalCase)
// // 


// // WRITING DIRECTLY INTO ELEMENT STYLE ATTRIBUTE IS NOT THE MOST PRODUCTIVE

// function showBox() {
//     //OLD JS notation: document.getElementById('box').style = "display: block";
//     //Storing the value of that element AT THAT GIVEN TIME

//     //something that identifies our div? class or id? 
//     //same way of typing as in CSS
//     //document.querySelector('#box')
//     //when we find the element by Id we want to change a attribute
//     document.querySelector('#box').style = 'display: block';
//     //store the connection to the element! (becomes dynamic) 
// }

// function hideBox() {
//     document.querySelector('#box').style = 'display: none';
// }

// function changeColor() {
//     document.querySelector('#box').style = "background-color: #ee5253";
//     // what happens here? box dissapears since we override the style="display:block" from showBox()
//     // Lets do this differently!!! No more writing attributes into elements!
//     // as you can see it's a relly good habbit to NOT style on the elements in this way  
// }

// Let's do this the right way 
// -------------------------------------------------------------------------------
// Commment out the functions above
// Change the html to no "onclick"s

document.querySelector('#btnAlert').addEventListener('click', function() {
    alert('You are alerted!');
});

// let's make it easier to manipulate the box
const elmbox = document.querySelector('#box');

// add class "show" when button is clicked
document.querySelector('#btnBoxShow').addEventListener('click', function() {
    elmbox.classList.add('show');
//it's a method that is added to the elmbox
// classList returns the class name(s) of an element, as a DOMTokenList object
});    

// remove class "show" when button is clicked
document.querySelector('#btnBoxHide').addEventListener('click', function() {
    elmbox.classList.remove('show');
});    

// toggle class show when button is clicked
document.querySelector('#btnBoxToggle').addEventListener('click', function() {
    elmbox.classList.toggle('show');
});

// add background-color on mouse in
elmbox.addEventListener('mouseover', function() {
    elmbox.classList.add('changecolor');
});    

// remove background-color on mouse in
elmbox.addEventListener('mouseout', function() {
    elmbox.classList.remove('changecolor');
});    


/* 
optimize the mouseover and mouseout with a toggle

elmbox.addEventListener('mouseover', toggleBoxColor);
elmbox.addEventListener('mouseout', toggleBoxColor); 

// add and remove background-color on mouse in
 function toggleBoxColor() {
    elmbox.classList.toggle('changecolor');
}   
*/