
const getDate = () => {
  let today = new Date();

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let formattedDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

  $('#date').html(formattedDate);
}

const getTime = () => {
  let now = new Date();
  let time = now.toLocaleTimeString();

  $('#clock').html(time);
}

$(document).ready(() =>  {
  getDate();
  setInterval(getTime, 1000);
});
