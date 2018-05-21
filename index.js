// Your code here
$(document).ready(function() {

setInterval(function(){ myTimer() }, 1000);

  function myTimer() {
    let d = new Date();
    // let time = d.toLocaleTimeString(); //this is not military time
    let time = d.toLocaleTimeString('en-US', {hour12: false}); //this is military time

    let month = d.getMonth()+1;
    let day = d.getDate();


    let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day
    + '/' + d.getFullYear() + ' ' + time;

    $('#clock').html(output);
}

  $('.blue').click(function() {
    $('#clock').css({ 'color' : 'blue' });
    })

  $('.pink').click(function() {
    $('#clock').css({ 'color' : '#D804DC'});
  })

  $('.lavender').click(function() {
    $('#clock').css({ 'color' : '#AF83B0'});
  })

  $('.time').click(function() {
    // code that toggles to/from military time.
    alert('this should toggle the time to/from military time')
  })

})
