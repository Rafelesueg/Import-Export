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
    { id: 19, name: 'Bullone', price: 2, group: 'metaldetector' },
    { id: 20, name: 'Cacciavite', price: 3, group: 'metaldetector' },
    { id: 21, name: 'Camera', price: 20, group: 'metaldetector' },
    { id: 22, name: 'Cartella', price: 1, group: 'altro' },
    { id: 23, name: 'Cartine', price: 0.5, group: 'altro' },
    { id: 24, name: 'Cera', price: 2, group: 'altro' },
    { id: 25, name: 'Chiavi-Manette', price: 5, group: 'altro' },
    { id: 26, name: 'Fascetta', price: 0, group: 'metaldetector' },
    { id: 27, name: 'Foglio', price: 0.10, group: 'altro' },
    { id: 28, name: 'Forbici', price: 2, group: 'altro' },
    { id: 29, name: 'Gettone', price: 0.10, group: 'altro' },
    { id: 30, name: 'Grimaldelli auto($1-$3)', price: 1, group: 'altro' },
    { id: 31, name: 'Grimaldello comune($1-$3)', price: 1, group: 'altro' },
    { id: 32, name: 'Manette', price: 12.5, group: 'metaldetector' },
    { id: 33, name: 'Metal Detector', price: 375, group: 'metaldetector' },
    { id: 34, name: 'Penna', price: 1, group: 'altro' },
    { id: 35, name: 'Portachiavi', price: 1, group: 'metaldetector' },
    { id: 36, name: 'Portafoglio', price: 10, group: 'metaldetector' },
    { id: 37, name: 'Radio', price: 60, group: 'metaldetector' },
    { id: 38, name: 'Rottami', price: 0.5, group: 'metaldetector' },
    { id: 39, name: 'Sacco', price: 1.5, group: 'altro' },
    { id: 40, name: 'Spellacavi', price: 17.5, group: 'metaldetector' },
    { id: 41, name: 'Stetoscopio', price: 15, group: 'metaldetector' },
    { id: 42, name: 'Supporto Tunnel', price: 30, group: 'altro' },
    { id: 43, name: 'Tappo', price: 1.25, group: 'metaldetector' },
    { id: 44, name: 'TNI', price: 250, group: 'rari' },
    { id: 45, name: 'Torcia', price: 30, group: 'altro' },
    { id: 46, name: 'Spugna', price: 2.5, group: 'altro' },
    { id: 47, name: 'USB', price: 50, group: 'metaldetector' },
    { id: 48, name: 'Piccone in Ferro', price: 40, group: 'metalli' },
    { id: 49, name: 'Piccone in Ferro avanzato', price: 70, group: 'metalli' },
    { id: 50, name: 'Piccone in Oro', price: 200, group: 'metalli' },
    { id: 51, name: 'Piccone in Pietra', price: 200, group: 'metalli' },
    { id: 52, name: 'Anello con diamanti ($800-$1000)', price: 800, group: 'rari' },
    { id: 53, name: 'Anello in oro ($400-$600)', price: 400, group: 'rari' },
    { id: 54, name: 'Bracciale in oro ($500-$700)', price: 500, group: 'rari' },
    { id: 55, name: 'Lingotto in oro ($4000-$5000)', price: 4000, group: 'rari' },
    { id: 56, name: 'Orologio in oro ($700-$9000)', price: 700, group: 'rari' },
    { id: 57, name: 'Coltello ($200-$300)', price: 200, group: 'armi' },
    { id: 58, name: 'Heavy Pistol 1911 ($800-$1000)', price: 800, group: 'armi' },
    { id: 59, name: 'Mini 72 ($750-$950)', price: 750, group: 'armi' },
    { id: 60, name: 'Shotgun ($1000-$1250)', price: 1000, group: 'armi' },
    { id: 61, name: 'Pack 10 ammo-9 ($5-$7)', price: 5, group: 'armi' },
    { id: 62, name: 'Pack 10 ammo-44 ($5-$7)', price: 5, group: 'armi' },
    { id: 63, name: 'Pack 10 ammo-shotgun ($7-$8)', price: 7, group: 'armi' },
    { id: 64, name: 'Canna da pesca', price: 45, group: 'pesce' },
    { id: 65, name: 'Carpa comune', price: 6.25, group: 'pesce' },
    { id: 66, name: 'Enciclopedia', price: 4, group: 'pesce' },
    { id: 67, name: 'Esca artificiale', price: 0, group: 'pesce' },
    { id: 68, name: 'Esca artificiale V2', price: 0, group: 'pesce' },
    { id: 69, name: 'Esca sanguisuga', price: 0, group: 'pesce' },
    { id: 70, name: 'Esca verme', price: 0, group: 'pesce' },
    { id: 71, name: 'Lavarello', price: 1.5, group: 'pesce' },
    { id: 72, name: 'Merluzzo', price: 5, group: 'pesce' },
    { id: 73, name: 'Orata', price: 8.5, group: 'pesce' },
    { id: 74, name: 'Persico', price: 6, group: 'pesce' },
    { id: 75, name: 'Pesce Gatto', price: 6.25, group: 'pesce' },
    { id: 76, name: 'Pesce siluro', price: 5.75, group: 'pesce' },
    { id: 77, name: 'Rovella', price: 5.5, group: 'pesce' },
    { id: 78, name: 'Sgombro', price: 4.75, group: 'pesce' },
    { id: 79, name: 'Spigola', price: 6.5, group: 'pesce' },
    { id: 80, name: 'Tinca', price: 7.25, group: 'pesce' },
    { id: 81, name: 'Trota', price: 8.5, group: 'pesce' },
    { id: 82, name: 'Cavo da traino', price: 5, group: 'auto' },
    { id: 83, name: 'Motore 4 cilindri', price: 50, group: 'auto' },
    { id: 84, name: 'Motore 6 cilindri', price: 125, group: 'auto' },
    { id: 85, name: 'Motore v6', price: 150, group: 'auto' },
    { id: 86, name: 'Motore v8', price: 250, group: 'auto' },
    { id: 87, name: 'Motore v12', price: 300, group: 'auto' },
    { id: 88, name: 'Freni a tamburo', price: 4, group: 'auto' },
    { id: 89, name: 'Freni a disco', price: 5, group: 'auto' },
    { id: 90, name: 'Frani a disco in ceramica', price: 7.5, group: 'auto' },
    { id: 91, name: 'Freni a disco in carbonio-ceramica', price: 12.5, group: 'auto' },
    { id: 92, name: 'Trasmissione variaz continua', price: 32.5, group: 'auto' },
    { id: 93, name: 'Trasmissione doppia frizione', price: 35, group: 'auto' },
    { id: 94, name: 'Trasmissione variaz continua elettronica', price: 45, group: 'auto' },
    { id: 95, name: 'Trasmissione doppia frizione elettronica', price: 50, group: 'auto' },
    { id: 96, name: 'Batteria al piombo', price: 15, group: 'auto' },
    { id: 97, name: 'Batteria al litio', price: 25, group: 'auto' },
    { id: 98, name: 'Olio minerale', price: 20, group: 'auto' },
    { id: 99, name: 'Olio sintetico', price: 27.5, group: 'auto' },
    { id: 100, name: 'Olio a bassa viscosità', price: 35, group: 'auto' },
    { id: 101, name: 'Sospensione a balestra', price: 17.5, group: 'auto' },
    { id: 102, name: 'Sospensione indipendente', price: 20, group: 'auto' },
    { id: 103, name: 'Sospensioni ad aria', price: 30, group: 'auto' },
    { id: 104, name: 'Candele rame', price: 5, group: 'auto' },
    { id: 105, name: 'Candele platino', price: 15, group: 'auto' },
    { id: 106, name: 'Candele iridio', price: 12.5, group: 'auto' },
    { id: 107, name: 'Copertone di fabbrica', price: 10, group: 'auto' },
    { id: 108, name: 'Chiave inglese', price: 2.5, group: 'auto' },
    { id: 109, name: 'Pistola termica', price: 10, group: 'auto' },
    { id: 110, name: 'Vernice per veicoli', price: 10, group: 'auto' }  
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
