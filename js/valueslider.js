var slider_elem = document.querySelector('#value-slider-container input[type="range"]');

var rangeValue = function(){
  var newValue = slider_elem.value;
  var target = document.querySelector('.value-slider');
  target.innerHTML = newValue;
}

slider_elem.addEventListener("input", rangeValue);