$(document).ready( function (){

  let militaryTime = true;

  $('#time-button').on('click', function(){
    militaryTime = !militaryTime;
  });

  $('#color-button').on('click', function(){
    $('div').toggleClass('new-color');
  });

  setInterval( function(){ timeFn() }, 1000 );

  function timeFn() {
    let date = new Date();
    let time = date.toLocaleTimeString('en-US', { hour12: militaryTime });
    $('.clock').text(time);
  }

});
