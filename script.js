let lis1 = document.querySelector(".sign");
let lis2 = document.querySelector(".log");
let info = localStorage;

lis1.addEventListener("click", () => {
  let html1 = `<div class="signup">
            <div class="label">
                <img src="Images/label.png" alt="label">
            </div>
            <div class="info">
                <div class="logo">
                    <img src="Images/FASCO.png" alt="logo">
                </div>
                <form>
                    <div class="input">
                        <label for="name">Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="line"></div>
                    <div class="input">
                        <label for="user">UserName</label>
                        <input type="text" id="user" required>
                    </div>
                    <div class="line"></div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input type="password" id="password" required>
                    </div>
                    <div class="line"></div>
                </form>
                <button id="accSign">Sign Up</button>

            </div>
        </div>`;
  document.querySelector(".signup").remove();
  document.querySelector(".acc").insertAdjacentHTML("beforeend", html1);
  let acc1 = document.querySelector("#accSign");
  acc1.addEventListener("click", listener1);
});
lis2.addEventListener("click", () => {
  let html1 = `<div class="signup">
            <div class="label">
                <img src="Images/label.png" alt="label">
            </div>
            <div class="info">
                <div class="logo">
                    <img src="Images/FASCO.png" alt="logo">
                </div>
                <form>
                    <div class="input">
                        <label for="user">UserName</label>
                        <input type="text" id="user" required>
                    </div>
                    <div class="line"></div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input type="password" id="password" required>
                    </div>
                    <div class="line"></div>
                </form>
                <button id="accLog">Log In</button>

            </div>
        </div>`;
  document.querySelector(".signup").remove();
  document.querySelector(".acc").insertAdjacentHTML("beforeend", html1);
  let acc2 = document.querySelector("#accLog");
  acc2.addEventListener("click", listener2);
});

function listener1() {
  let Name = document.querySelector("#name");
  let pass = document.querySelector("#password");
  let user = document.querySelector("#user");
  if (user.value === "" || Name.value === "" || pass.value === ""){
    alert("Provide All Credentials to Create an account!")
    return;
  }
  for (let i in info) {
    if (JSON.stringify(user.value) == i) {
      user.value = "";
      Name.value = "";
      pass.value = "";
      alert("User Name not available");
      return;
    }
  }
  localStorage.setItem(JSON.stringify(user.value), JSON.stringify(pass.value));
  alert("Account Created");
  user.value = "";
  Name.value = "";
  pass.value = "";
  return;
}
function listener2() {
  let pass = document.querySelector("#password");
  let user = document.querySelector("#user");
  if (user.value === "" || pass.value === ""){
    alert("Provide All Credentials to Log in!")
    return;
  }
  for (let i in info) {
    if (
      JSON.stringify(user.value) == i &&
      JSON.stringify(pass.value) == info[i]
    ) {
      window.location.href = 'store.html';
      return;
    }
  }
  user.value = "";
  pass.value = "";
  alert("Invalid credentials");
  return;
}

let acc1 = document.querySelector("#accSign");
acc1.addEventListener("click", listener1);