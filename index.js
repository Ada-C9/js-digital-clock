// Your code here
$(document).ready(function() {

setInterval(function(){ myTimer() }, 1000);


  function myTimer() {
    let d = new Date();
    let t = d.toLocaleTimeString();

    $('#clock').html(t);
}



}) // end of document.ready(function
