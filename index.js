
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
  let date1 = new Date()

  let legibleDate1 = `${getMonthName(date1.getMonth())} ${date1.getDay()},
  ${date1.getFullYear()}`;

  let legibleTime1 = `${getNominalHours(date1.getHours())} :
  ${getNominalMinutesSeconds(date1.getMinutes())} : ${getNominalMinutesSeconds(date1.getSeconds())}`;

  $('#clock').empty();
  $('#clock').append('<p>Pacific Time Zone 1</p>')
  $('#clock').append(`<p>${legibleDate1}</p>`);
  $('#clock').append(`<p>${legibleTime1}</p>`);

  let date2 = new Date()

  let legibleDate2 = `${getMonthName(date2.getMonth())} ${date2.getDay()},
  ${date2.getFullYear()}`;

  let legibleTime2 = `${getNominalHours(date2.getHours())} :
  ${getNominalMinutesSeconds(date2.getMinutes())} : ${getNominalMinutesSeconds(date2.getSeconds())}`;

  $('#clock').append('<p>Pacific Time Zone 2</p>')
  $('#clock').append(`<p>${legibleDate2}</p>`);
  $('#clock').append(`<p>${legibleTime2}</p>`);

  let date3 = new Date()

  let legibleDate3 = `${getMonthName(date3.getMonth())} ${date3.getDay()},
  ${date3.getFullYear()}`;

  let legibleTime3 = `${getNominalHours(date3.getHours())} :
  ${getNominalMinutesSeconds(date3.getMinutes())} : ${getNominalMinutesSeconds(date3.getSeconds())}`;

  $('#clock').append('<p>Pacific Time Zone 3</p>')
  $('#clock').append(`<p>${legibleDate3}</p>`);
  $('#clock').append(`<p>${legibleTime3}</p>`);

  let date4 = new Date()

  let legibleDate4 = `${getMonthName(date4.getMonth())} ${date4.getDay()},
  ${date4.getFullYear()}`;

  let legibleTime4 = `${getNominalHours(date4.getHours())} :
  ${getNominalMinutesSeconds(date4.getMinutes())} : ${getNominalMinutesSeconds(date4.getSeconds())}`;

  $('#clock').append('<p>Pacific Time Zone 4</p>')
  $('#clock').append(`<p>${legibleDate4}</p>`);
  $('#clock').append(`<p>${legibleTime4}</p>`);
}, 1000);



//why doesnt this work ? :
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
