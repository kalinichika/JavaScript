class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }
  save() {
    alert("Сохраняю");
  }
  load() {
    alert("Загружаю");
  }
  search() {
    alert("Ищу");
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

let menu = document.getElementById('menu');
new Menu(menu);
