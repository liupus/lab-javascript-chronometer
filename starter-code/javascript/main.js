var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  printMinutes ();
  printSeconds ();

}

function printMinutes() {
minDec.innerHTML = chronometer.min [0];
minUni.innerHTML = chronometer.min [1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.sec [0];
  secUni.innerHTML = chronometer.sec [1];

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
var currClass = btnRight.style.className;
if (btnLeft.className === "btn start") {
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  btnLeft.className = "btn stop";
  btnRight.className = "btn split";
  chronometer.startClick();
  winTimerID = window.setInterval (printTime,1000);
  console.log ("Starting Chrono");
}
else {
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
  btnLeft.className = "btn start";
  btnRight.className = "btn reset";
  chronometer.stopClick();
  console.log ("Stopping Chrono");
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var currClass

});
