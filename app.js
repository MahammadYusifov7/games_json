var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
    if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
    } else {
        collapseMenu.style.display = 'block';
    }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

let cards = document.getElementById('cards')
let data = [
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "category": "Action RPG",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0qp9dhZEw9xPPGne8q2Aa8Cd7uu6Z64a0A&s"
    },
    {
        "title": "Minecraft",
        "price": 26.95,
        "category": "Sandbox",
        "img": "https://qebulol.az/wp-content/uploads/2025/06/Hero-8c18da7c19a1a8811ddb.jpg"
    },
    {
        "title": "Call of Duty: Modern Warfare",
        "price": 59.99,
        "category": "Shooter",
        "img": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Call_of_Duty_-_Modern_Warfare_Remastered.jpeg/250px-Call_of_Duty_-_Modern_Warfare_Remastered.jpeg"
    },
    {
        "title": "Fortnite",
        "price": 29.99,
        "category": "Battle Royale",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUYV09xrxL5B5O9DmMcigmVsg50hU6idHRg&s"
    },
    {
        "title": "The Legend of Zelda: Breath of the Wild",
        "price": 59.99,
        "category": "Adventure",
        "img": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 49.99,
        "category": "Action Adventure",
        "img": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
    },
    {
        "title": "Assassin's Creed Odyssey",
        "price": 29.99,
        "category": "Action RPG",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmmmfJMVSmEWHknaDNNqe3WVq-N6YjxG35A&s"
    },
    {
        "title": "Overwatch",
        "price": 39.99,
        "category": "Shooter",
        "img": "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg"
    },
    {
        "title": "The Elder Scrolls V: Skyrim",
        "price": 19.99,
        "category": "RPG",
        "img": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/capsule_616x353.jpg?t=1753715778"
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "category": "Action",
        "img": "https://upload.wikimedia.org/wikipedia/az/2/20/GTA_5_Cover.jpg"
    },

]

data.map(item =>
    cards.innerHTML += `
        <div class="card1">
            <div
                class="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div class="aspect-[3/2]">
                    <img src="${item.img}"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
                <div class="p-4 text-center">
                    <h3 class="text-xl font-bold">${item.title}</h3>
                    <p class="mt-3 text-xl leading-relaxed">${item.price} $</p>
                    <p class="mt-3 text-md text-slate-500 leading-relaxed">${item.category}</p>
                </div>
            </div>
        </div>
    `
)