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
    if (arrayA !== null) {
      document.querySelector("#p").innerHTML += arrayA.parsing.Name;

      for (let i = 0; i < arrayA.parsing.history.length; i++) {
        let uniqueProducts = [];
        for (let k = 0; k < arrayA.parsing.history[i].products.length; k++) {
          let found = false;
          for (let j = 0; j < uniqueProducts.length; j++) {
            if (
              arrayA.parsing.history[i].products[k].type ===
              uniqueProducts[j].type
            ) {
              found = true;
              break;
            }
          }
          if (!found) {
            uniqueProducts.push(arrayA.parsing.history[i].products[k]);
          }
        }

        var quant = new Array(uniqueProducts.length).fill(0);
        for (let j = 0; j < uniqueProducts.length; j++) {
          for (let k = 0; k < arrayA.parsing.history[i].products.length; k++) {
            if (
              uniqueProducts[j].type ===
              arrayA.parsing.history[i].products[k].type
            ) {
              quant[j]++;
            }
          }
        }
        let productDetails = "";
        for (let j = 0; j < uniqueProducts.length; j++) {
          productDetails += `${uniqueProducts[j].type} : ${quant[j]}\n`;
        }

        let html = `<tr id="tr${i}">
          <td>${arrayA.parsing.history[i].date}</td>
          <td>${arrayA.parsing.history[i].month}</td>
          <td>${arrayA.parsing.history[i].year}</td>
          <td>${arrayA.parsing.history[i].day}</td>
          <td>${productDetails}</td>
        </tr>`;
        document
          .querySelector("#cart-items")
          .insertAdjacentHTML("beforeend", html);
      }
    }
  }
}

let his = new History();
his.showProducts();
