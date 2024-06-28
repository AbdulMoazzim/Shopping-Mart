let pant = document.querySelector('.pants')
let pantType = document.querySelector('.list')
console.log(pant)
pant.addEventListener('click', ()=> {
    console.log("hi");
    if (pant.classList.contains('pants')) {
        pantType.style.width = "0px";
        pantType.style.display = "none";
        pant.classList.remove('pants')
        console.log("hello");
    }
    else {
        pantType.style.width = "200px";
        pantType.style.display = "block";
        pant.classList.add('pants')
        console.log("hello");
    }
})