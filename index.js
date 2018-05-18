$( document ).ready(() => {

  const clock = function clock() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    const time = `${hour}:${minute}:${second}`

    $('#clock').html(`${time}`);
  };
  
  window.setInterval(clock, 1000);
});
