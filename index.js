
const new_date = () => new Date();

let hoursVar = true;

const parseDate = (dateObj, hours=hoursVar) => {

  const localDate = dateObj.toLocaleString(
    'en-US',{
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  );

  const localTime = dateObj.toLocaleString(
    'en-US',{
      hour12: hours,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    }
  );

  $('#clock').html(`<div>${localDate}</div>`);
  $('#clock').append(`<div>${localTime}</div>`);
};



$(document).ready(() => {
  setInterval(function() { parseDate(new_date())}, 1000);

  $('.color').click(function(){
    $('body').removeClass();
    $('body').addClass(this.outerText);
  });

  $('.hours').click(function(){
    if (hoursVar) {
      hoursVar = false;
    } else {
      hoursVar = true;
    }
  });

})
