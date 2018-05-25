// Your code here
// let target = document.getElementById('clock');  // Find the HTML element where the ID is js-lecture-target
// target.innerHTML = '<p>Here is the clock!</p>';
//   const now = new Date();
//   let day = now.getDays();
//   target.innerHTML = `<li> date ${day}</li>`;


const dateDisplay = () => {
  const nows = new Date(Date.now());
  $('#clock').empty();
  $('#clock').append(`<li> This month is month ${nows.getMonth()} </li>`);
  $('#clock').append(`<li> Today is day ${nows.getDay()} </li>`);
  $('#clock').append(`<li>The hour is hour ${nows.getHours()}</li>`);
  $('#clock').append(`<li>The minute is minute ${nows.getMinutes()}</li>`);
  $('#clock').append(`<li>The second is second ${nows.getSeconds()}<li>`);

};


$(document).ready(() => {
  setInterval(dateDisplay, 1000);
});
