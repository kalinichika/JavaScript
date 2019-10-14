function createMessageUnder(elem, html) {
  let message = document.createElement("div");
  message.style.cssText = `
  position: absolute; // при fixed другое действие
  color: black; 
  background-color: pink`;
  let coords = elem.getBoundingClientRect();
  message.style.left = coords.left + "px";
  message.style.top = coords.top + window.pageYOffset + coords.height + "px";
  message.innerHTML = html;
  return message;
}

function createMessageBefore(elem, html) {
  let message = document.createElement("div");
  message.style.cssText = `
  position: absolute;
  color: black; 
  background-color: pink
  `;
  let coords = elem.getBoundingClientRect();
  message.style.left = coords.left + "px";
  message.style.top = coords.top + window.pageYOffset - 20 + "px";
  message.innerHTML = html;
  return message;
}

function createMessageRight(elem, html) {
  let message = document.createElement("div");
  message.style.cssText = `
  position: absolute; // при fixed другое действие
  color: black; 
  background-color: pink
  `;
  let coords = elem.getBoundingClientRect();
  message.style.left = coords.left + coords.width + "px";
  message.style.top = coords.top + window.pageYOffset + "px";
  message.innerHTML = html;
  return message;
}

function createMessageEver() {
  console.log(
    event.type +
      " на " +
      event.currentTarget +
      ", Координаты : X:" +
      event.clientX +
      ", Y:" +
      event.clientY
  );
  let elem = this;
  let text = "text text";
  let messages = [];
  messages[0] = createMessageUnder(elem, text);
  messages[1] = createMessageBefore(elem, text);
  messages[2] = createMessageRight(elem, text);
  for (let i = 0; i < 3; i++) {
    document.body.append(messages[i]);
    setTimeout(() => {
      messages[i].remove();
    }, 5000);
  }
}

let elem = document.getElementById("createMessage");

let message = createMessageUnder(elem, "Добавление текста ниже элемента.");
document.body.append(message);
setTimeout(() => message.remove(), 15000);

let text = document.getElementById("text");
text.addEventListener("click", createMessageEver);
//setTimeout(()=>text.removeEventListener('click', createMessageEver), 5000);
