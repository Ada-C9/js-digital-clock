// first we need to get the damn current time
const updateTime = () => {
  let currentTime = new Date ();

  // breaks it down into hours, mins, secs
  let currentSeconds = currentTime.getSeconds();
  let currentMinutes = currentTime.getMinutes();
  let currentHours = currentTime.getHours();

  //need to format the time 00:00:00
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }

  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }

  let amPM = null
  // Gonna need to know if it is AM or pm
  if (currentHours < 12) {
    amPM = 'AM';
  } else {
    amPM = 'PM';
  }

  // Need to know that 0 is noon/midnight
  if (currentHours === 0 ) {
    currentHours = 12;
  }

  // display time
  let currentTimeDisplay = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + amPM;

  // update the time
  // document.ready(getElementById('clock').firstChild.nodeValue = currentTimeDisplay;
  $('#clock').html('<p>' + currentTimeDisplay + '</p>')
}

$(document).ready(() => {
  const timer = setInterval(updateTime, 1000);
  // where click event stuff happens
  // need to include event that will assign color class to the clock
  $('button').click( function(event) {
    let buttonClicked = this.innerHTML;
    // alert(`Got a click on an <li> containing "${$(this).html()}"`);
    console.log(buttonClicked);
    if (buttonClicked === 'Orange') {
      let colorClass = 'orange'
      $('#clock').removeClass().addClass(colorClass);
    } else if (buttonClicked === 'Green!') {
      let colorClass = 'green'
      $('#clock').removeClass().addClass(colorClass);
    } else if (buttonClicked === 'Yellow!') {
      let colorClass = 'yellow'
      $('#clock').removeClass().addClass(colorClass);
    }
  });
});
