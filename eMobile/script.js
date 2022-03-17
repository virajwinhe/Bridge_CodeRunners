
const data = {
    "products": [
        { "image": "1.png", "name": "Samsung Galaxy A71", "Price": "$390", "class": "samsung mobile"},
        { "image": "2.jpeg", "name": "Apple iphone 12", "Price": "$50", "class": "apple mobile"},
        { "image": "3.jpg", "name": "Samsung Galaxy M51", "Price": "$344", "class": "samsung mobile"},
        { "image": "4.jpg", "name": "Samsung Galaxy M31", "Price": "$290", "class": "samsung mobile"},
        { "image": "5.jpg", "name": "Samsung Galaxy S20 Ultra", "Price": "$1399", "class": "samsung mobile"},
        { "image": "6.jpeg", "name": "Apple iPhone 11", "Price": "$749", "class": "apple mobile"},
        { "image": "headphones.png", "name": "Apple Beats Studio3 ", "Price": "$200", "class": "apple"},
        { "image": "s20cover.jpg", "name": "Samsung Galaxy S20 Cover", "Price": "$56", "class": "samsung"},
        { "image": "wireless.png", "name": "BeatsX sports earphones", "Price": "$100", "class": "apple"},
        { "image": "wirelessduocharge.jpeg", "name": "Wireless trio Charge", "Price": "$219", "class": "apple"},
        { "image": "travelcharge.jpg", "name": "Portable charger", "Price": "$30", "class": "apple"},
        { "image": "airpods.png", "name": "Apple Airpods", "Price": "$299", "class": "apple"}
    ]
};

var products = data.products;
//console.log(products);

function showAll() {
    document.querySelectorAll('.card').forEach(function (el) {
        el.style.display = 'block';
    });
}

function hideAll() {
    document.querySelectorAll('.card').forEach(function (el) {
        el.style.display = 'none';
    });
}

function show(className) {
    hideAll();
    document.querySelectorAll(className).forEach(function (el) {
        el.style.display = 'block';
    });
}

function RenderProducts() {
    for (var i = 0; i < products.length; i++) {
        var cards = document.getElementById("cards");
        var card = document.createElement("div");
        card.className = "card " + products[i].class;
        card.Id = "card_" + i;
        card.innerHTML = '' +
            '<div id = "image">' +
            '<img src = "' + products[i].image + '" alt = "image">' +
            '</div>' +
            '<div id = "name">' +
            '<H4> ' + products[i].name + '</h4>' +
            '</div>' +
            '<div id = "price">' +
            '<H4> ' + products[i].Price + '</h4>' +
            '</div>' +
            '<div id = "Button">' +
            '<p><button onclick = "ADDTOCART(' + i + ')">Add to cart</button></p>' +
            '</div>';
        cards.append(card);
    }
}

window.onload = function () {
    RenderProducts();
}

var total = 0;

function ADDTOCART(element) {
    var item = products[element];
    var cart = document.querySelector('.right-col #cart');
    var cart_item = document.createElement('div');
    total += parseFloat((item.Price).replace("$", ""));
    cart_item.innerHTML = '' +
        '<h4>' + item.name + '</h4>' + '<h4>' + item.Price + '</h4>' +
        '<button onclick="clearItem(this)">Clear Item</button>' +'<p> Total price = ' + '$' + total + '</p>';
    cart.append(cart_item);

}

function clearCart() {
    var cart = document.querySelector('.right-col #cart');
    cart.innerHTML = 'Cart is empty';
}

function clearItem (item) {
    var this_item = item.parentElement;
    this_item.remove();
}

