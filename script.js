var currentTime = moment().format('h:mm A');
var currentDate = moment().format('dddd, MMMM Do YYYY')
var alarmHour = 1;
var alarmHourIndex = 1;
var alarmMin = 0;
var amPm = 'AM'
var alarmTime = localStorage.getItem('alarm');
var alarmSound = document.querySelector('.alarm-sound');
var newAlarm;

if (alarmTime === null) {
    alarmTime = alarmHour + ':0' + alarmMin + ' ' + amPm
}

console.log(alarmTime, currentTime);

var soundAlarm = () => {
    alarmSound.play();
}

var pauseAlarm = () => {
    alarmSound.pause();
}

$('#switch').on('change', (function () {
    if (this.checked) {
        console.log('switch on')
        if (alarmTime === currentTime) {
            soundAlarm();
        };
    } else {
        console.log('switch off')
        pauseAlarm();
    };
}));

var renderDate = () => {
    $('.date').text(currentDate);
};

var renderClock = () => {
    $('.time').text(currentTime);
};

var toggleAlarm = () => {
        if (alarmMin < 10) {
            let alarmTime = alarmHour + ':0' + alarmMin + ' ' + amPm;
            $('.time').text(alarmTime);
            newAlarm = alarmTime;
            console.log(newAlarm)
        };

        if (alarmMin >= 10) {
            let alarmTime = alarmHour + ':' + alarmMin + ' ' + amPm;
            $('.time').text(alarmTime);
            newAlarm = alarmTime;
        };
    };

var toggleTime = () => {
    $('.time').text(currentTime);
};

var setHour = () => {
    alarmHour++;
    alarmHourIndex++;

    console.log(alarmHour);
    console.log(alarmHourIndex);

    if (alarmHourIndex >= 12) {
        amPm = 'PM';
    } else {
        amPm = 'AM';
    }

    if (alarmMin < 10) {
        alarmTime = alarmHour + ':0' + alarmMin + ' ' + amPm;
        $('.time').text(alarmTime);
        newAlarm = alarmTime;
    };

    if (alarmMin >= 10) {
        alarmTime = alarmHour + ':' + alarmMin + ' ' + amPm;
        $('.time').text(alarmTime);
        newAlarm = alarmTime;
    };

    if (alarmHour > 12) {
        alarmHour = 1;
        if (alarmMin < 10) {
            let alarmTime = alarmHour + ':0' + alarmMin + ' ' + amPm;
            $('.time').text(alarmTime);
            newAlarm = alarmTime;
        };

        if (alarmMin >= 10) {
            let alarmTime = alarmHour + ':' + alarmMin + ' ' + amPm;
            $('.time').text(alarmTime);
            newAlarm = alarmTime;
        };
    };

    if (alarmHourIndex > 23) {
        alarmHourIndex = 1;
    };
};

var setMin = () => {
    alarmMin++
    console.log(alarmMin)
    if (alarmMin < 10) {
        let alarmTime = alarmHour + ':0' + alarmMin + ' ' + amPm;
        $('.time').text(alarmTime);
        newAlarm = alarmTime;
    };

    if (alarmMin >= 10) {
        let alarmTime = alarmHour + ':' + alarmMin + ' ' + amPm;
        $('.time').text(alarmTime);
        newAlarm = alarmTime;
    };

    if (alarmMin > 59) {
        alarmMin = 0;
        let alarmTime = alarmHour + ':' + alarmMin + ' ' + amPm;
        $('.time').text(alarmTime);
        newAlarm = alarmTime;
    };
};

var saveAlarm = () => {
    console.log(newAlarm)

    localStorage.setItem('alarm', newAlarm);
    window.alert('Alarm Saved!');
};

var resetAlarm = () => {
    localStorage.clear();
};

var snoozeAlarm = () => {
    pauseAlarm();
    setInterval(soundAlarm, 300000);
}

renderDate();
renderClock();
setInterval(renderClock, 60000);

$('.alarm-btn').on('click', toggleAlarm);
$('.time-btn').on('click', toggleTime);
$('.hour-btn').on('click', setHour);
$('.min-btn').on('click', setMin);
$('.save-btn').on('click', saveAlarm);
$('.reset-btn').on('click', resetAlarm);
