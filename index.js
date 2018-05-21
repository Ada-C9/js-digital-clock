// Your code here


console.log('This is a test');

let target = document.getElementById('clock');  // Find the HTML element where the ID is js-lecture-target

let now = Date.now();
let nowDate = new Date(now);
let nowHour = nowDate.getHours();
let nowMinute = nowDate.getMinutes();
let nowSecond = nowDate.getSeconds();

let timeReport = `${nowHour}:${nowMinute}:${nowSecond}`

target.innerHTML = timeReport
