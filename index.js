function updateTime() {
  const currentTime = new Date(Date.now())
  const hr = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();

  $('#clock').replaceWith(`<div id='clock'>${hr} : ${min} : ${sec}</div>`);
}

const myTimer = setInterval(updateTime, 1000);
