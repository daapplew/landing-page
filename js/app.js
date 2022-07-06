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
const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];
const navBarList = document.getElementById('navbar__list');

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
sections.forEach((section,i) => {
/* anchor link  */
const anchorLink = document.createElement('a');
anchorLink.setAttribute("class",`menu__link section${i+1}`);
anchorLink.setAttribute("data-link",`section${i+1}`);
anchorLink.innerHTML = section;
navBarList.appendChild(anchorLink);

/* list */
const list = document.createElement('li');
list.appendChild(anchorLink);
navBarList.appendChild(list);

});

const sectionLinks = document.querySelectorAll(".menu__link");
sectionLinks.forEach((item) => {
    item.addEventListener("click", ()=>{
        const el = document.getElementById(item.getAttribute(`data-link`));
        el.scrollIntoView({behavior:"smooth",block:"center"})
    })

})

// navBarList.addEventListener('click', function(){
//     showSection();
// });



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


