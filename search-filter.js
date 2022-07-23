//  -------Variables-------- //
const searchInput = document.querySelector("#search");
let allProductsData = [];// it'll store all the products data
let filters = {
    searchItem: ""
};
const productsDOM = document.querySelector(".products");
const filterBtns = document.querySelectorAll(".filter-btn");//all the filter btns
const form = document.querySelector("form");

//  -------Event Listeners-------- //

//load all products data when page is loaded
document.addEventListener("DOMContentLoaded", () => {

    axios.get("https://api.jsonbin.io/v3/b/62dc6eae8ebcdb75883de851").then(res => {
        allProductsData = res.data.record.items;
        console.log(res.data.record.items);
        //render the products
        renderProducts(allProductsData, filters);
    }).catch(err => console.log(err));

});

//filter products with search input
searchInput.addEventListener("input", (e) => {
    filters.searchItem = e.target.value;
    renderProducts(allProductsData, filters);//render products with new searchItem value
});

//prevent reloading page when hitting enter in search box
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        const filter = e.target.dataset.filter;
        filters.searchItem = filter;//set this filter value to the searchItem property
        renderProducts(allProductsData, filters);//render products with new filters
    });
});


//  -------functions-------- //

function renderProducts(_products, _filters) {
    const filteredProducts = _products.filter((p) => {//filter the products base on searched item
        return p.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
    });
    productsDOM.innerHTML = "";//empty the previous .products div content 
    filteredProducts.forEach((item) => {
        //create a div
        const productDiv = document.createElement("div");
        //content of the div
        productDiv.innerHTML = `
        <div class="img-container">
            <img src="${item.image}" alt="${item.alt}">
            <div class="rate-badge">
                <i class="fa-regular fa-star"></i>
                <p>${item.rate}</p>
            </div>
        </div>
        <div class="product-desc">
            <p class="product-title">${item.title}</p>
            <p class="product-price">$${item.price}</p>
        </div>`;
        //add product class to the created div
        productDiv.classList.add("product");
        //append product to .products
        productsDOM.appendChild(productDiv);
    });
}