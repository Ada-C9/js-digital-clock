$(document).ready(function() {

  $('#time-type').click( function() {
    $( this ).toggleClass('to-military');
    if ( $( this ).hasClass('to-military') ) {
      $( this ).html('<p>Change to 24-hr Clock</p>');
    } else {
      $( this ).html('<p>Change to 12-hr Clock</p>');
    }
  });

  setInterval( getWorldTimes, 1000);

  function getTime(offset) {
    const currentDateTime = new Date();
    currentDateTime.setMinutes(currentDateTime.getMinutes() + offset)
    let hours = currentDateTime.getHours();
    if ( $('#time-type').hasClass('to-military') && hours > 12) {
      hours = currentDateTime.getHours() - 12;
    } else if ( $('#time-type').hasClass('to-military') && hours === 0) {
      hours = 12;
    }
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();
    const date = currentDateTime.toDateString();
    return `<p><strong>${hours} : ${minutes} : ${seconds}</strong></p><p>${date}</p>`;
  }

  function getWorldTimes() {
      const offset = (new Date().getTimezoneOffset())
    const worldOffsets = [
      {area: 'Local', offset: 0},
      {area: 'London', offset: offset + 60},
      {area: 'New York', offset: offset - 4*60},
      {area: 'Tokyo', offset: offset + 9*60}
    ];
    let clocks = ''
    worldOffsets.forEach( (timezone) => {
      clocks += `<div><h4>${timezone.area}</h4>${getTime(timezone.offset)}</div>`;
    });
    $( '#clock' ).html( clocks )

  }

});
