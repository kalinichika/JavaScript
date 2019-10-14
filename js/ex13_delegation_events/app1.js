let table = document.body.querySelector("table");

let selectedTd;

table.addEventListener("click", event => {
  let td = event.target.closest("td"); // ;элемент, по которому был "клик"
  if (!td) return;
  if (!table.contains(td)) return; //если клик по <strong>
  highlight(td); // подсвечиваем
});

function highlight(td) {
  if (selectedTd) {
    selectedTd.classList.remove("highlight");
  }
  selectedTd = td;
  selectedTd.classList.add("highlight");
}
