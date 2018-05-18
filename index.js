$( document ).ready(function() {
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

$('#clock').append(`${hour}:${minute}:${second}`);

});
