const getTime = () => {
  let newTime = new Date();
  $('#seattle-clock > .city-clock').html(newTime);
};

const timeBuilder = () => {
  let newTime = new Date();
  let utc = newTime.getTime()// + (newTime.getTimezoneOffset() * 60000);
  return utc
}

const guamTime = () => {
  let utc = timeBuilder()
  let calculatedTime = new Date(utc + (3600000 * 17))

  $('#guam-clock > .city-clock').html(calculatedTime);
};

const hawaiiTime = () => {
  let utc = timeBuilder()
  let calculatedTime = new Date(utc + (3600000 * -3))

  $('#hawaii-clock > .city-clock').html(calculatedTime);
};

const londonTime = () => {
  let utc = timeBuilder()
  let calculatedTime = new Date(utc + (3600000 * 8))

  $('#london-clock > .city-clock').html(calculatedTime);
};




$(document).ready(() => {
  setInterval(getTime, 1000);
  setInterval(guamTime, 1000);
  setInterval(hawaiiTime, 1000);
  setInterval(londonTime, 1000);
});
