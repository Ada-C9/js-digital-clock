// Your code here
$(document).ready(() => {
  setInterval(function() {
    let dateToday = new Date();
    let date = dateToday.getDate() + '/' + dateToday.getMonth() + '/' + dateToday.getFullYear();
    $('#clock').html(date);
    let rightNow = dateToday.getHours() + ':' + dateToday.getMinutes() + ':' + dateToday.getSeconds();
    $('#clock').append('\n' + rightNow);
  }, 1000);
});
