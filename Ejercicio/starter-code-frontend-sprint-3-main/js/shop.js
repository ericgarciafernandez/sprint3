// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
    total = 0;
    for (let i = 0; i < cart.length; i++) {
        delete cart[i].subtotalWithDiscount;
    }
    open_modal();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    document.getElementById('total_price').innerHTML = total;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let cont = 0;
    cart = [];

    for (let i = 0; i < cartList.length; i++) {
        for (let j = 0; j < cartList.length; j++) { //Busca si el objeto se repite + veces
            if (cartList[i] === cartList[j]) {
                cont++;
            }
        }
        if (cartList[i] !== undefined && cont > 0) { //Si existe añade el número de veces repetidas
            cartList[i].quantity = cont;
            cont = 0; //Restablece contador para el siguiente elemento
        }
    }

    let unicos = []; //Array para verificar que cada elemento es único
    for (let i = 0; i < cartList.length; i++) {
        if (unicos[cartList[i].id] === undefined) { //Si no existe lo añade
            cart.push(cartList[i]);
            unicos[cartList[i].id] = true;
        }
    }

    console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let nameOil = 'cooking oil';
    for (let i = 0; i < cart.length; i++) {
        cart[i].subtotal = (cart[i].price * cart[i].quantity);
        if (cart[i].name === nameOil && cart[i].quantity > 2) {
            if (cart[i].hasOwnProperty('offer')) {
                cart[i].subtotalWithDiscount = cart[i].subtotal - 10;
            }
        } else if (cart[i].type === 'grocery' && cart[i].quantity > 9) {
            if (cart[i].hasOwnProperty('offer')) {
                let partPrice = cart[i].subtotal / 3;
                cart[i].subtotalWithDiscount = partPrice * 2;
            }
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let idTable = document.getElementById('cart_list');
    idTable.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {

        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td_price = document.createElement('td');
        let td_quantity = document.createElement('td');
        let td_total = document.createElement('td');

        let nameHTML = document.createTextNode(cart[i].name);
        let priceHTML = document.createTextNode(cart[i].price);
        let qtyHTML = document.createTextNode(cart[i].quantity);
        let totalHTML = '';
        if (cart[i].hasOwnProperty('subtotalWithDiscount')) {
            totalHTML = document.createTextNode(cart[i].subtotalWithDiscount);
        } else {
            totalHTML = document.createTextNode(cart[i].subtotal);
        }

        th.appendChild(nameHTML);
        td_price.appendChild(priceHTML);
        td_quantity.appendChild(qtyHTML);
        td_total.appendChild(totalHTML);

        tr.appendChild(th);
        tr.appendChild(td_price);
        tr.appendChild(td_quantity);
        tr.appendChild(td_total);
        idTable.appendChild(tr);

    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    // Aplico estas funciones para hacer un test al añadir productos y aplicar promoción
    calculateTotal();
    generateCart();
    applyPromotionsCart();
    printCart();
}