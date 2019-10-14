document.querySelector("button").onclick = function() {
  alert("Ты нажал на кнопочку");
};
//document.querySelector("button").addEventListener("click", event => alert('Ты нажал на кнопочку.'));

document.querySelector("h1").onclick = function() {
  alert("Сайт в розовом цвете!");
};
/*
document.getElementById("remove-button").onclick = function() {
  document.getElementById("remove-button").parentElement.style.display = "none";
};
*/
document.body.addEventListener("click", function(event) {
  let activ = event.target;
  if (activ.className == "remove-button") {
    activ.parentElement.style.display = "none";
    //alert(" К Л И К ");
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
