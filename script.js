// TODO: Modify text and styles for all items in list
/* For loop,  
let domMethodEls = document.querySelectorAll(".dom-methods__item");

for (let i = 0; i < domMethodEls.length; i++) {
    let currentEl = domMethodEls[i];

    currentEl.innerText = "You've been hacked lolz";
    currentEl.style.color = "greenyellow";
    currentEl.style.backgroundColor = "black";
    currentEl.style.fontSize = "3rem";
}
*/
let domMethodEls = document.querySelectorAll(".dom-methods__item");

let lastDomMethodEl = domMethodEls[domMethodEls.length - 1];

lastDomMethodEl.innerText = "You've been hacked lolz";

lastDomMethodEl.classList.add("dom-methods__item--hacked");
/*
lastDomMethodEl.style.color = "greenyellow";
lastDomMethodEl.style.backgroundColor = "black";
lastDomMethodEl.style.fontSize = "3rem";
*/
lastDomMethodEl.classList.remove("dom-methods__item--hacked");
lastDomMethodEl.classList.toggle("dom-methods__item--hacked");


/* 
    TODO: add a list item to our list
    
    <li class="dom-methods__item">document.createElement()</li>

    1. Grab the parent element 
    2. Create the child element (document.createElement + anything else)
    3. Append child element to parent (parent.appendChild(child))
*/

const listEl = document.getElementById("dom-methods");

const itemEl = document.createElement("li");
itemEl.classList.add("dom-methods__item");
itemEl.innerText = "document.createElement()";

listEl.appendChild(itemEl);

listEl.innerHTML = "";