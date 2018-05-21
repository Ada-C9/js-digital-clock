
const new_date = () => new Date();

const parseDate = (dateObj) => {

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
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    }
  );

  $('#clock').html(`<div>${localDate}</div>`)
  $('#clock').append(`<div>${localTime}</div>`)
};



$(document).ready(() => {
  setInterval(function() { parseDate(new_date())}, 1000);
})
