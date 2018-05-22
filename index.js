$(document).ready(function() {

  let twentyFourHour = false;

  setInterval(function(){ myClock() }, 1000);

  function myClock() {
    let date = new Date();
    let time = date.toLocaleTimeString();

    let month = date.getMonth()+1;
    let day = date.getDate();
    let output = null;
    if (twentyFourHour === false) {
      output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day
      + '/' + date.getFullYear() + ' ' + time;
    } else {
      time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day
      + '/' + date.getFullYear() + ' ' + time;
    }

    $('#clock').html(output);
  }

    $( '.blue' ).click(function() {
      $('#clock').toggleClass('blue');
      // $('#clock').css({'color' : 'blue'});
    });

    $( '.pink' ).click(function() {
      $('#clock').toggleClass('pink');
    });

    $( '.green' ).click(function() {
      $('#clock').toggleClass('green');
    });

    $( '.twentyfour' ).click(function() {
      twentyFourHour = !twentyFourHour;
      myClock();
      if (twentyFourHour === true) {
        $('.twentyfour').html('12 hour');
      } else {
        $('.twentyfour').html('24 hour');

      }

    });
});
