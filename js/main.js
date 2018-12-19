var mapImg  = document.querySelector(".map-link");
var popUp = document.querySelector(".popup");
var close = document.querySelector(".map-close");
var writeUs = document.querySelector(".write-to-us");
var form = document.querySelector(".main-popup");
var modClose = document.querySelector(".modal-close");
var nameField = document.querySelector("#name-field");
var mailField = document.querySelector("#e-mail-field");
var formButton = document.querySelector(".button");

nameField.addEventListener("invalid", function(e) {
  nameField.setCustomValidity("Name field must contain 3 or more characters")
  form.classList.add("error");
});

nameField.addEventListener("click", function(fieldEv) {
  form.classList.remove("error");
});

form.addEventListener("animationend",  function() {
  form.classList.add("animation-finished");
});
// открытие формы
writeUs.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.add("show");
});
// закрытие формы
modClose.addEventListener("click", function(e) {
  e.preventDefault();
  form.classList.remove("show");
  form.classList.remove("animation-finished");
});
// открытие карты
mapImg.addEventListener("click", function(e) {
  e.preventDefault();
  popUp.classList.add("modal-show");
});
// закрытие карты
close.addEventListener("click", function(event) {
  event.preventDefault();
  popUp.classList.remove("modal-show");
});
// закрытие карты esc
window.addEventListener("keydown", function(e) {
  if (e.keyCode == 27) {
    if (popUp.classList.contains("modal-show")) {
      popUp.classList.remove("modal-show");
    }
  }
});
// закрытие формы esc
window.addEventListener("keydown", function(e) {
  if (e.keyCode == 27) {
    if (form.classList.contains("show")) {
      form.classList.remove("show");
      form.classList.remove("animation-finished");
    }
  }
});
// карта
function initMap () {
  var pos = {lat: 55.687061, lng: 37.529607};
  var opt = {
    center: pos,
    zoom: 17
  };
  var map = new google.maps.Map(document.querySelector(".map-popup"), opt);
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
};
