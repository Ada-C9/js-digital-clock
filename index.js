// Your code here
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const date = () => {
  let today = new Date();
  let month = today.getMonth();
  let day = today.getDay();
  let numDay = today.getDate();
  let year = today.getFullYear();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  let tick = setInterval(date,10);

  const timeRightNow = `${daysOfWeek[day]}, ${months[month]} ${numDay}, ${year} ${hr}:${min}:${sec}`;
  $('#clock').html(timeRightNow);

};



$(document).ready(() => {
  date();

});
