const tvShows = [
    {
        title: "Suits",
        "number-of-episodes": 100,
        genres: ["drama", "legal"],
        numberOfSeasons: 10,
        castMembers: ["Gabriel Macht", "Patrick J. Adams", "Meghan, Duchess of Sussex"],
        year: 2011,
        rating: 8,
        imageSrc: "/assets/images/suits.jpg"
    },
    {
        title: "Game of Thrones",
        "number-of-episodes": 60,
        genres: ["fantasy", "disappointing finish"],
        numberOfSeasons: 8,
        castMembers: ["Thor Bjornsson", "Kit Harrington",  "Emilia Clarke"],
        year: 2011,
        rating: 2,
        imageSrc: "/assets/images/game-of-thrones.jpeg"
    },
    {
        title: "Teletubbies",
        "number-of-episodes": 365,
        genres: ["educational", "children"],
        numberOfSeasons: 2,
        castMembers: ["Red", "Yellow",  "Green", "Purple"],
        year: 2001,
        rating: 8.91,
        imageSrc: "/assets/images/teletubbies.jpeg"
    },
    {
        title: "Rick & Morty",
        rating: 10,
        imageSrc: "/assets/images/rick-and-morty.png"
    }
]

const tvShowsEl = document.querySelector(".tv-shows");

for (let i = 0; i < tvShows.length; i++) {
    const articleEl = createTvShowEl(tvShows[i]);
    tvShowsEl.appendChild(articleEl);
}

/*
    <article class="tv-show">
        <h2 class="tv-show__title">${tvShow.title}</h2>
        <span class="tv-show__rating">${tvShow.rating}</span>
        <img class="tv-show__cover" src="${tvShow.imageSrc}" alt="${tvShow.title} Cover" /> 
    </article>
*/
function createTvShowEl(tvShow) {
    const tvShowEl = document.createElement("article");
    tvShowEl.classList.add("tv-show");

    const titleEl = document.createElement("h2");
    titleEl.innerText = tvShow.title;
    titleEl.classList.add("tv-show__title");

    const ratingEl = document.createElement("span");
    ratingEl.innerText = tvShow.rating;
    ratingEl.classList.add("tv-show__rating");
    
    const coverEl = document.createElement("img");
    coverEl.classList.add("tv-show__cover");
    coverEl.setAttribute("alt", tvShow.title + " Cover");
    coverEl.src = tvShow.imageSrc;
    // coverEl.setAttribute("src", tvShow.imageSrc);
    
    tvShowEl.appendChild(titleEl);
    tvShowEl.appendChild(ratingEl);
    tvShowEl.appendChild(coverEl);

    return tvShowEl;
}