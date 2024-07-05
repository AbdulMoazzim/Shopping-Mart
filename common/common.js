let header = `<header>
        <div class="Logo">
            <img src="../Images/FASCO.png" alt="Logo">
        </div>
        <div class="nav" id="display">
            <nav>
                <ul>
                    <li><a href="../Homepage/homepage.html">Home </a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="../Items/item.html">Products</a></li>
                </ul>
            </nav>
        </div>
        <span class="material-symbols-outlined" id="ham">menu</span>
    </header>
    <div id="header_border"></div>
    </header>
    <div class="header transformA">
        <div class="transist">
            <nav>
                <ul>
                    <li><a href="../Homepage/homepage.html">Home </a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="../Items/item.html">Products</a></li>
                </ul>
            </nav>
        </div>
        <div id="header_border"></div>
    </div>
    `
let googleMenu = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`

document.body.insertAdjacentHTML('afterbegin',header)
document.head.insertAdjacentHTML('beforeend',googleMenu)

let menu = document.body.querySelector('#ham');
menu.addEventListener('click', ()=>{
    document.body.querySelector('.header').classList.toggle('transformA')
})
