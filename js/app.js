/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarMenu = document.getElementsByClassName('navbar__menu');
const ul = document.getElementById('navbar__list');

const createLi = document.createElement('li');
const createAnchor = document.createElement('a');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
ul.innerHTML = `
    <li><a href="/" class= "menu__link">section 1</a></li>; 
    //add a class or ID to each anchor using a for loop section[i]
    <li><a href="/"  class= "menu__link section2">section 2</a></li>; 
    <li><a href="/" class= "menu__link">section 3</a></li>;`;
//navBarMenu.append(navBarList);
//document.body.appendChild(navBarMenus);
// Add class 'active' to section when near top of viewport

// display the rect of section 2
const section2 = document.querySelector("#section2");
const rect = section2.getBoundingClientRect();

function showSection (){
    window.scroll(0,1320.59375);
};

function highlightSection (){
    //change the css for when a section is clicked 
};

const navBarList = document.querySelector('.navbar__list, .section2')

navBarList.addEventListener('click', function(){
    showSection();
});



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


