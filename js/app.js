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
 * 
*/
const navBarMenu = document.getElementsByClassName('navbar__menu');
const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];// array of section items 
const sectionElements = document.querySelectorAll("section"); // list of section tags
const navBarList = document.getElementById('navbar__list'); //create variable for unorder list id

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/


/**
 * build the nav
 * for every item in the sections array create an <a>
 * set class attribute to menu__link this will add some style
 * set data-link attribute to sections so they can be 
*/
sections.forEach((section,i) => {
/* anchor link  */
const anchorLink = document.createElement('a');
anchorLink.setAttribute("class",`menu__link section${i+1}`);
anchorLink.setAttribute("data-link",`section${i+1}`);
anchorLink.innerHTML = section;
anchorLink.href = `#section${i+1}`;
navBarList.appendChild(anchorLink);

/* list */
const list = document.createElement('li');
list.setAttribute("class", "navbar__menu")
list.appendChild(anchorLink);
navBarList.appendChild(list);

});

const sectionLinks = document.querySelectorAll(".menu__link");

sectionLinks.forEach((item) => {
    item.addEventListener("click", ()=>{
        const el = document.getElementById(item.getAttribute(`data-link`));
        el.scrollIntoView({behavior:"smooth",block:"center"})
    })

});

function checkView(section) {
    let rectView = section.getBoundingClientRect();
    console.log(sectionView);
    return (rectView.top >= 0 && rectView.bottom < window.innerHeight);

};


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

document.addEventListener('scroll', changeActiveClass);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



