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
        "disc" : "10%",
        "newprice" : 35.991,
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
        "disc" : "50%",
        "newprice" : 14.99,
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
        "disc" : "30%",
        "newprice" : 21.89,
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

data.map(item => {
    let discountHTML = item.disc ? `
        <div class="absolute bg-red-500 text-white p-2 rounded-lg top-4 left-4">
            ${item.disc} OFF
        </div>
    ` : '' ;

    cards.innerHTML += `
        <div class="card1">
            <div class="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                <div class="w-full bg-gray-50 relative">
                    <a href="javascript:void(0)" class="block">
                        <img src="${item.img}" alt="Product 1"
                            class="w-full object-cover object-top aspect-[230/307]" />
                    </a>

                </div>
                <div class="p-2 flex-1 flex flex-col">
                    <div class="flex-1">
                        <a href="javascript:void(0)" class="block border-0 outline-0">
                            <h5 class="text-sm sm:text-base font-semibold text-slate-900 truncate">${item.title}
                            </h5>
                        </a>
                        <p class="text-sm mt-1 text-slate-600 truncate">${item.category}</p>
                        <div class="flex flex-wrap justify-between gap-2 mt-3">
                            <div class="flex gap-2">
                                <h6 class="text-sm sm:text-base font-bold text-slate-900">${item.newprice}$</h6>
                                <h6 class="text-sm sm:text-base text-slate-600"><strike>${item.price}$</strike></h6>
                            </div>
                          
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mt-4">
                        <div class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer"
                            title="Wishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block"
                                viewBox="0 0 64 64">
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>
                        <button type="button"
                            class="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add
                            to cart</button>
                    </div>
                </div>
        </div>
    `
})