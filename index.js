$(document).ready(() => {
  let time = window.setInterval(timeCallback, 100);

	function timeCallback() {
		let currTime = new Date();
		let currHours = formatTime(currTime.getHours());
		let currMinutes = formatTime(currTime.getMinutes());
		let currSeconcd = formatTime(currTime.getSeconds());
		time = `<h1>${currHours}:${currMinutes}:${currSeconcd}</h1>`;
	}
  // $('#clock').append('<h1></h1>');
  $('#clock').append(time);

  // const timeString = `${currTime.getTime().getHours()}${currTime.getTime().getMinutes()}`;
  // $('#clock h1').append(timeString);

  function formatTime(timeInt) {
    return timeInt < 12 ? '0' + timeInt : timeInt;
  }
});
