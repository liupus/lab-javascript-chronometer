// Constructor

 function Chronometer() {
   this.min =0; 
   this.sec =0;
   this.currentTime=0;
   this.intervalId=-1;
}

Chronometer.prototype.timeHandler = function() {
  this.currentTime +=1;
  this.setTime();
}

Chronometer.prototype.startClick = function () {
this.intervalId = setInterval(this.timeHandler.bind(this),1000);
};

//this.intervalId= setInterval(GlobalTimerHandler,1000,this);

// 1. call setInterval()
// 2. 1 second goes by
// 3. this => myChro parameter
// 5. rune the function GlobalTimerHandler ()
// 6. myChro.currentTime +=1
// 6. Go back to Step 2

Chronometer.prototype.setMinutes = function (min) {
  this.min = Math.floor(this.currentTime/60);
  return this.min;
 };

Chronometer.prototype.setSeconds = function (sec) {
 this.sec=this.currentTime % 60;
 return this.sec;  
 };

Chronometer.prototype.twoDigitsNumber = function (time) {
  if (time < 10) {
    return "0" + time; }
  else return String (time);
};


 Chronometer.prototype.setTime = function () {
   this.min = this.twoDigitsNumber(this.setMinutes())
   this.sec = this.twoDigitsNumber(this.setSeconds()) 
 };

 Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
  clearInterval (this.intervalId)
 };

 Chronometer.prototype.resetClick = function () {
this.currentTime = 0;
this.intervalId = -1;
 };

 Chronometer.prototype.splitClick = function () {

 };
