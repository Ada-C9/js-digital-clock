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

// var clock = document.getElementById('clock');
//
// setInterval(function(){
//   clock.innerHTML = getCurrentTime();
// }, 1);
//
// function getCurrentTime() {
//   var currentDate = new Date();
//   var hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
//   hours === 0 ? hours = 12 : hours = hours;
//   var minutes = currentDate.getMinutes();
//   var seconds = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();
//   var currentTime = hours + ':' + minutes + ':' + seconds;
//   return currentTime;
// }





//
// $(document).ready(() => {
//   const pets = [
//
// ];
//
//   $('#js-lecture-target').append('<table></table>');
//   $('#js-lecture-target table').append('<tr><th>Name</th><th>Species</th><th>Human</th></tr>');
//   pets.forEach((pet) => {
//
//     const tableRow =
//     `<tr class="${pet.mammal ? "mammal": "nonmammal"}">
//       <td>${pet.name}</td><td>${pet.species}</td><td>${pet.human}</td>
//     </tr>`;
//     $('#js-lecture-target table').append(tableRow);
//   });
// });

// $(document).ready(function() {
//   for (let i = 0; i < 5; i++) {
//     let listItem = $('<li>' + i + '</li>');
//     $('.dynamic-list').append(listItem);
//   }
// });
