const currentTime = new Date(Date.now())
const hr = currentTime.getHours();
const min = currentTime.getMinutes();
const sec = currentTime.getSeconds();

$('#clock').append(`<span>${hr} : </span>`);
$('#clock').append(`<span>${min} : </span>`);
$('#clock').append(`<span>${sec}</span>`);
