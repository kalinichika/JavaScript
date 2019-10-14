window.onload = function() {
  let items = document.querySelectorAll(".items .item");

  // создание визувльной активности элемента
  function activeItem() {
    this.classList.toggle("item-active");
  }

  for (var i = 0; i < items.length; i++) {
    //items[i].onclick = activeItem;
    items[i].onclick = function() {
      fade(this, 1000, function() {
        this.style.display = "none";
      });
    };
  }

  /*рандомное мигание элементов
    setInterval(function() {
    var rand = mtRand(0, items.length - 1);
    activeItem.call(items[rand]);
  }, 500);*/
};

// возвращаем рандомное число
function mtRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

// скрываем элемнт, уменьшая opacity
function fade(elem, t, f) {
  let fps = 50;
  let time = t || 500;
  let steps = time / fps;
  let op = 1;
  let d0 = op / steps;

  let callback = f || function() {};

  let timer = setInterval(function() {
    op -= d0;
    elem.style.opacity = op;
    steps--;

    if (steps === 0) {
      clearInterval(timer);
      callback.call(elem);
    }
  }, 1000 / fps);
}
