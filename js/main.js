var mapImg  = document.querySelector(".map-link");
var popUp = document.querySelector(".popUp");
mapImg.addEventListener("click", function(e) {
  e.preventDefault();
  popUp.classList.add('modal-show');
});
window.addEventListener("keydown", function(e) {
  if(e.keyCode == 27) {
    if(popUp.classList.contains("modal-show")) {
      popUp.classList.remove("modal-show");
    }
  }
});

function initMap () {
  var pos = {lat: 55.687061, lng: 37.529607};
  var opt = {
    center: pos,
    zoom: 17
  };
  var map = new google.maps.Map(document.querySelector(".mapPopUp"), opt);
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
};
