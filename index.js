// Your code here
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];

const WEEKS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const timeBuilder = () => {
  let seattleTime = new Date();
  let time = '';
  time += seattleTime.getFullYear();
  time += ' ' + MONTHS[seattleTime.getMonth() - 1];
  time += ' ' + seattleTime.getDate();
  time += ',' + WEEKS[seattleTime.getDay()];
  time += ' ' + seattleTime.getHours();
  time += ':' + seattleTime.getMinutes();
  time += ':' + seattleTime.getSeconds();
  $('#clock').html(time);
};

let runClock = setInterval(timeBuilder, 1000);

$(document).ready( () => {
  $('#clock').html(runClock);
})
