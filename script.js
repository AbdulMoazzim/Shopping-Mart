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
  console.log(info.length)
  if (info.length != 0) {
    for (let i in info) {
      let parse1 = JSON.parse(info[i]);
      if (user.value == parse1.Username) {
        user.value = "";
        FullName.value = "";
        pass.value = "";
        alert("User Name not available");
        return;
      }
    }
  }
  localStorage.setItem(JSON.stringify(i), JSON.stringify({Name: FullName.value, Username : user.value, Password: pass.value,condition: false}));
  alert("Account Created");
  user.value = "";
  FullName.value = "";
  pass.value = "";
  return;
}
function listener2() {
  let FullName = document.querySelector("#name");
  let pass = document.querySelector("#password");
  let user = document.querySelector("#user");
  if (user.value === "" || pass.value === ""){
    alert("Provide All Credentials to Log in!")
    return;
  }
  for (let i in info) {
    let parse2 = JSON.parse(info[i]);
    if (
      user.value == parse2.Username &&
      pass.value == parse2.Password
    ) {
      let conditionForLog = true;
      localStorage.setItem(JSON.stringify(`user${info.length+1}`), JSON.stringify({Name: FullName.value, Username : user.value, Password: pass.value,condition: conditionForLog}));
      window.location.href = 'Store/homepage.html';
      return;
    }
  }
  FullName.value = "";
  user.value = "";
  pass.value = "";
  alert("Invalid credentials");
  return;
}

let acc1 = document.querySelector("#accSign");
acc1.addEventListener("click", listener1);