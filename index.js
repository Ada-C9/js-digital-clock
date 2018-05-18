$(document).ready(function() {

function readTime() {
let dt = new Date();

let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let m = month[dt.getMonth()];
let d = dt.getDay();
let y = dt.getFullYear();
let hr = dt.getHours();
let min = dt.getMinutes();
let sec = dt.getSeconds();


let display = m + ' ' + d + ',' + ' ' + y + '<br>' + hr + ":" + min + ":" + sec;
$('#clock').html(`${display}`);
}


setInterval(readTime, 1000);
});
