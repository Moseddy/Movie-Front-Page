// Interact with my DOM

const arrows = document.querySelectorAll(".arrow-left");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    
    const itemNumber = movieList[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= -1) {
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`
        }
        else {
            movieList[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        
    })
})

const toggleIcon = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .fa-caret-down, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .menu-list-item, .profile-text, .toggle");
console.log(items);
toggleIcon.addEventListener("click", () => {
    toggleIcon.classList.toggle("active");
    items.forEach(item => {
        item.classList.toggle("active");
    })
})

console.log(Math.floor(window.innerWidth/270))

