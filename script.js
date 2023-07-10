console.log("Now we can use the DOM to output HTML!");

const titleEl = document.querySelector(".header__page-title");

titleEl.innerText = "Best lecture this week";    

const listItemEls = document.querySelectorAll("li");

/*
for (let i = 0; i < listItemEls.length; i++) {
    const listItemEl = listItemEls[i];
    listItemEl.innerText = "You've been hacked lol";
}
*/

const listItemEl = listItemEls[listItemEls.length - 1];
listItemEl.innerText = "You've been hacked lol";
listItemEl.classList.add("dom-methods__item--hacked")
listItemEl.classList.remove("dom-methods__item--hacked");
listItemEl.classList.toggle("dom-methods__item--hacked");


/* Add a list item : lorem ipsum  */
/* 
    <li class="dom-methods__item">Lorem Ipsum</li>
*/
/*
1. grab the parent element : ulEl = document.querySelector(".dom-methods");
2. create the LI element (child), add text, add class
    let liEl = document.createElement("li")
    liEl.innerText = "Lorem Ipsum";
    liEl.classList.add("dom-methods__item")
3. append child to parent :
    ulEl.appendChild(liEl);
*/

const domMethodsEl = document.querySelector(".dom-methods");

const newMethodEl = document.createElement("li");
newMethodEl.innerText = "Lorem Ipsum";
newMethodEl.classList.add("dom-methods__item");

domMethodsEl.appendChild(newMethodEl);


// const sports = null / undefined / 0;
// falsy values = "", undefined, null, NaN, false, 0, -0

// if ( sports ) {
//     alert("hey");
// }


/**
 * 3 options for removing HTML elements:
 *      1. clear innerHTML
 *      2. reverse for loop with removeChild
 *      3. while loop with firstChild, removeChild, lastChild
 */

/* Option 1: clearing innerHTML */
// domMethodsEl.innerHTML = "";

/* Option 2: reverse for loop with removeChild */
const itemsEl = document.querySelectorAll(".dom-methods__item");
for (let i = itemsEl.length - 1; i >= 0; i--) {
    domMethodsEl.removeChild(itemsEl[i])
}

/* Option 3: while loop with firstChild / removeChild / lastChild
while (domMethodsEl.firstChild) {
    domMethodsEl.removeChild(domMethodsEl.lastChild);
}
*/