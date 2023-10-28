const sec_hand = document.querySelector('.sec-hand');
const min_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');

function setDate(){
    const CurDate = new Date();

// Set the options for formatting the time
    var options = {
    timeZone: 'Asia/Kolkata', // Set the time zone to India's time zone
    hour12: true ,//Set to true if you want 12-hour time format
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
    };

    // Get the current time in the specified time zone
    const timeArray = CurDate.toLocaleTimeString('en-IN', options).split(':');


// Extract the hours, minutes, and seconds
    const cur_hour = parseInt(timeArray[0]);
    const cur_min = parseInt(timeArray[1]);
    const cur_sec = parseInt(timeArray[2]);
    console.log(cur_hour, " ", cur_min, " ", cur_sec)
    const sec_rotate = (cur_sec/60) * 360 + 90;
    const min_rotate = (cur_min/60) * 360 + 90;
    const hour_rotate = (cur_hour/12) * 360 + 90;
    sec_hand.style.transform = `rotate(${sec_rotate}deg)`;
    min_hand.style.transform = `rotate(${min_rotate}deg)`;
    hour_hand.style.transform = `rotate(${hour_rotate}deg)`;
}
setInterval(setDate, 1000);