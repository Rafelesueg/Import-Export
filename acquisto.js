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
    { id: 1, name: 'Rame', price: 2.5, group: 'metalli' },
    { id: 2, name: 'Ferro', price: 2.5, group: 'metalli' },
    { id: 3, name: 'Stagno', price: 2.5, group: 'metalli' },
    { id: 4, name: 'Roccia', price: 3, group: 'metalli' },
    { id: 5, name: 'Sabbia', price: 3, group: 'metalli' },
    { id: 6, name: 'Grafite', price: 2.5, group: 'metalli' },
    { id: 7, name: 'Radio', price: 60, group: 'altro' },
    { id: 8, name: 'AudioCassetta', price: 1.5, group: 'altro' },
    { id: 9, name: 'Polaroid', price: 5, group: 'altro' },
    { id: 10, name: 'Cercapersone', price: 35, group: 'altro' },
    { id: 11, name: 'Walkman', price: 60, group: 'metaldetector' },
    { id: 12, name: 'Chiave Inglese', price: 2.5, group: 'metaldetector' },
    { id: 13, name: 'Bullone', price: 5, group: 'metaldetector' },
    { id: 14, name: 'Accendino', price: 1, group: 'metaldetector' },
    { id: 15, name: 'Annaffiatoio', price: 2, group: 'altro' },
    { id: 16, name: 'Cassetta', price: 1.5, group: 'altro' },
    { id: 17, name: 'Batteria', price: 2.5, group: 'metaldetector' },
    { id: 18, name: 'Benzina ($1 al litro)', price: 1, group: 'altro' },
    { id: 19, name: 'TNI', price: 250, group: 'metaldetector' },
    { id: 20, name: 'Cacciavite', price: 3, group: 'metaldetector' },
    { id: 21, name: 'Camera', price: 20, group: 'metaldetector' },
    { id: 23, name: 'Cartine', price: 0.5, group: 'altro' },
    { id: 24, name: 'Cera', price: 2, group: 'altro' },
    { id: 25, name: 'Chiavi-Manette', price: 5, group: 'altro' },
    { id: 26, name: 'Fascetta', price: 0, group: 'metaldetector' },
    { id: 27, name: 'Foglio', price: 0.10, group: 'altro' },
    { id: 28, name: 'Forbici', price: 2, group: 'altro' },
    { id: 29, name: 'Grimaldelli auto($1-$3)', price: 1, group: 'altro' },
    { id: 30, name: 'Grimaldello comune($1-$3)', price: 1, group: 'altro' },
    { id: 31, name: 'Manette', price: 12.5, group: 'metaldetector' },
    { id: 32, name: 'Metal Detector', price: 375, group: 'metaldetector' },
    { id: 33, name: 'Penna', price: 1, group: 'altro' },
    { id: 34, name: 'Radio', price: 60, group: 'metaldetector' },
    { id: 35, name: 'Rottami', price: 0.5, group: 'metaldetector' },
    { id: 36, name: 'Sacco', price: 1.5, group: 'altro' },
    { id: 37, name: 'Spellacavi', price: 17.5, group: 'metaldetector' },
    { id: 38, name: 'Stetoscopio', price: 15, group: 'metaldetector' },
    { id: 39, name: 'Supporto Tunnel', price: 30, group: 'altro' },
    { id: 40, name: 'Tappo', price: 1.25, group: 'metaldetector' },
    { id: 41, name: 'TNI', price: 250, group: 'rari' },
    { id: 42, name: 'Torcia', price: 30, group: 'altro' },
    { id: 43, name: 'Spugna', price: 2.5, group: 'altro' },
    { id: 44, name: 'USB', price: 50, group: 'metaldetector' },
    { id: 45, name: 'Anello con diamanti ($800-$1000)', price: 800, group: 'rari' },
    { id: 46, name: 'Anello in oro ($400-$600)', price: 400, group: 'rari' },
    { id: 47, name: 'Bracciale in oro ($500-$700)', price: 500, group: 'rari' },
    { id: 48, name: 'Lingotto in oro ($4000-$5000)', price: 4000, group: 'rari' },
    { id: 49, name: 'Orologio in oro ($700-$900)', price: 700, group: 'rari' },
    { id: 50, name: 'Coltello ($200-$300)', price: 200, group: 'armi' },
    { id: 51, name: 'Heavy Pistol 1911 ($800-$1000)', price: 800, group: 'armi' },
    { id: 52, name: 'Mini 72 ($750-$950)', price: 750, group: 'armi' },
    { id: 53, name: 'Shotgun ($1000-$1250)', price: 1000, group: 'armi' },
    { id: 54, name: 'Carpa comune', price: 6.25, group: 'pesce' },
    { id: 55, name: 'Enciclopedia', price: 4, group: 'pesce' },
    { id: 56, name: 'Esca artificiale', price: 0, group: 'pesce' },
    { id: 57, name: 'Esca artificiale V2', price: 0, group: 'pesce' },
    { id: 58, name: 'Esca sanguisuga', price: 0, group: 'pesce' },
    { id: 59, name: 'Esca verme', price: 0, group: 'pesce' },
    { id: 60, name: 'Lavarello', price: 1.5, group: 'pesce' },
    { id: 61, name: 'Merluzzo', price: 5, group: 'pesce' },
    { id: 62, name: 'Orata', price: 8.5, group: 'pesce' },
    { id: 63, name: 'Persico', price: 6, group: 'pesce' },
    { id: 64, name: 'Pesce Gatto', price: 6.25, group: 'pesce' },
    { id: 65, name: 'Pesce siluro', price: 5.75, group: 'pesce' },
    { id: 66, name: 'Rovella', price: 5.5, group: 'pesce' },
    { id: 67, name: 'Sgombro', price: 4.75, group: 'pesce' },
    { id: 68, name: 'Spigola', price: 6.5, group: 'pesce' },
    { id: 69, name: 'Tinca', price: 7.25, group: 'pesce' },
    { id: 70, name: 'Trota', price: 8.5, group: 'pesce' },
    { id: 71, name: 'Cavo da traino', price: 10, group: 'auto' },
    { id: 72, name: 'Copertone di fabbrica', price: 20, group: 'auto' },
    { id: 73, name: 'Chiave inglese', price: 2.5, group: 'auto' },
    { id: 74, name: 'Pistola termica', price: 10, group: 'auto' },
    { id: 75, name: 'Vernice per veicoli', price: 10, group: 'auto' },
    { id: 76, name: 'Vernice per veicoli', price: 10, group: 'metaldetector' }
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
