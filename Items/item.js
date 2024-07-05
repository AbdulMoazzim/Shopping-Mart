let products = [["Cargo Pants",{image: "cargopants/grey.jfif", type: "Grey Cargo", price: "1600"},
    {image: "cargopants/white.jfif", type: "White Cargo", price: "1600"},
    {image: "cargopants/offwhitecargo.jfif", type: "Off White Cargo", price: "1600"},
    {image: "cargopants/olivecargo.jpg", type: "Olive Cargo", price: "1600"},
    {image: "cargopants/blackcargo.webp", type: "Black Cargo", price: "1600"},
    {image: "cargopants/skincargo.jpg", type: "Skin Cargo", price: "1600"},
],["Jeans",{image: "jeans/baggy.jfif", type: "Baggy Jeans", price: "1100"},
    {image: "jeans/blackjeans.webp", type: "Black Jeans", price: "1100"},
    {image: "jeans/blast.webp", type: "Blast Jeans", price: "1100"},
    {image: "jeans/highWaisted.jfif", type: "High Waisted Jeans", price: "1100"},
],["T-Shirts",{image: "T-Shirts/white.jfif", type: "White T-Shirt", price: "450"},
    {image: "T-Shirts/black.jfif", type: "Black T-Shirt", price: "450"},
    {image: "T-Shirts/navy.jfif", type: "Navy T-Shirt", price: "450"},
    {image: "T-Shirts/p.blue.jfif", type: "Plain Blue T-Shirt", price: "450"},
    {image: "T-Shirts/s.blue.jfif", type: "Sky Blue T-Shirt", price: "450"},
    {image: "T-Shirts/d.green.jfif", type: "Dark Green T-Shirt", price: "450"},
],["Perfumes",{image: "Perfumes/per1.webp", type: "Saeed Ghani Perfumes", price: "2000"},
    {image: "Perfumes/per2.jfif", type: "La Ishani Perfumes", price: "1050"},
    {image: "Perfumes/per3.jfif", type: "Sauvage Perfumes", price: "2500"},
    {image: "Perfumes/per4.jfif", type: "Glamour Perfumes", price: "1200"},
    {image: "Perfumes/per5.jfif", type: "Scent N Stories Perfumes", price: "850"},
],["Hoodies",{image: "Hoodies/hood1.jfif", type: "Navy Hoody", price: "1800"},
    {image: "Hoodies/hood2.jfif", type: "Purple Hoody", price: "1800"},
    {image: "Hoodies/hood3.jfif", type: "Brown Hoody", price: "1800"},
    {image: "Hoodies/hood4.jfif", type: "Black Hoody", price: "1800"},
    {image: "Hoodies/hood4.jfif", type: "Yellow Hoody", price: "1800"},
],["Watches",{image: "Watches/watch1.jpg", type: "Oupinke Watch", price: "3500"},
    {image: "Watches/watch2.jpg", type: "Lige Watch", price: "2200"},
    {image: "Watches/watch3.webp", type: "Quartz Ladies Watch", price: "2900"},
    {image: "Watches/watch4.webp", type: "King-W Watch", price: "4500"},
    {image: "Watches/watch5.jpg", type: "Deyros Watch", price: "3800"},
    {image: "Watches/watch6.webp", type: "Simple Watch", price: "4800"},
    {image: "Watches/watch7.webp", type: "BinBono Watch", price: "2000"},
    {image: "Watches/watch8.jpg", type: "Quartz Watch", price: "3000"},
    {image: "Watches/watch9.webp", type: "NordGreen Watch", price: "1600"},
],["Sweat Shirts",{image: "Sweat-Shirts/sweat1.jpg", type: "Navy Blue Sweat Shirt", price: "900"},
    {image: "Sweat-Shirts/sweat2.jpg", type: "Yellow Sweat Shirt", price: "900"},
    {image: "Sweat-Shirts/sweat3.jpg", type: "Light Green Sweat Shirt", price: "900"},
    {image: "Sweat-Shirts/sweat4.jpg", type: "Dark Blue Sweat Shirt", price: "900"},
    {image: "Sweat-Shirts/sweat5.jpg", type: "Pink Sweat Shirt", price: "900"},
    {image: "Sweat-Shirts/sweat6.jpg", type: "Green Sweat Shirt", price: "900"},
],["Shoes",{image: "Shoes/shoes1.jpg", type: "Loofers Shoes", price: "1900"},
    {image: "Shoes/shoes2.jpg", type: "Clothes Shoes", price: "2500"},
    {image: "Shoes/shoes3.jpg", type: "Party Shoes", price: "3400"},
    {image: "Shoes/shoes4.jpg", type: "Pumpy", price: "2000"},
    {image: "Shoes/shoes5.jpg", type: "White Shoes", price: "3900"},
],["Jewellery",{image: "Jewellery/ring1.jpg", type: "Gold and Diamond Ring", price: "40000"},
    {image: "Jewellery/ring2.jpg", type: "Diamond Ring", price: "25000"},
    {image: "Jewellery/ring3.jpg", type: "Gold Ring", price: "34000"},
    {image: "Jewellery/earrings1.jpg", type: "Gold Earrings", price: "20000"},
    {image: "Jewellery/earrings2.jpg", type: "Silver Earrings", price: "39000"},
    {image: "Jewellery/earrings3.jpg", type: "Diamond Earrings", price: "70000"},
    {image: "Jewellery/necklace1.jpg", type: "Simple Necklace", price: "12000"},
    {image: "Jewellery/necklace2.jpg", type: "Pearl Necklace", price: "15000"},
    {image: "Jewellery/necklace3.jpg", type: "Gold Necklace", price: "18000"},
],
]


let links = document.body.querySelectorAll('.products')
Array.from(links).forEach((val,index)=> {
    val.addEventListener('click', ()=> {
        document.body.querySelector('.heading').innerHTML = val.innerHTML;
        document.body.querySelector('.content').innerHTML = '';
        for (let i = 1; i < products[index].length; i ++) {
            let html = `<div class="card" style="width: 18rem">
          <img
            src="../Images/${products[index][i].image}"
            class="card-img-top"
            alt="${products[index][i].type}"
          />
          <div class="card-body">
            <h5 class="card-title">${products[index][i].type}</h5>
            <p class="card-text">Rs. ${products[index][i].price}</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>`;
            document.body.querySelector('.content').insertAdjacentHTML('beforeend',html);
        }
        addProducts();
    })
})


let checkout = document.body.querySelector('#cart');
checkout.addEventListener('click', ()=>{
    window.location.href = "../checkout/checkout.html"
})
function currentLogged() {
    let storage = localStorage;
    for (let i = 0; i < storage.length;i++){
        var key = storage.key(i);
        let parsing = JSON.parse(storage.getItem(key));
        if (parsing.condition == true) {
            return { key: key, parsing: parsing };
        }
    }
    return null;
}
function addProducts(){
    let btn = document.body.querySelectorAll('.btn');
    Array.from(btn).forEach((val, index) => {
      val.addEventListener('click', () => {
        let array = currentLogged();
        if (array.parsing) {
          for (let i = 0; i < products.length; i++) {
            if (document.querySelector(".heading").innerHTML === products[i][0]) {
              array.parsing.product.push(products[i][index + 1]);
              localStorage.setItem(array.key, JSON.stringify(array.parsing));
              document.querySelector("#Quantity").innerHTML = array.parsing.product.length
              break;
            }
          }
        }
      });
    });
}

addProducts();

let cartsItem = currentLogged();
if (cartsItem.parsing != undefined) {
    document.querySelector("#Quantity").innerHTML = cartsItem.parsing.product.length;
} 