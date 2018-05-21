// Your code here
let time = new Date();
// let hourdiff = 3
// let timediff = hourdiff * 60 + time.getTimezoneOffset();
let intervalID = setInterval(() => {
  $('#clock').html(new Date())
}, 1000);


// function updateTime() {
// $('#timeZone1').html(time)
// }



console.log('YougotTime');
$(document).ready(() => {
  console.log(intervalID);

});
