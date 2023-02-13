
// const headingEl = document.getElementById("page-title");
const headingEl = document.querySelector(".header__title");

headingEl.innerText = "I'm glad football is done";



const listItemEl = document.querySelector(".nav__item");
listItemEl.innerText = "Super special item";



// How can we modify the innerText of all 4 nav items?

// Returns a NodeList (similar to an array)
const listItems = document.querySelectorAll(".nav__item");

// first one? 0
// when does it end? when it reaches length of the array
// how many does it go up each time?
for ( let i = 0; i < listItems.length; i++ ) {
    if (listItems[i].innerText === "Second Item") {
        listItems[i].innerText = "Brendon's Favourite Item";
    } else {
        listItems[i].innerText = "Brendon is not a fan of this item";
    }
}








/*
let person = {
    name: "Rhianna",
    age: 35,
    height: 170,
    reallyCool: true
}

person.age = 30;
*/