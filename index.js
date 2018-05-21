const getTime = () => {
  let newTime = new Date();

  $('.city-clock').html(newTime.toString());
}





$(document).ready(() => {
  setInterval(getTime(), 1000);
});
