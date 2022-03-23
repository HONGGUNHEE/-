const LoginForm = document.querySelector("#LogInForm-ID");
const LoginInput = document.querySelector("#LogInForm-ID input");
const LoginPW = document.querySelector("#password");
const Success = document.querySelector("#LoginSuccess");
const menuIcon = document.querySelector("#menubar");
const Tab = document.querySelector("#tabs");

const HIDDEN = "hidden"

function onLoginButton(event) {
    event.preventDefault();
    let username = LoginInput.value;
    let Password = LoginPW.value;
    console.log(username);
    console.log(Password);
    LoginForm.classList.add(HIDDEN);
    Success.innerText = "Hello " + username;
    Success.classList.remove(HIDDEN);
    menuIcon.classList.add("container");
    menuIcon.classList.remove(HIDDEN);
}

function myFunction(x) {
    x.classList.toggle("change");
    openNav()
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

LoginForm.addEventListener("submit", onLoginButton)