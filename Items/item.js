let pant = document.querySelector('.pants')
let pantType = document.querySelector('.list')
pant.addEventListener('click', ()=> {
    pantType.classList.toggle('open')
})
