let lis1 = document.querySelector(".sign");
let lis2 = document.querySelector(".log");
let info = localStorage;

class signup_login {
  createSignUp(listener1) {
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
  }

  createLogIn(listener2) {
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
  }
}

let account = new signup_login()

lis1.addEventListener("click", () => {
  account.createSignUp(listener1)
});
lis2.addEventListener("click", () => {
  account.createLogIn(listener2)
});

function listener1() {
  let FullName = document.querySelector("#name");
  let pass = document.querySelector("#password");
  if (pass.value.length < 8) {
    alert("Password's length should be greater than 8 characters");
    return
  }
  let user = document.querySelector("#user");
  if (user.value === "" || FullName.value === "" || pass.value === ""){
    alert("Provide All Credentials to Create an account!")
    return;
  }
  for (let i = 0; i < info.length; i++) {
    let key = info.key(i);
    let parse1 = JSON.parse(info.getItem(key));
    if (user.value == parse1.Username) {
        user.value = "";
        FullName.value = "";
        pass.value = "";
        alert("User Name not available");
        return;
    }
}
  let id = new Date().getTime()
  localStorage.setItem(id, JSON.stringify({Name: FullName.value, Username : user.value, Password: pass.value,condition: false, product:[], history:[]}));
  user.value = "";
  FullName.value = "";
  pass.value = "";
  alert("Account Created");
  return;
}
function listener2() {
  let pass = document.querySelector("#password");
  let user = document.querySelector("#user");
  if (user.value === "" || pass.value === ""){
    alert("Provide All Credentials to Log in!")
    return;
  }
  for (let i = 0; i < info.length; i++) {
    let key = info.key(i);
    let parse2 = JSON.parse(info.getItem(key));
    if (
      user.value == parse2.Username &&
      pass.value == parse2.Password
    ) {
      parse2.condition = true;
      localStorage.setItem(key, JSON.stringify(parse2));
      window.location.href = 'Homepage/homepage.html';
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

function condition() {
  let storage = localStorage;
  for (let i = 0; i < storage.length;i++){
      var key = storage.key(i);
      let parsing = JSON.parse(storage.getItem(key));
      if (parsing.condition == true) {
          parsing.condition = false;
          parsing.product = [];
      }
  }
}

condition();