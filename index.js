const addLeadingZero = function addLeadingZero(num) {
  return ('0' + num).slice(-2);
}

const updateDate = function updateDate(){
  let date = new Date();
  let hour = date.getHours();
  // if (hour > 12) {
  //   hour -= 12;
  // }
  let minutes = addLeadingZero(date.getMinutes());
  let seconds = addLeadingZero(date.getSeconds());
  let today = date.toDateString();
  if ($('clock-type').hasClass('military')) {

  }
  let dateString = $('<p>' + today + '</p>' + '<p>' + hour + ":" + minutes + ":" + seconds + '</p>')
  $('#clock').html(dateString);
}


$(document).ready(function() {

  setInterval(function(){ updateDate() }, 1000);

  // $('.pink').click(function(event) {
  //   $('#clock').removeClass();
  //   $('#clock').addClass('pink');
  // });
  //
  // $('.teal').click(function(event) {
  //   $('#clock').removeClass();
  //   $('#clock').addClass('teal');
  // });
  //
  // $('.green').click(function(event) {
  //   $('#clock').removeClass();
  //   $('#clock').addClass('green');
  // });

  $('section').on('click', 'button', function(event) {
    // let myClass = $(this).attr('class');
    $('#clock').removeClass();
    if ($(this).hasClass('pink')) {
      $('#clock').addClass('pink');
    } else if ($(this).hasClass('teal')) {
      $('#clock').addClass('teal');
    } else if (($(this).hasClass('green'))) {
      $('#clock').addClass('green');
    } else if ($(this).hasClass('military')) {
      $('#clock').addClass('military');
    } else if ($(this).hasClass('regular')) {
      $('#clock').addClass('regular');
    }
  });

  // $('clock-type').on('click', 'button', function(event) {
  //
  // })

});



//
// if ($('pink') {
//   $('#clock').addClass('pink');
// } else if ($('teal')) {
//   $('#clock').addClass('teal');
// } else if ($('green')) {
//   $('#clock').addClass('green');
// }
