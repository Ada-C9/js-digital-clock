let myClock = () => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let now = new Date();
  let time = now.toLocaleTimeString('en-US');
  let date = now.toLocaleString('en-US', options)

  $("#clock").html(`<div class="time">${time}</div><div class="date">${date}</div>`);
};

setInterval(myClock, 1000);


let worldClock = () => {
  $("#clock").append('<div class="world-clocks"></div>')
  let now = new Date();
  let locations = {'Manila': 'Asia/Manila', 'London': 'Europe/London', 'Timbuktu': 'Africa/Timbuktu'};

  for (let location in locations) {
    let options = {};
    options.timeZone = locations[location];

    $("#clock .world-clocks").append(`
      <div class="${location}">
      ${now.toLocaleString('en-US', options)}
      <h3> ${location} </h3>
      </div>
      `);
    }
  };

  setInterval(worldClock, 1000);

  $(document).ready(function() {
    myClock();
    worldClock();
  });
