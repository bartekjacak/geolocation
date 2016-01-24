var x = document.getElementById("map");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=400x300&sensor=false";
  var coords = "<p>Latitude: " + latitude + "</p> <p>Longitude: " + longitude + "</p>";

  x.innerHTML = "<img src='"+img_url+"'>" + coords;
}