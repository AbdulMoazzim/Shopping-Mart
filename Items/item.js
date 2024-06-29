let pant = document.querySelector('.pants')
let pantType = document.querySelector('.list')
pant.addEventListener('click', ()=> {
    pantType.classList.toggle('open')
})

let products = [[{image: "cargopants/grey.jfif", type: "Grey Cargo", price: "Rs. 1600"},
    {image: "cargopants/white.jfif", type: "White Cargo", price: "Rs. 1600"},
    {image: "cargopants/offwhitecargo.jfif", type: "Off White Cargo", price: "Rs. 1600"},
    {image: "cargopants/olivecargo.jpg", type: "Olive Cargo", price: "Rs. 1600"},
    {image: "cargopants/blackcargo.webp", type: "Black Cargo", price: "Rs. 1600"},
    {image: "cargopants/skincargo.jpg", type: "Skin Cargo", price: "Rs. 1600"},
],[{image: "jeans/baggy.jfif", type: "Baggy Jeans", price: "Rs. 1100"},
    {image: "jeans/blackjeans.webp", type: "Black Jeans", price: "Rs. 1100"},
    {image: "jeans/blast.webp", type: "Blast Jeans", price: "Rs. 1100"},
    {image: "jeans/highWaisted.jfif", type: "High Waisted Jeans", price: "Rs. 1100"},
],[{image: "T-Shirts/white.jfif", type: "White T-Shirt", price: "Rs. 450"},
    {image: "T-Shirts/black.jfif", type: "Black T-Shirt", price: "Rs. 450"},
    {image: "T-Shirts/navy.jfif", type: "Navy T-Shirt", price: "Rs. 450"},
    {image: "T-Shirts/p.blue.jfif", type: "Plain Blue T-Shirt", price: "Rs. 450"},
    {image: "T-Shirts/s.blue.jfif", type: "Sky Blue T-Shirt", price: "Rs. 450"},
    {image: "T-Shirts/d.green.jfif", type: "Dark Green T-Shirt", price: "Rs. 450"},
],[{image: "Perfumes/per1.webp", type: "Saeed Ghani Perfumes", price: "Rs. 2000"},
    {image: "Perfumes/per2.jfif", type: "La Ishani Perfumes", price: "Rs. 1050"},
    {image: "Perfumes/per3.jfif", type: "Sauvage Perfumes", price: "Rs. 2500"},
    {image: "Perfumes/per4.jfif", type: "Glamour Perfumes", price: "Rs. 1200"},
    {image: "Perfumes/per5.jfif", type: "Scent N Stories Perfumes", price: "Rs. 850"},
],[{image: "Hoodies/hood1.jfif", type: "Navy Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood2.jfif", type: "Purple Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood3.jfif", type: "Brown Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood4.jfif", type: "Black Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood4.jfif", type: "Yellow Hoody", price: "Rs. 1800"},
],[{image: "Watches/watch1.jpg", type: "Oupinke Watch", price: "Rs. 3500"},
    {image: "Watches/watch2.jpg", type: "Lige Watch", price: "Rs. 2200"},
    {image: "Watches/watch3.webp", type: "Quartz Ladies Watch", price: "Rs. 2900"},
    {image: "Watches/watch4.webp", type: "King-W Watch", price: "Rs. 4500"},
    {image: "Watches/watch5.jpg", type: "Deyros Watch", price: "Rs. 3800"},
    {image: "Watches/watch6.webp", type: "Simple Watch", price: "Rs. 4800"},
    {image: "Watches/watch7.webp", type: "BinBono Watch", price: "Rs. 2000"},
    {image: "Watches/watch8.jpg", type: "Quartz Watch", price: "Rs. 3000"},
    {image: "Watches/watch9.webp", type: "NordGreen Watch", price: "Rs. 1600"},
],[{image: "Sweat-Shirts/sweat1.jpg", type: "Navy Blue Sweat Shirt", price: "Rs. 900"},
    {image: "Sweat-Shirts/sweat2.jpg", type: "Yellow Sweat Shirt", price: "Rs. 900"},
    {image: "Sweat-Shirts/sweat3.jpg", type: "Light Green Sweat Shirt", price: "Rs. 900"},
    {image: "Sweat-Shirts/sweat4.jpg", type: "Dark Blue Sweat Shirt", price: "Rs. 900"},
    {image: "Sweat-Shirts/sweat5.jpg", type: "Pink Sweat Shirt", price: "Rs. 900"},
    {image: "Sweat-Shirts/sweat6.jpg", type: "Green Sweat Shirt", price: "Rs. 900"},
],[{image: "Shoes/shoes1.jpg", type: "Loofers Shoes", price: "Rs. 1900"},
    {image: "Shoes/shoes2.jpg", type: "Clothes Shoes", price: "Rs. 2500"},
    {image: "Shoes/shoes3.jpg", type: "Party Shoes", price: "Rs. 3400"},
    {image: "Shoes/shoes4.jpg", type: "Pumpy", price: "Rs. 2000"},
    {image: "Shoes/shoes5.jpg", type: "White Shoes", price: "Rs. 3900"},
],[{image: "Jewellery/ring1.jpg", type: "Gold and Diamond Ring", price: "Rs. 40000"},
    {image: "Jewellery/ring2.jpg", type: "Diamond Ring", price: "Rs. 25000"},
    {image: "Jewellery/ring3.jpg", type: "Gold Ring", price: "Rs. 34000"},
    {image: "Jewellery/earrings1.jpg", type: "Gold Earrings", price: "Rs. 20000"},
    {image: "Jewellery/earrings2.jpg", type: "Silver Earrings", price: "Rs. 39000"},
    {image: "Jewellery/earrings3.jpg", type: "Diamond Earrings", price: "Rs. 70000"},
    {image: "Jewellery/necklace1.jpg", type: "Simple Necklace", price: "Rs. 12000"},
    {image: "Jewellery/necklace2.jpg", type: "Pearl Necklace", price: "Rs. 15000"},
    {image: "Jewellery/necklace3.jpg", type: "Gold Necklace", price: "Rs. 18000"},
],
]

let links = document.body.querySelectorAll('.products')
Array.from(links).forEach((val,index)=> {
    val.addEventListener('click', ()=> {
        document.body.querySelector('.heading').innerHTML = val.innerHTML;
        document.body.querySelector('.content').innerHTML = '';
        for (let i = 0; i < products[index].length; i ++) {
            let html = `<div class="card">
                <div class="img">
                    <img src="../Images/${products[index][i].image}" alt="${products[index][i].type}">
                </div>
                <div class="info">
                    <p id="type">${products[index][i].type}</p>
                    <p>${products[index][i].price}</p>
                </div>
            </div>`;
            document.body.querySelector('.content').insertAdjacentHTML('beforeend',html);
        }
    })
})