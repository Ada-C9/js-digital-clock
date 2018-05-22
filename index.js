

$(document).ready(function (){ setInterval(function(){ myTimer() }, 1000);


function myTimer() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    $('#clock').text(t);
    // $('#clock').append(-d.getTimezoneOffset() / 60);

    // $('#clock').text(t);
}

// $("#blue-button").click(function() {
//   $('#clock').toggleClass('blue');
// });
//
// $("#purple-button").click(function() {
//   $('#clock').toggleClass('purple');
// });
//
// $("#gold-button").click(function() {
//   $('#clock').toggleClass('gold');
// });





$("#blue-button").click(function() {
    $('#clock').toggleClass('blue');
    $('#clock').removeClass('purple');
    $('#clock').removeClass('gold');
  });

  $("#purple-button").click(function() {
    $('#clock').toggleClass('purple');
    $('#clock').removeClass('blue');
    $('#clock').removeClass('gold');
  });

  $("#gold-button").click(function() {
    $('#clock').toggleClass('gold');
    $('#clock').removeClass('purple');
    $('#clock').removeClass('blue');
  });




});
