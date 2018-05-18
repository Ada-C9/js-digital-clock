// Use the Date Library in Javascript to retrieve the current date and time information. Use the different methods that are provided to you for retrieving the individual hour, minute and second information.

//Use the setInterval method to utilize the function you've created to update each second.


const displayTime = function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  console.log(hours + ':' + minutes);

}

console.log(displayTime());
