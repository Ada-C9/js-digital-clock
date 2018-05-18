// Your code here

const showTime = () => {
  let time = new Date();

  // console.log(time.toLocaleTimeString('en-US'));
  // console.log(event.toLocaleTimeString('en-US'));
  $('#clock').append(time.toLocaleTimeString('en-US'));
};

$(document).ready(() => {
  showTime();
});
