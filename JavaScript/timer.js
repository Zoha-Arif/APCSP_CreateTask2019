// Code for the Timer:
var countdown_min = 10; // Set starting number of minutes here.
var countdown_second = 30; //Set starting number of seconds here.

var total = (countdown_min * 60) + countdown_second;
var minutes;
var seconds;
var x = setInterval(function() {
    total = total - 1;
    minutes = total / 60;
    minutes = Math.floor(minutes);
    seconds = total - (minutes * 60);
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
  if (total < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    var score =  document.getElementById("score").innerHTML;
    var moves = document.getElementById("moves").innerHTML;
    window.alert(`Uh oh! It seems that your time has run out! Your final score was ${score1}. You made a total of ${moves1} moves.`);
    //Add some more code for when the timer runs out to end the game.
  }
}, 1000);
