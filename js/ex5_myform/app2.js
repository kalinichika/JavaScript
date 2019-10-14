let name = document.getElementById("userName");
let pass = document.getElementById("password");
let conf = document.getElementById("confirm");
let btn = document.getElementById("ok-password");

//Для имени
name.addEventListener("keydown", () => {
  if (name.value.match(/[A-Za-z]+/g)) {
    name.classList.remove("invalid");
  } else {
    name.classList.add("invalid");
  }
});

// Для пароля
pass.addEventListener("keyup", () => {
  if (checkedPassword(pass.value) === true) {
    pass.classList.remove("invalid");
  } else {
    pass.classList.add("invalid");
  }
  checkedConfirm();
});

// Для подтверждения пароля
conf.addEventListener("keyup", checkedConfirm);

//две цифры, три символа подряд нельзя, две большие буквы
function checkedPassword(pass) {
  if (pass.length < 6) return false;
  if (pass.match(/(?=[0-9])/g) == null || pass.match(/(?=[0-9])/g).length < 2)
    return false;
  if (!pass.match(/(?=[a-z])/g)) return false;
  if (pass.match(/(?=[A-Z])/g) == null || pass.match(/(?=[A-Z])/g).length < 2)
    return false;
  if (!pass.match(/(?=[!@#$%^&*])/g)) return false;
  if (pass.match(/(\w)\1\1/g)) return false;
  return true;
}

function checkedConfirm() {
  if (pass.value === conf.value) {
    conf.classList.remove("invalid");
    if (btn.getAttribute("disabled")) btn.removeAttribute("disabled");
  } else {
    conf.classList.add("invalid");
    if (!btn.getAttribute("disabled")) btn.setAttribute("disabled", true);
  }
}
