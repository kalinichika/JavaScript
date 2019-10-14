//let p = document.body.firstElementChild;
let p = document.querySelectorAll("p");

Array.from(p).map(item => {
  setTimeout(() => {
    if (item.className === "one") item.className = "two";
  }, 700);
  setTimeout(() => {
    if (item.className === "two") item.className = "three";
  }, 1400);
});

let elemsOne = Array.from(document.getElementsByClassName("one"));
let elemsTwo = Array.from(document.getElementsByClassName("two"));
let elems = elemsOne.concat(elemsTwo);

Array.from(elems).map(item => {
  item.addEventListener("click", display_none);
});

function display_none() {
  this.style.display = "none";
  setTimeout(() => (this.style.display = ""), 2000);
}

setTimeout(() => {
  document.body.style.cssText = `
  background-color: black;
  text-align: center,`;
}, 4000);

let computedStyle = getComputedStyle(p[0]);
console.log(computedStyle.fontFamily);

/* это из задания */

function showNotification({ top = 0, right = 0, className, html }) {
  let notification = document.createElement("div");
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + "px";
  notification.style.right = right + "px";

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Second " + i++,
    className: "welcome"
  });
}, 2000);
