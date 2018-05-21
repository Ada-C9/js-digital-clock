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

function updateTime24() {
  SeattleTime = new Date(SeattleTime.getTime() + interval);

  // slice the GMT-0700 off the date object
  $('#seattle').html(`<strong>Seattle, WA: </strong><br>${SeattleTime.toString().split(' ').slice(0, 5).join(' ')}`);
}

function updateDCTime24() {
  DCTime = new Date(DCTime.getTime() + interval);
  $('#dc').html(`<strong>Washington, DC: </strong><br>${DCTime.toString().split(' ').slice(0, 5).join(' ')}`);
}

function updateCairoTime24() {
  CairoTime = new Date(CairoTime.getTime() + interval);
  $('#cairo').html(`<strong>Cairo, Egypt: </strong><br>${CairoTime.toString().split(' ').slice(0, 5).join(' ')}`);
}

function updateShanghaiTime24() {
  ShanghaiTime = new Date(ShanghaiTime.getTime() + interval);
  $('#shanghai').html(`<strong>Shanghai, China: </strong><br>\n
    ${ShanghaiTime.toString().split(' ').slice(0, 5).join(' ')}`);
  }

// update times for 12 hour format
function updateTime12() {
  SeattleTime = new Date(SeattleTime.getTime() + interval);
  let hours = SeattleTime.getHours();
  let minutes = SeattleTime.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = location.toString().split(' ').slice(1, 4).join(' ');
  strTime = strTime + ' ' + hours + ':' + minutes + ' ' + ampm;
  $('#seattle').html(`<strong>Seattle, WA: </strong>${strTime}<br>`);
}

function updateDCTime12() {
  DCTime = new Date(DCTime.getTime() + interval);
  let hours = DCTime.getHours();
  let minutes = DCTime.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = location.toString().split(' ').slice(1, 4).join(' ');
  strTime = strTime + ' ' + hours + ':' + minutes + ' ' + ampm;
  $('#dc').html(`<strong>Washington, DC: </strong>${strTime}<br>`);
}

function updateCairoTime12() {
  CairoTime = new Date(CairoTime.getTime() + interval);
  let hours = CairoTime.getHours();
  let minutes = CairoTime.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = location.toString().split(' ').slice(1, 4).join(' ');
  strTime = strTime + ' ' + hours + ':' + minutes + ' ' + ampm;
  $('#cairo').html(`<strong>Cairo, Egypt: </strong>${strTime}<br>`);
}

function updateShanghaiTime12() {
  ShanghaiTime = new Date(ShanghaiTime.getTime() + interval);
  let hours = ShanghaiTime.getHours();
  let minutes = ShanghaiTime.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = location.toString().split(' ').slice(1, 4).join(' ');
  strTime = strTime + ' ' + hours + ':' + minutes + ' ' + ampm;
  $('#shanghai').html(`<strong>Shanghai, China: </strong>${strTime}<br>`);
}

  $(document).ready(() => {
    if ($('body').hasClass('24-hours')) {
      updateTime24();
      setInterval(updateTime24, interval);
      updateDCTime24();
      setInterval(updateDCTime24, interval);
      updateCairoTime24();
      setInterval(updateCairoTime24, interval);
      updateShanghaiTime24();
      setInterval(updateShanghaiTime24, interval);
    }

    if ($('body').hasClass('12-hours')) {
      updateTime12();
      setInterval(updateTime12, interval);
      updateDCTime12();
      setInterval(updateDCTime12, interval);
      updateShanghaiTime12();
      setInterval(updateShanghaiTime12, interval);
      updateCairoTime12();
      setInterval(updateCairoTime12, interval);
    }
  });


  $(document).ready(() => {
    $('button').click ( function() {
      if ($(this).html() === 'Lilac') {
        $('#border').css('background-color', '#D7BDE2');
      } else if ($(this).html() === 'Pink') {
        $('#border').css('background-color', '#F5B7B1');
      } else if ($(this).html() === 'Blue') {
        $('#border').css('background-color', '#5D8CAE');
      }
    });
  });

  $(document).ready(() => {
    $('.time-btn').click ( function() {
      if($(this).html() === '12 hours') {
        $(this).html('24 hours');
        $('body').addClass('24-hours');
      } else {
        $(this).html('12 hours')
        $('body').addClass('12-hours');
      }
    });
  });
