const getTime = () => {
  const dateThing = new Date();

  let displayDate = `${dateThing.toLocaleDateString()}; ${dateThing.getHours()}:${dateThing.getMinutes()}:${dateThing.getSeconds()}`;
  $('#clock').html(displayDate);
};





$(document).ready(() => {
  // setInterval takes function and milliseconds as argument
  setInterval(getTime, 1000);
});
