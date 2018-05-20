// Your code here
let time = new Date();
let intervalID = setInterval(() => {
  $('#clock').html(new Date())
}, 1000);


// function updateTime() {
// $('#clock').append(time)
// }

console.log('YougotTime');
$(document).ready(() => {
  console.log(intervalID);

});
