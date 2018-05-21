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
  });

  $("#purple-button").click(function() {
    $('#clock').toggleClass('purple');
  });

  $("#gold-button").click(function() {
    $('#clock').toggleClass('gold');
  });

  window.setInterval(clock, 1000);
});
