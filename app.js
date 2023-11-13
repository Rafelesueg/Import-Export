let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let resetShopping = document.querySelector('.resetShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
resetShopping.addEventListener('click', ()=>{
    body.classList.add('active');
    total.innerText = 0;
    listCards = [];
    reloadCard();
})

let products = [
    { id: 1, name: 'Rame', price: 5, group: 'metalli' },
    { id: 2, name: 'Ferro', price: 5, group: 'metalli' },
    { id: 3, name: 'Stagno', price: 5, group: 'metalli' },
    { id: 4, name: 'Pietra', price: 5, group: 'metalli' },
    { id: 5, name: 'Sabbia', price: 5, group: 'metalli' },
    { id: 6, name: 'Grafite', price: 5, group: 'metalli' },
    { id: 7, name: 'Radio', price: 5, group: 'altro' },
    { id: 8, name: 'AudioCassetta', price: 5, group: 'altro' },
    { id: 9, name: 'Polaroid', price: 5, group: 'altro' },
    { id: 10, name: 'Cercapersone', price: 70, group: 'altro' },
    { id: 11, name: 'Walkman', price: 120, group: 'metaldetector' },
    { id: 12, name: 'Chiave Inglese', price: 5, group: 'metaldetector' },
    { id: 13, name: 'Bullone', price: 5, group: 'metaldetector' },
    { id: 14, name: 'Accendino', price: 2, group: 'metaldetector' },
    { id: 15, name: 'Annaffiatoio', price: 4, group: 'altro' },
    { id: 16, name: 'Cassetta', price: 3, group: 'altro' },
    { id: 17, name: 'Batteria', price: 5, group: 'altro' },
    { id: 18, name: 'Benzina ($1 al litro)', price: 5, group: 'altro' },
    { id: 19, name: 'Bullone', price: 4, group: 'altro' },
    { id: 20, name: 'Cacciavite', price: 6, group: 'altro' },
    { id: 21, name: 'Camera', price: 40, group: 'altro' },
    { id: 22, name: 'Cartella', price: 1, group: 'altro' },
    { id: 23, name: 'Cartine', price: 0.5, group: 'altro' },
    { id: 24, name: 'Cera', price: 2, group: 'altro' },
    { id: 25, name: 'Chiavi-Manette', price: 10, group: 'altro' },
    { id: 26, name: 'Fascetta', price: 5, group: 'altro' },
    { id: 27, name: 'Foglio', price: 0.10, group: 'altro' },
    { id: 28, name: 'Forbici', price: 2, group: 'altro' },
    { id: 29, name: 'Gettone', price: 0.10, group: 'altro' },
    { id: 30, name: 'Grimaldelli auto($1-$3)', price: 1, group: 'altro' },
    { id: 31, name: 'Grimaldello comune($1-$3)', price: 1, group: 'altro' },
    { id: 32, name: 'Manette', price: 25, group: 'altro' },
    { id: 33, name: 'Metal Detector', price: 755, group: 'altro' },
    { id: 34, name: 'Penna', price: 1, group: 'altro' },
    { id: 35, name: 'Portachiavi', price: 1, group: 'altro' },
    { id: 36, name: 'Portafoglio', price: 20, group: 'altro' },
    { id: 37, name: 'Radio', price: 120, group: 'altro' },
    { id: 38, name: 'Rottami', price: 1, group: 'altro' },
    { id: 39, name: 'Sacco', price: 3, group: 'altro' },
    { id: 40, name: 'Spellacavi', price: 35, group: 'altro' },
    { id: 41, name: 'Stetoscopio', price: 30, group: 'altro' },
    { id: 42, name: 'Supporto Tunnel', price: 60, group: 'altro' },
    { id: 43, name: 'Tappo', price: 2.5, group: 'altro' },
    { id: 44, name: 'TNI', price: 500, group: 'altro' },
    { id: 45, name: 'Torcia', price: 120, group: 'altro' },
    { id: 46, name: 'Spugna', price: 5, group: 'altro' },
    { id: 47, name: 'USB', price: 100, group: 'altro' }
];

let listCards  = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.setAttribute('data-group', value.group);
        newDiv.innerHTML = `
            <div class="title">${value.name}</div>
            <span>$</span>
            <input type="number" class="priceInput" id="priceInput-${key}" placeholder="" value="${value.price}">
            <button onclick="addToCard(${key})">Aggiungi</button>`;
        list.appendChild(newDiv);
    });
    filterByGroup();
}





initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        listCards[key].originalPrice = parseFloat(document.getElementById(`priceInput-${key}`).value);
    }
    reloadCard();
}

function filterByGroup() {
    let groupDropdown = document.getElementById('groupDropdown');
    let selectedGroup = groupDropdown.value;

    Array.from(list.children).forEach((item) => {
        item.style.display = 'block';
    });

    if (selectedGroup !== 'all') {
        Array.from(list.children).forEach((item) => {
            let itemGroup = item.getAttribute('data-group').toLowerCase();

            if (itemGroup !== selectedGroup) {
                item.style.display = 'none';
            }
        });
    }
    reloadCard();
}





function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.quantity * value.originalPrice;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.name}</div>
                <div>$${value.originalPrice.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <input type="number" class="quantityInput" id="quantityInput-${key}" value="${value.quantity}">
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = "$" + totalPrice.toLocaleString();
    quantity.innerText = count;

    let quantityInputs = document.querySelectorAll('.quantityInput');
    quantityInputs.forEach((input) => {
        input.addEventListener('change', (event) => {
            let key = parseInt(event.target.id.split('-')[1]);
            let newQuantity = parseInt(event.target.value);
            changeQuantity(key, newQuantity);
        });
    });
}



function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * parseFloat(listCards[key].originalPrice);
    }
    reloadCard();
}
