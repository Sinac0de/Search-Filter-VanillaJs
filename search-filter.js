//  -------Variables-------- //
const searchInput = document.querySelector("#search");
let allProductsData = [];// it'll store all the products data
let filters = {
    searchItem: ""
};

//  -------Event Listeners-------- //

//load all products data when page is loaded
document.addEventListener("DOMContentLoaded", () => {

    axios.get("http://localhost:3000/items").then(res => {
        allProductsData = res.data;
        //render the products
        renderProducts(allProductsData, filters);
    }).catch(err => console.log(err));

});

//filter products with search input
searchInput.addEventListener("input", (e) => {
    filters.searchItem = e.target.value;
    renderProducts(allProductsData, filters);//render products with new searchItem value
});

//  -------functions-------- //

function renderProducts(_products, _filters) {
    const filteredProducts = _products.filter((p) => {//filter the products base on searched item
        return p.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
    });
    //todo render to DOM
}