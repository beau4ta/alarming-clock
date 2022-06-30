var timeDisplay = document.querySelector('.time');
var currentTime = moment().format('LTS');


var renderClock = () => {
    timeDisplay.textContent = currentTime;
}

renderClock();
setInterval(renderClock, 1000);
