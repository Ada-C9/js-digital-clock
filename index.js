//Comments


let getTime = function(){
    let time = new Date();
    let seconds = "0" + time.getSeconds();
    if (seconds > 10 ){
     seconds = time.getSeconds();
    }

    return  "" + time.getHours() + ":" + time.getMinutes() + ":" + seconds

    // let seconds = time.getSeconds()
    // return  "" + time.getHours() + ":" + time.getMinutes() + ":" + (seconds < 10 ? "0" + seconds : seconds)
}

let updateTime = function(){
  $('#clock').html(getTime());
   // $('#clock').append(getTime()+"\n");
}

// stop clock at 12 hour, if greater than 24 hour then
// add a pm slot.
//if less than 24 hour add am slot

let twelveHour = function(){
  let twelveHourconverstion = "";
  if (getTime() > '12:00:00'){
    let convert =  +getTime() -12
    twelveHourconverstion = `${convert}` +  ' PM';
  }else{
    twelveHourconverstion = getTime() + ' AM'
  }
  return twelveHourconverstion
}


 $('#buttons').click(function(event){
  console.log(event.target.id)
  console.log(event)
  //why aren't these working?? 
  if (event.target.id === "blue-button"){
    ('#clock').addClass("blue")
  }else if(event.target.id === "green-button"){
  $('#clock').addClass("green")
  }else if(event.target.id === "orange-button") {
    $('#clock').addClass("orange")

  }

})


$(document).ready( () => {
  $('#clock').html(getTime());
  setInterval(updateTime, 1000);

  $('#buttons').click(function(event){
    console.log(event)
    if (event.target.id === 'update-time'){
      $('#clock').html(twelveHour());
    }
  })


  //.ready removes content of html element.
})
