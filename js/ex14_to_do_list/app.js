let addBtn = document.getElementsByClassName("addBtn")[0];
addBtn.addEventListener("click", newElement);

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  event => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      //       toggle -
      // добавляет класс к элементу,
      //   если он отстутствует в нем
      // иначе - удаляет
    } else if (event.target.tagName === "SPAN") {
      let div = event.target.parentNode;
      div.remove();
    }
  },
  false
);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("toDoEl").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == "") {
    alert("Введите ваше дело!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("toDoEl").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

document.querySelector("input").addEventListener("keyup", () => {
  if (event.code === "Enter") newElement();
});
