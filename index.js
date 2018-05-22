$( document ).ready(() => {

  const clock = function clock() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    const time = `${hour}:${minute}:${second}`

    $('#clock').html(`${time}`);
  };

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

  window.setInterval(clock, 1000);
});
