function currentLogged() {
    let storage = localStorage;
    for (let i = 0; i < storage.length;i++){
        var key = storage.key(i);
        let parsing = JSON.parse(storage.getItem(key));
        if (parsing.condition == true) {
            return { key: key, parsing: parsing};
        }
    }
    return null;
}
 let tData = `<tbody id="cart-items"></tbody>`;
document.querySelector('#table').insertAdjacentHTML('beforeend',tData);

let array = currentLogged()
if (array !== null) {
    let products = array.parsing.products;
    let uniqueProducts = [];

    for (let i = 0; i < products.length; i++) {
        let found = false;
        for (let j = 0; j < uniqueProducts.length; j++) {
            if (products[i].type === uniqueProducts[j].type) {
                found = true;
                break;
            }
        }
        if (!found) {
            uniqueProducts.push(products[i]);
        }
    }
    array.parsing.products = uniqueProducts;
    
}

let html = `<tr>
    <td>${uniqueProducts[j].type}</td>
    <td>${uniqueProducts[j].price}</td>
    <td>${quant}</td>
</tr>`
document.querySelector('#cart-items').insertAdjacentHTML('beforeend',html)
