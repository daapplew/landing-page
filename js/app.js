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
 * Define Global Variables
 * array of section items
 * list of section tags
 * create variable for unorder list id
*/
const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];
const sectionElements = document.querySelectorAll("section"); 
const navBarList = document.getElementById('navbar__list'); 

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/


/**
 * build the nav
 * using a forEach method we will loop through an array and create elements, set classes, add text and append to document
 * for every item in the sections array create an <a> & <li>
 * set class attribute to menu__link this will add some style
 * set data-link attribute to designated sections 
 * set class attribute for navbar menu that will add styling 
*/
sections.forEach((section,i) => {
/* anchor link  */
const anchorLink = document.createElement('a');
anchorLink.setAttribute("class",`menu__link section${i+1}`);
anchorLink.setAttribute("data-link",`section${i+1}`);
anchorLink.innerHTML = section; // add text inside each <a>
anchorLink.href = `#section${i+1}`; //add href attribute 
navBarList.appendChild(anchorLink); //append anchor to ul

/* list */
const list = document.createElement('li');
list.setAttribute("class", "navbar__menu");
list.appendChild(anchorLink); //append anchor links to li
navBarList.appendChild(list); // append everything to ul 

});





/**
 * Scroll to section on link click
 * Because we set menu link as a class in the anchor tags we can use querySelectorAll to select each item 
 * we can assign each class item and get the data link attribute and assign that to a variable
 * so using a forEach method we can add an event listener for each click with its designated section
 * when we scroll into view make sure the behaviour is smooth and in center 
 * prevent default method to get rid of default settings on click function
*/
const sectionLinks = document.querySelectorAll(".menu__link");
sectionLinks.forEach((item) => {
    item.addEventListener("click", ()=>{
    preventDefault();
        const el = document.getElementById(item.getAttribute(`data-link`));
        el.scrollIntoView({behavior:"smooth",block:"center"})
    })
});

/**
 * function that checks the view and takes in one parameter called section 
 * the top and bottom rectangle of each section will be compared to the window height
 * this is a helper functon to change the active class 
 */

function checkView(section) {
    let rectView = section.getBoundingClientRect();
    return (rectView.top >= 0 && rectView.bottom < window.innerHeight);

};

/**
 * function for active class
 * for of loop that goes through each section tag
 * checks the view of each section tag
 * add styles
 * add and remove active class using an if statement 
 */
function changeActiveClass() {
    for (sectionElement of sectionElements) {
        if (checkView(sectionElement)) {
            //change nav background based on view
            const sectionLinkName = sectionElement.getAttribute('data-nav'); 
            for(const sectionLink of sectionLinks){
                if(sectionLinkName === sectionLink.innerHTML){
                    sectionLink.style = 'background-color: #333;';
                }
                else{
                    sectionLink.style = 'background-color: #fff;'
                }
            }
            //change section background style based on view
            if (!sectionElement.classList.contains('your-active-class')) {
                sectionElement.classList.add('your-active-class');
            }
        }
        else {
            sectionElement.classList.remove('your-active-class');
        }
    }
};

//listens for scroll to call function that checks views and changes active class
document.addEventListener('scroll', changeActiveClass);


/**
 * End Main Functions
 * Begin Events
 * 
*/





