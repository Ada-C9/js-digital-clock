
const getMonthName = function getMonthName(num){
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  return months[num];
}

const getNominalHours = function getNominalHours(num){
  return (num > 12 ? (num - 12) : num);
}

const getNominalMinutesSeconds = function getNominalMinutesSeconds(num){
  return (num < 10 ? `0${num}` : num);
}

setInterval(function () {
  let date = new Date()

  let legibleDate = `${getMonthName(date.getMonth())} ${date.getDay()},
  ${date.getFullYear()}`;

  let legibleTime = `${getNominalHours(date.getHours())} :
  ${getNominalMinutesSeconds(date.getMinutes())} : ${getNominalMinutesSeconds(date.getSeconds())}`;
  $('#clock').empty();
  $('#clock').append(`<p>${legibleDate}</p>`);
  $('#clock').append(`<p>${legibleTime}</p>`);
}, 1000);

// function displayDateTime() {
//   let date = new Date()
//
//   let legibleDate = `${getMonthName(date.getMonth())} ${date.getDay()},
//   ${date.getFullYear()}`;
//
//   let legibleTime = `${getNominalHours(date.getHours())} :
//   ${getNominalMinutesSeconds(date.getMinutes())} : ${getNominalMinutesSeconds(date.getSeconds())}`;
//   // $('#clock').empty();
//   $('#clock').append(`<p>${legibleDate}</p>`);
//   $('#clock').append(`<p>${legibleTime}</p>`);
// }

// setInterval(displayDateTime(), 1000);

// or just use Date.prototype.getTime()
