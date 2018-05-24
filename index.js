let twelveHourTime = true;

const displayDateTime = function displayDateTime() {
  let timeStamp = new Date;
  let date = timeStamp.toLocaleString("en-us", { weekday: "short", month: "long", day: "numeric", year: "numeric"});
  let time = timeStamp.toLocaleString("en-us", { hour12: twelveHourTime, hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" });
  $('#clock').html(date);
  $('#clock').append('<br>')
  $('#clock').append(time);
  $('#clock-change').html(`Change to ${twelveHourTime ? 24 : 12}-Hour Clock`);
};

$(document).ready(() => {
  let timer = setInterval(displayDateTime, 1000);

  $('#red-button').click(function() {
    $('body').removeClass();
    $('body').addClass('red');
  });

  $('#orange-button').click(function() {
    $('body').removeClass();
    $('body').addClass('orange');
  });

  $('#yellow-button').click(function() {
    $('body').removeClass();
    $('body').addClass('yellow');
  });

  $('#green-button').click(function() {
    $('body').removeClass();
    $('body').addClass('green');
  });

  $('#blue-button').click(function() {
    $('body').removeClass();
    $('body').addClass('blue');
  });

  $('#purple-button').click(function() {
    $('body').removeClass();
    $('body').addClass('purple');
  });

  $('#clock-change').click(function() {
    clearInterval(timer);
    twelveHourTime = !twelveHourTime;
    timer = setInterval(displayDateTime, 1000);
  });
});
