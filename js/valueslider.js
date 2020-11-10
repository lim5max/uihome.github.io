var slider_elem = document.querySelector('#value-slider-container input[type="range"]');

var rangeValue = function(){
  var newValue = slider_elem.value;
  var target = document.querySelector('.value-slider');
  target.innerHTML = newValue;
}

slider_elem.addEventListener("input", rangeValue);var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

const input = document.querySelector('#circle-container input');
const button1 = document.querySelector('#circle-container #min');
const button2 = document.querySelector('#circle-container #plus');
setProgress(input.value);
console.log(input.value)

button1.addEventListener('click', function(e) {
console.log(1)
  if ( parseInt(input.value) < 101 && parseInt(input.value) > -1) {
    setProgress(parseInt(input.value));
  }  
})
button2.addEventListener('click', function(e) {
console.log(1)
  if ( parseInt(input.value) < 101 && parseInt(input.value) > -1) {
    setProgress(parseInt(input.value));
  }  
})

