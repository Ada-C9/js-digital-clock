

const WEEKDAY = [`Sun`, `Mon`, `Tue`, `Wed`, `Thur`, `Fri`, `Sat`]

let currenttime = new Date();

$(`#date`).html(
  WEEKDAY[currenttime.getDay()] +
  `,` + currenttime.getMonth() + "/" +
  currenttime.getDate() + "/" + currenttime.getFullYear()
);


const updateClock = () => {
  let currentdate = new Date();
  $(`#clock`).html(
    currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds()
  );
  $(`#clock`).append(
    "<br>Seattle</br>"
  );
}


const LOCATIONS = [
  {place: `Chile`, hours: 3},
  {place: `London`,  hours: 8},
  {place: `Tokio`, hours: 16}
];


  const updateChile = () => {
    LOCATIONS.forEach((location) => {
      let chileTime = new Date();
      chileTime.setHours(chileTime.getHours() + location.hours);
      $(`#`+location.place.toLowerCase()+`clock`).html(
        chileTime.getHours() + ":" + chileTime.getMinutes() + ":" + chileTime.getSeconds()
      );
      $(`#`+location.place.toLowerCase()+`clock`).append(
        "<br>" + location.place + "</br>"
      );}
    );}


  setInterval(updateClock, 1000);
  setInterval(updateChile, 1000);




  $(document).ready(()=> {
    updateClock();
    updateChile();
  });
