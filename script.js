var timeDisplay = document.querySelector('.time');
var dateDisplay =document.querySelector('.date');
var currentTime = moment().format('hh:mm A');
var currentDate = moment().format('dddd, MMMM Do YYYY')
var hourBtn = document.querySelector('.hour-btn');
var minBtn = document.querySelector('.min-btn');
var alarmBtn = document.querySelector('.alarm-btn');
var timeBtn = document.querySelector('.time-btn');
var saveBtn = document.querySelector('.save-btn');
var resetBtn = document.querySelector('.reset-btn');
var snoozeBtn = document.querySelector('.snooze')

dateDisplay.textContent = currentDate;

var renderClock = () => {
    timeDisplay.textContent = currentTime;
}

renderClock();
setInterval(renderClock, 60000);
