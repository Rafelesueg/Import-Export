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
    {
        id: 1,
        name: 'Rame',
        price: 5,
        group: 'metalli'
    },
    {
        id: 2,
        name: 'Ferro',
        price: 5,
        group: 'metalli'
    },
    {
        id: 3,
        name: 'Stagno',
        price: 5,
        group: 'metalli'
    },
    {
        id: 4,
        name: 'Pietra',
        price: 5,
        group: 'metalli'
    },
    {
        id: 5,
        name: 'Sabbia',
        price: 5,
        group: 'metalli'
    },
    {
        id: 6,
        name: 'Grafite',
        price: 5,
        group: 'metalli'
    },
    {
        id: 7,
        name: 'Item1',
        price: 5,
        group: 'altro'
    },
    {
        id: 8,
        name: 'Item2',
        price: 5,
        group: 'altro'
    },
    {
        id: 9,
        name: 'Item3',
        price: 5,
        group: 'altro'
    },
    {
        id: 10,
        name: 'Item4',
        price: 5,
        group: 'altro'
    },
    {
        id: 11,
        name: 'Walkman',
        price: 5,
        group: 'metaldetector'
    },
    {
        id: 12,
        name: 'Chiave Inglese',
        price: 5,
        group: 'metaldetector'
    },
    {
        id: 13,
        name: 'Bullone',
        price: 5,
        group: 'metaldetector'
    },
    {
        id: 14,
        name: 'Pistola',
        price: 5,
        group: 'metaldetector'
    },
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

    // Mostra tutti gli elementi
    Array.from(list.children).forEach((item) => {
        item.style.display = 'block';
    });

    // Nascondi gli elementi che non appartengono al gruppo selezionato
    if (selectedGroup !== 'all') {
        Array.from(list.children).forEach((item) => {
            // Modifica questa riga per ottenere il gruppo dall'elemento corretto
            let itemGroup = item.getAttribute('data-group').toLowerCase();

            if (itemGroup !== selectedGroup) {
                item.style.display = 'none';
            }
        });
    }

    // Ricarica la lista del carrello dopo aver filtrato
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
