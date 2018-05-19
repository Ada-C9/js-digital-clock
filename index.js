const twoDigitTime = (time) => {
  let newDateTime = time;

  if (newDateTime < 10) {
    return (`0${newDateTime}`);
  } else {
    return newDateTime;
  }
};

const getTime = () => {
  const dateThing = new Date();

  let hours = twoDigitTime(dateThing.getHours());
  let minutes = twoDigitTime(dateThing.getMinutes());
  let seconds = twoDigitTime(dateThing.getSeconds());

  let displayDate = `${dateThing.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;
  $('#clock').html(displayDate);
};





$(document).ready(() => {
  // setInterval takes function and milliseconds as argument
  setInterval(getTime, 1000);
});
