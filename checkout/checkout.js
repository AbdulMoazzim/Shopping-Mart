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

function displayProducts() {
    let arrayA = currentLogged();
    if (arrayA !== null) {
        var uniqueProducts = [];
        for (let i = 0; i < arrayA.parsing.product.length; i++) {
            let found = false;
            for (let j = 0; j < uniqueProducts.length; j++) {
                if (arrayA.parsing.product[i].type === uniqueProducts[j].type) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                uniqueProducts.push(arrayA.parsing.product[i]);
            }
        }  
    }
    
    for (let i = 0; i < uniqueProducts.length; i++) {
        var count = 0;
        for (let j =0; j < arrayA.parsing.product.length; j++) {
            if(uniqueProducts[i].type === arrayA.parsing.product[j].type) {
                count++;
            }
        }
        let html = `<tr>
        <td id="type${i}">${uniqueProducts[i].type}</td>
        <td>Rs. ${uniqueProducts[i].price}</td>
        <td class="quant">${count}</td>
        <td><span class="material-symbols-outlined bin">delete</span></td>
    </tr>`
    document.querySelector('#cart-items').insertAdjacentHTML('beforeend',html)
    calculate(arrayA)
}
}
displayProducts();

var bin = document.querySelectorAll('.bin');

function bindClickEvents() {
    Array.from(bin).forEach((val, index) => {
        val.addEventListener('click', () => {
            let arrayB = currentLogged();
            for (let i = 0; i < arrayB.parsing.product.length; i++) {
                if (document.querySelector(`#type${index}`).innerHTML === arrayB.parsing.product[i].type) {
                    arrayB.parsing.product.splice(i, 1);
                    break;
                }
            }
            document.querySelector('#cart-items').innerHTML = '';
            localStorage.setItem(arrayB.key, JSON.stringify(arrayB.parsing));
            displayProducts();
            bin = document.querySelectorAll('.bin');
            bindClickEvents();
            calculate(arrayB);
        });
    });
}

bindClickEvents();

function calculate(array) {
    let calculate = 0;
    for (let i = 0; i < array.parsing.product.length; i++) {
        calculate += Number.parseInt(array.parsing.product[i].price);
    }
    document.querySelector('#cart-total').innerHTML = `Rs. ${calculate}`;
}