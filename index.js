// Your code here

$(document).ready(function() {

  setInterval( myTimer, 1000);
});

function myTimer() {
  const current = new Date();
  const hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

  const readout = `${hours}:${minutes}:${seconds}`



  $('#clock').html(`${hours}:${minutes}:${seconds}`)
}
console.log('whatever')
console.log(`${myTimer.readout}`)
// });

// let target = document.getElementById('clock');  //
//
// let now = Date.now();
// let nowDate = new Date(now);
// let nowHour = nowDate.getHours();
// let nowMinute = nowDate.getMinutes();
// let nowSecond = nowDate.getSeconds();
// let timeReport = `${nowHour}:${nowMinute}:${nowSecond}`


// const Timer = function Timer(now) {
//
//   this.nowDate = new Date(now);
//   this.nowHour = nowDate.getHours();
//   this.nowMinute = nowDate.getMinutes();
//   this.nowSecond = nowDate.getSeconds();
//   this.timeReport = `${this.nowHour}:${this.nowMinute}:${this.nowSecond}`    }
//
//   Timer.prototype = {
//     readOut() {
//     return Timer.timeReport
//   }
// };

// let myTimer = new Timer(Date.now);
// let reading = myTimer.timeReport;
// console.log(reading);
//
// console.log(myTimer.nowDate)

// target.innerHTML = timeReport
