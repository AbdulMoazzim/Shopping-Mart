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
],
]