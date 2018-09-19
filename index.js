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
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();
    const date = currentDateTime.toDateString();
    if ($('#time-type').hasClass('to-military') && hours < 12) {
      return `<p><strong>${hours} : ${minutes} : ${seconds} AM</strong></p><p>${date}</p>`;
    } else if ( $('#time-type').hasClass('to-military') && hours > 12) {
      hours = currentDateTime.getHours() - 12;
      return `<p><strong>${hours} : ${minutes} : ${seconds} PM</strong></p><p>${date}</p>`;
    } else if ( $('#time-type').hasClass('to-military') && hours === 0) {
      hours = 12;
      return `<p><strong>${hours} : ${minutes} : ${seconds} AM</strong></p><p>${date}</p>`;
    } else {
      return `<p><strong>${hours} : ${minutes} : ${seconds}</strong></p><p>${date}</p>`;
    }
  }

  function getWorldTimes() {
    const offset = (new Date().getTimezoneOffset())
    const worldOffsets = [
      {div: 1, area: 'Local', offset: 0},
      {div: 2, area: 'London', offset: offset + 60},
      {div: 3, area: 'New York', offset: offset - 4*60},
      {div: 4, area: 'Tokyo', offset: offset + 9*60}
    ];

    worldOffsets.forEach( (timezone) => {
      $( `#timezone-${timezone.div}` ).html(`<div><h4>${timezone.area}</h4>${getTime(timezone.offset)}</div>`);
    });
  }
  const colorOptions = '<ul class="color-list"><li class="red-choice">RED</li><li class="blue-choice">BLUE</li><li class="purple-choice">PURPLE</li><li class="green-choice">GREEN</li></ul>'
  $('.timezone').prepend(colorOptions)
  $('.red-choice').click( function() {
    if ( $( this ).parent().parent().hasClass('green') ) {
      $( this ).parent().parent().removeClass('green');
    }
    if ( $( this ).parent().parent().hasClass('purple')) {
      $( this ).parent().parent().removeClass('purple');
    }
    if ( $( this ).parent().parent().hasClass('blue')) {
      $( this ).parent().parent().removeClass('blue');
    }
    $( this ).parent().parent().addClass('red');
  });


  $('*').on('click', '.blue-choice', function() {
    if ( $( this ).parent().parent().hasClass('green') ) {
      $( this ).parent().parent().removeClass('green');
    }
    if ( $( this ).parent().parent().hasClass('purple')) {
      $( this ).parent().parent().removeClass('purple');
    }
    if ($( this ).parent().parent().hasClass('red')) {
      $( this ).parent().parent().removeClass('red');
    }
    $( this ).parent().parent().addClass('blue');
  });

  $('.green-choice').click( function() {
    if ( $( this ).parent().parent().hasClass('purple') ) {
      $( this ).parent().parent().removeClass('purple');
    }
    if ( $( this ).parent().parent().hasClass('red')) {
      $( this ).parent().parent().removeClass('red');
    }
    if ( $( this ).parent().parent().hasClass('blue')) {
      $( this ).parent().parent().removeClass('blue');
    }
    $( this ).parent().parent().addClass('green');
  });

  $('.purple-choice').click( function() {
    if ( $( this ).parent().parent().hasClass('green') ) {
      $( this ).parent().parent().removeClass('green');
    }
    if ( $( this ).parent().parent().hasClass('red')) {
      $( this ).parent().parent().removeClass('red');
    }
    if ( $( this ).parent().parent().hasClass('blue')) {
      $( this ).parent().parent().removeClass('blue');
    }
    $( this ).parent().parent().addClass('purple');
  });
});
