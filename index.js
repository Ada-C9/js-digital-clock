const COLORS = ['black', 'pink', 'green', 'indigo'];
let colorIndex = 0;

const nextColor = function nextColor() {
  let color = COLORS[colorIndex];
  colorIndex += 1;
  colorIndex %= COLORS.length;
  return color;
};

$(document).ready(function() {
  $('body').keydown(function(event){
    if (event.which == 13 || event.which == 32) {
      $('#body').toggleClass(nextColor());
    }
  });

  function readTime() {
    let dt = new Date();

    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let m = month[dt.getMonth()];
    let d = dt.getDate();
    let y = dt.getFullYear();
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();


    let display = m + ' ' + d + ',' + ' ' + y + '<br>' + hr + ":" + min + ":" + sec;
    $('#clock').html(`${display}`);
  }


  setInterval(readTime, 1000);
});
