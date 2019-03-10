var countdown_min = 10; 
var countdown_second = 30; 

// Code for the Timer. 
var total = (countdown_min * 60) + countdown_second; 
var minutes; 
var seconds; 
var x = setInterval(function() {
    total = total - 1; 
    minutes = total / 60;
    minutes = Math.floor(minutes); 
    seconds = total - (minutes * 60); 
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);