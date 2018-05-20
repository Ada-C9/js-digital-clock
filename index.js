// Set time Zones

// Seattle time
let SeattleTime = new Date();

// DC time
let DCTime = new Date();
let DCOffset = 3*60;
DCTime.setMinutes(DCTime.getMinutes() + DCOffset);

// Cairo time
let CairoTime = new Date();
let CairoOffset = 9*60;
CairoTime.setMinutes(CairoTime.getMinutes() + CairoOffset);

// Shanghai time
let ShanghaiTime = new Date();
let ShanghaiOffset = 15*60;
ShanghaiTime.setMinutes(ShanghaiTime.getMinutes() + ShanghaiOffset);

// set the interval to increment by 1 second
const interval = 1000;

function updateTime() {
  SeattleTime = new Date(SeattleTime.getTime() + interval);

  // slice the GMT-0700 off the date object
  $('#seattle').html(`<strong>Seattle, WA: </strong><br>${SeattleTime.toString().split(' ').slice(0, 5).join(' ')}`);
}

function updateDCTime() {
  DCTime = new Date(DCTime.getTime() + interval);
  $('#dc').html(`<strong>Washington, DC: </strong><br>${DCTime.toString().split(' ').slice(0, 5).join(' ')}`);
}

function updateCairoTime() {
  CairoTime = new Date(CairoTime.getTime() + interval);
  $('#cairo').html(`<strong>Cairo, Egypt: </strong><br>${CairoTime.toString().split(' ').slice(0, 5).join(' ')}`);
}

function updateShanghaiTime() {
  ShanghaiTime = new Date(ShanghaiTime.getTime() + interval);
  $('#shanghai').html(`<strong>Shanghai, China: </strong><br>${ShanghaiTime.toString().split(' ').slice(0, 5).join(' ')}`);
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

$(document).ready(() => {
  updateShanghaiTime();
  setInterval(updateShanghaiTime, interval);
});
