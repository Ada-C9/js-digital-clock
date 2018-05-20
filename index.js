let SeattleTime = new Date();

// set the interval to increment by 1 second
const interval = 1000;


let DCTime = new Date();


function updateTime() {
  SeattleTime = new Date(SeattleTime.getTime() + interval);

  // slice the GMT-0700 off the date object
  $('#clock').html(SeattleTime.toString().split(' ').slice(0, 5).join(' '));
}

function updateDCTime() {
  DCTime.setHours(SeattleTime.getHours() + 3 ) ;
  DCTime = new Date(DCTime.getTime() + interval);

  $('#DC').html(DCTime.toString().split(' ').slice(0, 5).join(' '));
}

$(document).ready(() => {
  updateTime();
  setInterval(updateTime, interval);
});

$(document).ready(() => {
  updateDCTime();
  setInterval(updateDCTime, interval);
});
