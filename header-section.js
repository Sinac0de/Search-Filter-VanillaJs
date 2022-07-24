const filterSection = document.querySelector(".filter-container");
const searchBar = document.querySelector(".search-container");
const searchIcon = document.getElementById("search-icon");
const filterIcon = document.getElementById("filter-icon");
const filterButtons = document.querySelectorAll(".filter-btn");
const activeFilter = document.querySelector(".active-filter");
const searchBox = document.querySelector(".search-bar");

/*-------------
EVENT LISTENERS
---------------*/
searchIcon.addEventListener("click", showSearchBar);

filterIcon.addEventListener("click", showFilters);

filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const activeFilter = document.querySelector(".active-filter");
        activeFilter.classList.remove("active-filter");
        e.target.classList.add("active-filter");
    });
})
/*-------------
    FUNCTIONS
---------------*/

function showSearchBar(e) {
    searchBar.style.display = "block";
    filterSection.style.display = "none";
    //e == searchIcon
    e.target.classList.add("active-icon");
    filterIcon.classList.remove("active-icon");
}

function showFilters(e) {
    filterSection.style.display = "grid";
    searchBar.style.display = "none";
    searchInput.value = "";
    //e == filterIcon
    e.target.classList.add("active-icon");
    searchIcon.classList.remove("active-icon");
}
