function updateTime() {
  const currentTimeString = new Date(Date.now()).toString();
  // const yr = currentTime.getFullYear();
  // const mon = currentTime.getMonth();
  // const date = currentTime.getDate();
  // const day = currentTime.getDay();
  // const hr = currentTime.getHours();
  // const min = currentTime.getMinutes();
  // const sec = currentTime.getSeconds();

  // const dateString = new Date(Date.now()).toDateString();
  // const timeString = new Date(Date.now()).toTimeString();

  $('#clock').replaceWith(`<div id="clock">${currentTimeString}</div>`);
  // $('#clock').replaceWith(`<div id='clock'>${day} ${mon + 1} ${date} ${yr} ${hr} : ${min} : ${sec}</div>`);
  // $('#date').replaceWith(`<div id='date'>${dateString}</div>`);
  // $('#time').replaceWith(`<div id='time'>${timeString}</div>`);

}

const myTimer = setInterval(updateTime, 1000);
