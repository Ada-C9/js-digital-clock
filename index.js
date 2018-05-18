// Your code here
$(document).ready(() => {
  setInterval(function() {
    let rightNow = new Date();
    $('#clock').html(rightNow);
  });
});
