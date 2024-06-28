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
],[{image: "Hoodies/hood1.webp", type: "Navy Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood2.jfif", type: "Purple Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood3.jfif", type: "Brown Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood4.jfif", type: "Black Hoody", price: "Rs. 1800"},
    {image: "Hoodies/hood4.jfif", type: "Yellow Hoody", price: "Rs. 1800"},
],
]