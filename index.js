// Your code here
const showTime = () => {
  const getTime = () => {
    let time = new Date();

    let localTime = time.toLocaleTimeString('en-US');

    $('#clock').html(localTime);
  };

  window.setInterval(getTime, 1000);
}

$(document).ready(() => {
  showTime();
});
