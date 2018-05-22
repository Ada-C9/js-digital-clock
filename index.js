function getTime() {
  let date = new Date();
  let localTime = date.toLocaleTimeString();

$('#clock').html(localTime);
}


$(document).ready(() => {
  setInterval(getTime, 1000);

  $('#purple').on('click', function() {
      let target = $("#clock");
      target.removeClass();
      target.addClass('purple');
  });

  $('#red').on('click', function() {
      let target = $("#clock");
      target.removeClass();
      target.addClass('red');
  });

  $('#green').on('click', function() {
      let target = $("#clock");
      target.removeClass();
      target.addClass('green');
  });

  // $('#display').on('click', function() {
  //     document.write(new Date().toString("hh:mm tt"));
  // });

});
