let USEDate = new Date(2021, 6, 6, 9, 0);
let USESeconds = USEDate.getTime()

function showTimer(){
    let secondsBox = document.getElementById("seconds");
    let minutesBox = document.getElementById("minutes");
    let hoursBox = document.getElementById("hours");
    let daysBox = document.getElementById("days");

    let currentSeconds = new Date().getTime();

    seconds = Math.floor((USESeconds - currentSeconds) / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);

    secondsBox.innerHTML = seconds;
    minutesBox.innerHTML = minutes;
    hoursBox.innerHTML = hours;
    daysBox.innerHTML = days;
}

let timerId = setInterval(showTimer, 500);
