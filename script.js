// GET YEAR
document.getElementById("year").innerHTML = new Date().getFullYear();

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;

  var a = value * 130;
  var b = value * 13;
  var c = value * 0.26;
  var d = value * 0.05;

  document.getElementById("carbon").innerHTML = a.toFixed(0) + "g";
  document.getElementById("bags").innerHTML = b.toFixed(0);
  document.getElementById("beer").innerHTML = c.toFixed(0);
  document.getElementById("burger").innerHTML = d.toFixed(0);
}


window.onload = rangeSlide(21);