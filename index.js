// Use the Date Library in Javascript to retrieve the current date and time information. Use the different methods that are provided to you for retrieving the individual hour, minute and second information.

//Use the setInterval method to utilize the function you've created to update each second.
console.log('Running javascript');


const displayTime = function displayTime() {
  let date = new Date();
  let localTime = date.toLocaleTimeString('en-US');


  $('#clock').append(localTime);

};

$(document).ready(() => {
  displayTime();
});
