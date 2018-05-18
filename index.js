// Use the Date Library in Javascript to retrieve the current date and time information. Use the different methods that are provided to you for retrieving the individual hour, minute and second information.

//Use the setInterval method to utilize the function you've created to update each second.
const reset = function reset() {
  let interval = window.setInterval(displayTime, 1000);
}


const displayTime = function displayTime() {
  let date = new Date();
  let localTime = date.toLocaleTimeString('en-US');


  $('#clock').html(localTime);

};



$(document).ready(() => {
  reset();
  // displayTime();
});
