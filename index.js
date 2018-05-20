const twoDigitTime = (time) => {
  let newDateTime = time;

  if (newDateTime < 10) {
    return (`0${newDateTime}`);
  } else {
    return newDateTime;
  }
};

const getTime = () => {
  const date = new Date();

  let hours = twoDigitTime(date.getHours());
  let minutes = twoDigitTime(date.getMinutes());
  let seconds = twoDigitTime(date.getSeconds());

  let displayDate = `${date.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;
  $('#clock').html(displayDate);
};


$(document).ready(() => {
  // setInterval takes function and milliseconds as argument
  setInterval(getTime, 1000);
});
