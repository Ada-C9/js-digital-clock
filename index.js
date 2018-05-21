// // Your code here

const timeBuilder = () => {
	let newDate = new Date();
	let date = newDate.toString();
  $('#seattle-clock').html(date);
};

const londonTime = () => {
	let newDate = new Date();
  let date = newDate.toUTCString();

  $('#london-clock').html(date);
};

const beijingTime = () => {
	let date = new Date();
  let newDate = new Date(date.getTime() + (date.getTimezoneOffset() * 128570 ));

  $('#beijing-clock').html(newDate);
};


$(document).ready( () => {
  $('#seattle').click( () => {
     setInterval(timeBuilder, 1000);
  });

	$('#london').click( () => {
		setInterval(londonTime, 1000);
	})

	$('#beijing').click( () => {
		setInterval(beijingTime, 1000);
	})
})
