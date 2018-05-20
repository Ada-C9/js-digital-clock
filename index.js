// Your code here
$(document).ready(function() {

setInterval(function(){ myTimer() }, 1000);

  function myTimer() {
    let d = new Date();
    let time = d.toLocaleTimeString();

    let month = d.getMonth()+1;
    let day = d.getDate();

    let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day
    + '/' + d.getFullYear() + ' ' + time;

    $('#clock').html(output);
}

})
