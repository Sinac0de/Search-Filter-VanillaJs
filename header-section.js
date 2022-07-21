const filterSection = document.querySelector(".filter-container");
const searchBar = document.querySelector(".search-container");

const searchIcon = document.getElementById("search-icon");
const filterIcon = document.getElementById("filter-icon");


/*-------------
EVENT LISTENERS
---------------*/
searchIcon.addEventListener("click", showSearchBar);
filterIcon.addEventListener("click", showFilters);

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
    //e == filterIcon
    e.target.classList.add("active-icon");
    searchIcon.classList.remove("active-icon");
}
