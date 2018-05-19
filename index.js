$(document).ready(function() {

  $('#time-type').click( function() {
    $( this ).toggleClass('to-military');
    if ( $( this ).hasClass('to-military') ) {
      $( this ).html('<p>Change to 24-hr Clock</p>');
    } else {
      $( this ).html('<p>Change to 12-hr Clock</p>');
    }
  });

  setInterval( getTime, 1000);

  function getTime() {
    const currentDateTime = new Date(Date.now());
    let hours = currentDateTime.getHours();
    if ( $('#time-type').hasClass('to-military') && hours > 12) {
      hours = currentDateTime.getHours() - 12;
    } else if ( $('#time-type').hasClass('to-military') && hours === 0) {
      hours = 12;
    }
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();
    const date = currentDateTime.toDateString()

    $('#clock').html(`<p><strong>${hours} : ${minutes} : ${seconds}</strong></p><p>${date}</p>`);
  }

});
