// It automatically do a date nowwhen called so it doessn matter that I don't use date.now right?
let date = new Date()

const getMonthName = function getMonthName(num){
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  return months[num];
}

//this function works with an integer in the console
const getNominalHours = function getNominalHours(num){
  return (num > 12 ? (num - 12) : num);
}

const getNominalMinutes = function getNominalMinutes(num){
  return (num < 10 ? `0${num}` : num);
}

let legibleDate = `${getMonthName(date.getMonth())} ${date.getDay()},
${date.getFullYear()}`;

let legibleTime = `${getNominalHours(date.getHours())} :
${getNominalMinutes(date.getMinutes())} : ${date.getSeconds()}`;

// $('#clock').append(`<p>${legibleDate}</p>`);
// $('#clock').append(`<p>${legibleTime}</p>`);


function updateDateTime() {
  // $('#clock').empty()

  $('#clock').append(`<p>${legibleDate}</p>`);
  $('#clock').append(`<p>${legibleTime}</p>`);
}

setInterval(updateDateTime(), 1000);

// or just use Date.prototype.getTime()
console.log(legibleDate);
console.log(legibleTime);
