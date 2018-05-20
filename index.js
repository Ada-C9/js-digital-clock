let SeattleTime = new Date();

// set the interval to increment by 1 second
const interval = 1000;

// DC time
let DCTime = new Date();
let DCOffset = 3*60;
DCTime.setMinutes(DCTime.getMinutes() + DCOffset);

// Cairo time
let CairoTime = new Date();
let CairoOffset = 9*60;
CairoTime.setMinutes(CairoTime.getMinutes() + CairoOffset);


function updateTime() {
  SeattleTime = new Date(SeattleTime.getTime() + interval);

  // slice the GMT-0700 off the date object
  $('#seattle').html(`Seattle: <br>${SeattleTime.toString().split(' ').slice(0, 5).join(' ')}`);
}

function updateDCTime() {
  DCTime = new Date(DCTime.getTime() + interval);
  $('#dc').html(DCTime.toString().split(' ').slice(0, 5).join(' '));
}

function updateCairoTime() {
  CairoTime = new Date(CairoTime.getTime() + interval);
  $('#cairo').html(CairoTime.toString().split(' ').slice(0, 5).join(' '));
}

$(document).ready(() => {
  updateTime();
  setInterval(updateTime, interval);
});

$(document).ready(() => {
  updateDCTime();
  setInterval(updateDCTime, 1000);
});

$(document).ready(() => {
  updateCairoTime();
  setInterval(updateCairoTime, interval);
});
