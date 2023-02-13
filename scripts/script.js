
// const headingEl = document.getElementById("page-title");
const headingEl = document.querySelector(".header__title");

headingEl.innerText = "I'm glad football is done";

// How to make this 3rem and red?
headingEl.classList.add("header__title--active");

/* Remove a class */
// headingEl.classList.remove("header__title--active");


const listItemEl = document.querySelector(".nav__item");
listItemEl.innerText = "Super special item";


// Returns a NodeList (similar to an array)
const listItems = document.querySelectorAll(".nav__item");

/**
 * Loop through NodeList, update innerText depending
 * on the initial innerText
 */
for ( let i = 0; i < listItems.length; i++ ) {
    if (listItems[i].innerText === "Second Item") {
        listItems[i].innerText = "Brendon's Favourite Item";
    } else {
        listItems[i].innerText = "Brendon is not a fan of this item";
    }
}


/**
 * Steps for adding a new element to the DOM:
 *      1. Grab the parent element (.nav__list)
 *      2. Create the element -> document.createElement("li")
 *          a. Construct the full element (add classes, text, etc.)
 *      3. Append child element to parent
 *          a. parentEl.appendChild(childEl);
 */

// How can we add a 5th item to our list?
const navListEl = document.querySelector(".nav__list");

const navItemEl = document.createElement("li");
navItemEl.classList.add("nav__item", "nav__item--special");
navItemEl.innerText = "Item added via the DOM";

navListEl.appendChild(navItemEl);

/* Two ways to remove an element from the DOM */
// navListEl.removeChild(navItemEl);
// navItemEl.remove();



/* Add people to the DOM */
let people = [
    {
        name: "Rihanna",
        age: 35,
        height: 170,
        reallyCool: true
    },
    {
        name: "Bo Bichette",
        age: 24,
        height: 180,
        reallyCool: true
    }
];

/* Come up with HTML structure */
/* 
<article class="person">
    <h3>Rihanna</h3>
    <ul>
        <li>35</li>
        <li>170</li>
        <li>Really Cool</li>
    </ul>
</article>
*/

/* Use DOM methods to convert JS to HTML */
const peopleEl = document.querySelector(".people");

for (let i = 0; i < people.length; i++) {
    const personEl = document.createElement("article");
    personEl.classList.add("person");

    const nameEl = document.createElement("h3");
    nameEl.innerText = people[i].name;

    personEl.appendChild(nameEl);

    const listEl = document.createElement("ul");

    const ageEl = document.createElement("li");
    ageEl.innerText = people[i].age;
    listEl.appendChild(ageEl);

    const heightEl = document.createElement("li");
    heightEl.innerText = people[i].height;
    listEl.appendChild(heightEl);

    personEl.appendChild(listEl);

    peopleEl.appendChild(personEl);
}