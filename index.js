// Your code here

function showTime(){

    let date = new Date();
    let hour = date.getHours(); // 0 - 23
    let minute = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let meridian = "AM";

    if(hour === 0){
        hour = 12;
    }

    if(hour > 12){
        hour = hour - 12;
        meridian = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + minute + ":" + second + " " + meridian;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setInterval(showTime, 1000);

}



showTime();
