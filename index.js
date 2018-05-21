

$(document).ready(() => {
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
    let date = new Date();

    let legibleDate = `${getMonthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;

    let legibleTime = `${getNominalHours(date.getHours())} :
    ${getNominalMinutesSeconds(date.getMinutes())} : ${getNominalMinutesSeconds(date.getSeconds())}`;

    $('#clock1').empty();
    $('#clock1').append('<li>Pacific US Time</li>')
    $('#clock1').append(`<li>${legibleDate}</li>`);
    $('#clock1').append(`<li>${legibleTime}</li>`);

    let date2 = new Date()
    // do I have to reset this value to date2?
    //why doesnt it work like this:
    // date2 = date2.setHours(date2.getHours() + 3);
    date2.setHours(date2.getHours() + 3);


    let legibleDate2 = `${getMonthName(date2.getMonth())} ${date2.getDate()},
    ${date2.getFullYear()}`;

    let legibleTime2 = `${getNominalHours(date2.getHours())} :
    ${getNominalMinutesSeconds(date2.getMinutes())} : ${getNominalMinutesSeconds(date2.getSeconds())}`;

    $('#clock2').empty();
    $('#clock2').append('<li>Eastern US Time</li>')
    $('#clock2').append(`<li>${legibleDate2}</li>`);
    $('#clock2').append(`<li>${legibleTime2}</li>`);

    let date3 = new Date()
    date3.setHours(date3.getHours() + 7);


    let legibleDate3 = `${getMonthName(date3.getMonth())} ${date3.getDate()},
    ${date3.getFullYear()}`;

    let legibleTime3 = `${getNominalHours(date3.getHours())} :
    ${getNominalMinutesSeconds(date3.getMinutes())} : ${getNominalMinutesSeconds(date3.getSeconds())}`;

    $('#clock3').empty();
    $('#clock3').append('<li>UTC Time Zone</li>')
    $('#clock3').append(`<li>${legibleDate3}</li>`);
    $('#clock3').append(`<li>${legibleTime3}</li>`);

    let date4 = new Date()
    date4.setHours(date4.getHours() + 9);

    let legibleDate4 = `${getMonthName(date4.getMonth())} ${date4.getDate()},
    ${date4.getFullYear()}`;

    let legibleTime4 = `${getNominalHours(date4.getHours())} :
    ${getNominalMinutesSeconds(date4.getMinutes())} : ${getNominalMinutesSeconds(date4.getSeconds())}`;

    $('#clock4').empty();
    $('#clock4').append('<li>Troll Station Antartica Time</li>')
    $('#clock4').append(`<li>${legibleDate4}</li>`);
    $('#clock4').append(`<li>${legibleTime4}</li>`);
  }, 1000);

  $('#red').click( function() {
    $('#clock').removeClass();
    $('#clock').addClass('red');
  });

  $('#black').click( function() {
    $('#clock').removeClass();
    $('#clock').addClass('black');
  });

  $('#yellow').click( function() {
    $('#clock').removeClass();
    $('#clock').addClass('yellow');
  });
});
