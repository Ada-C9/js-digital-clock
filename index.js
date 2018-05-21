$(document).ready(() => {
  setInterval(timeCallback, 1000);

	function timeCallback() {
		let currTime = new Date();
		let currHours = formatTime(currTime.getHours());
		let currMinutes = formatTime(currTime.getMinutes());
		let currSeconds = formatTime(currTime.getSeconds());
		let time = `<h1>${currHours}:${currMinutes}:${currSeconds}</h1>`;

    $('#clock').html(time);
	}

  function formatTime(timeInt) {
    return timeInt < 12 ? '0' + timeInt : timeInt;
  }

});
