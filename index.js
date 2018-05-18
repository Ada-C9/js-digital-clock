const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

const getDate = () => {
  const today = new Date();

  let month = monthNames[today.getMonth()];
  let formattedDate = `${month} ${today.getDay()}, ${today.getFullYear()}`;

  $('#date').html(formattedDate);

  let hours = today.getHours();
  let minutes = addZero(today.getMinutes());
  let seconds = addZero(today.getSeconds());

  let formattedTime = `${hours}:${minutes}:${seconds}`;

  $('#time').html(formattedTime);
}

window.setInterval(getDate, 1000);


// const getDate = () => {
//
//   let today = new Date();
//   $('#clock').html(today);
// }
//
// window.setInterval(getDate, 1000);
