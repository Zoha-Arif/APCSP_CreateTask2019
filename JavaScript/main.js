var i = 0;
var txt = 'Want to play? y/n'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */


//This function is attributed to W3 Schools!//
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("question").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
$(document).ready(function(){ //when document is ready, function will be executed.
    $(document).keypress(function(key){
        if (key.which == 13){
            var input = $('#play').val();
            if (input == "yes" || input == "y"){
                window.location('game.html'); 
            } 
            else if (input == "no" || input == "n"){ 
                var i = 0;
                var txt = "Aw, you're missing out on an adventure! "; /* The text */
                var speed = 50; /* The speed/duration of the effect in milliseconds */

                function typeWriter() {
                    if (i < txt.length) {
                      document.getElementById("no").innerHTML += txt.charAt(i);
                      i++;
                      setTimeout(typeWriter, speed);
                    }
                  }
                  typeWriter.call(); 
            } 

            else {
                var i = 0;
                var txt = "Uh oh, I don't recognize that answer! Please answer yes or no. "; /* The text */
                var speed = 50; /* The speed/duration of the effect in milliseconds */


                function typeWriter() {
                    if (i < txt.length) {
                      document.getElementById("no").innerHTML += txt.charAt(i);
                      i++;
                      setTimeout(typeWriter, speed);
                    }
                  }

                  typeWriter.call();
            }
        }        
    })
})