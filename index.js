// Your code here
// class Clock {
//   constructor() {
//     this.date = this.setDate();
//     this.hour = this.date.getHours();
//     this.minute = this.date.getMinutes();
//     this.second = this.date.getSeconds();
//   }
//   setDate() {
//     this.date = new Date();
//     this.hour = this.date.getHours();
//     this.minute = this.date.getMinutes();
//     this.second = this.date.getSeconds();
//     return this.date
//   }
// }

const myClock = () => {
    let date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
};

let mySeconds = setInterval(myClock, 1000)


$(document).ready(function() {
  myClock();
  mySeconds;
});
