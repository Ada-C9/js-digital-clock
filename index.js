// Your code here
// let target = document.getElementById('clock');  // Find the HTML element where the ID is js-lecture-target
// target.innerHTML = '<p>Here is the clock!</p>';
//   const now = new Date();
//   let day = now.getDays();
//   target.innerHTML = `<li> date ${day}</li>`;


const dateDisplay = () => {
  console.log("in date display");
  const nows = new Date(Date.now());
  console.log(nows);


  let day = nows.getDay();
  console.log(day);

  let hour = nows.getHours();
  console.log(hour);
  let minute = nows.getMinutes();
  let second = nows.getSeconds();


  $('#clock').html(nows);
  $('#day').html(day);
  $('#hour').html(hour);
  $('#minute').html(minute);
  $('#second').html(second);
};

$(document).ready(() => {
  dateDisplay();
});
