function currentLogged() {
    let storage = localStorage;
    for (let i = 0; i < storage.length; i++) {
      var key = storage.key(i);
      let parsing = JSON.parse(storage.getItem(key));
      if (parsing.condition == true) {
        return { key: key, parsing: parsing };
      }
    }
    return null;
  }

    
class History {
    showProducts() {
        let arrayA = currentLogged();
        document.querySelector('#p').innerHTML += storage.parsing.Name;
        // if (arrayA !== null) {
        //     var uniqueProducts = [];
        //     for (let i = 0; i < arrayA.parsing.product.length; i++) {
        //         let found = false;
        //         for (let j = 0; j < uniqueProducts.length; j++) {
        //             if (arrayA.parsing.product[i].type === uniqueProducts[j].type) {
        //                 found = true;
        //                 break;
        //             }
        //         }
        //         if (!found) {
        //             uniqueProducts.push(arrayA.parsing.product[i]);
        //         }
        //     }
        // }
        
        // for (let i = 0; i < uniqueProducts.length; i++) {
        //     var count = 0;
        //     for (let j = 0; j < arrayA.parsing.product.length; j++) {
        //         if (uniqueProducts[i].type === arrayA.parsing.product[j].type) {
        //             count++;
        //         }
        //     }
        //     let html = `<tr>
        //     <td id="type${i}">${uniqueProducts[i].type}</td>
        //     <td>Rs. ${uniqueProducts[i].price}</td>
        //     <td class="quant">${count}</td>
        //     <td><span class="material-symbols-outlined bin">delete</span></td>
        //     </tr>`;
        //     document.querySelector("#cart-items").insertAdjacentHTML("beforeend", html);
        //     cart.calculate(arrayA);
        // }
    }
}


let history = new History();
history.showProducts();