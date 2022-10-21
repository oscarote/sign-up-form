const password = document.querySelector("input[name=password]");
const confirmPwd = document.querySelector("input[name=confirmpassword]");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
let isPwdMatch = false;

function validatePwd() {
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(password.value))) {
        error1.innerText = "Password must contain a lowercase, an uppercase and a number";
        password.classList.add("error");
    } else {
        error1.innerText = "";
        error2.innerText = "Password does not match";
        password.classList.remove("error");
    }
}

function matchPwd() {
    if (password.value !== confirmPwd.value) {
        error2.innerText = "Password does not match";
        confirmPwd.classList.add("error");
        return false;
    } else {
        error2.innerText = "";
        confirmPwd.classList.remove("error");
        return true;
    }
}

confirmPwd.addEventListener("input", () => matchPwd());
password.addEventListener("input", () => validatePwd());