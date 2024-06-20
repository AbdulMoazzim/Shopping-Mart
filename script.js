let lis1 = document.querySelector('.sign')
lis1.addEventListener('click', ()=>{
      let html1 = `<div class="signup">
      <div class="label">
            <img src="label.png" alt="label">
      </div>
      <div class="info">
            <div class="logo">
                  <img src="FASCO.png" alt="logo">
            </div>
            <div class="input">
                  <label for="name">Name</label>
                  <input type="text" placeholder="Enter Your Name">
            </div>
            <div class="line"></div>
            <div class="input">
                  <label for="name">Email</label>
                  <input type="email" placeholder="Enter Your Email">
            </div>
            <div class="line"></div>
            <div class="input">
                  <label for="name">Password</label>
                  <input type="password" placeholder="Enter Your Password">
            </div>
            <div class="line"></div>
            <button>Sign Up</button>
      </div>
      </div>`
      document.querySelector('.signup').remove()
      document.querySelector('.acc').insertAdjacentHTML('beforeend',html1)
})
let lis2 = document.querySelector('.log')
lis2.addEventListener('click', ()=>{
      let html1 = `<div class="signup">
      <div class="label">
            <img src="label.png" alt="label">
      </div>
      <div class="info">
            <div class="logo">
                  <img src="FASCO.png" alt="logo">
            </div>
            <div class="input">
                  <label for="name">Email</label>
                  <input type="email" placeholder="Enter Your Email">
            </div>
            <div class="line"></div>
            <div class="input">
                  <label for="name">Password</label>
                  <input type="password" placeholder="Enter Your Password">
            </div>
            <div class="line"></div>
            <button>Log In</button>
      </div>
      </div>`
      document.querySelector('.signup').remove()
      document.querySelector('.acc').insertAdjacentHTML('beforeend',html1)
})

