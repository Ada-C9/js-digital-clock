

const WEEKDAY = [`Sun`, `Mon`, `Tue`, `Wed`, `Thur`, `Fri`, `Sat`]

let currenttime = new Date();

$(`#date`).html(
  WEEKDAY[currenttime.getDay()] +
  `,` + currenttime.getMonth() + "/" +
  currenttime.getDate() + "/" + currenttime.getFullYear()
);


const updateClock = () => {
  let currenttime = new Date();
  if ($(`.timeshow`).hasClass(`12`)) {
    $(`#clock`).html(
      currenttime.toLocaleTimeString([], { hour12: true}))
    }
    else
    $(`#clock`).html(
      currenttime.getHours() + ":" + currenttime.getMinutes() + ":" + currenttime.getSeconds()
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
      let currenttime = new Date();
      currenttime.setHours(currenttime.getHours() + location.hours);
      if ($(`.timeshow`).hasClass(`12`)) {
        $(`#`+location.place.toLowerCase()+`clock`).html(
          currenttime.toLocaleTimeString([], { hour12: true}))
        }
        else  {
          $(`#`+location.place.toLowerCase()+`clock`).html(
            currenttime.getHours() + ":" + currenttime.getMinutes() + ":" + currenttime.getSeconds()
          )}

          $(`#`+location.place.toLowerCase()+`clock`).append(
            "<br>" + location.place + "</br>"
          );}
        );}
        // toLocaleString([], { hour12: true});

        setInterval(updateClock, 1000);
        setInterval(updateChile, 1000);

        $(`.coloring`).on(`click`, `button`,function(event) {
          console.log(event.target.innerHTML.toLowerCase());
          $(`body`).removeClass();
          $(`body`).addClass(event.target.innerHTML.toLowerCase());

        })

        $(`.time`).on(`click`,`button`, function(event){

          if (event.target.innerHTML == "AM/PM"){
            $(`.timeshow`).addClass(`12`)
          }
          else {
            $(`.timeshow`).removeClass()
          }
        })



        $(document).ready(()=> {
          updateClock();
          updateChile();
        });
