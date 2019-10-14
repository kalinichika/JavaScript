document.addEventListener("click", event => {
  if (event.target.dataset.counter != undefined) event.target.value++;
});
