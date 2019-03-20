 var rooms = {
   "start": {
     "description": "",
       "directions": {
         "yes": "prologue",
         "no": "prologue-no",
       }
   },
   "prologue": {
     "description": "You, an impoverished corn farmer living in a small villiage, \
     have been selected by the Honored Council of the Earth to venture into the Outlands \
     to find Caspian the Wizard, the only divine entity that can help save the world from \
     the wrath of the infamous Supreme Leader Skellybones. Skellybones's grandfather \
     became Supreme Leader of the World many centuries ago, tormenting your kind and \
     asserting himself as the harshest, most terrible, ruler in history. But, at the depth of \
     your people's despair, Caspian swooped in and defeated him with the Necromancer's Spell, \
     his most powerful enchantment. The Spell diminished his power greatly, but the Earth was saved. \
     Since then, he has been forced into hiding by his weakness; his power too little to cast the \
     spell once more in order defeat Skellybones: the newest threat to the Earth. You currently stand \
     in your living room, nervous about the start of your quest. You decide it's time to pack your \
     gear, because at least then you'll be physically prepared. To your left lies the front door, and \
     to your right, the door to your basement. Where do you wish to go?"
   },
   "prologue-no": {
     "description": "Okay, well good luck..."
   }
    }

var currentRoom = "start";

function changeroom(dir) {
  console.log(2);
  console.log(dir);
    if (rooms[currentRoom].directions[dir]) {
      console.log(dir);
      console.log(4);
        currentRoom = rooms[currentRoom].directions[dir];
         $("#game-text").append("<p>" + rooms[currentRoom].description + "<p>");
  }
  console.log(3);
}



var inventory = ["slingshot"];
var commands = ["go north", "go south", "go west", "go east", "look around", "climb up", "climb down", "hide now", "talk to", "show inventory", "show help", "use slingshot", "fight enemy", "talk yes", "talk no"];

function showHelp(){
    $("#game-text").append("<p>Here are your complete list of commands: </p>");
    $("#game-text").append("<ul>");
    for (var l = 0; l < commands.length; l++){
        $("#game-text").append("<li>" + commands[l] + "</li>");
    }
    $("#game-text").append("</ul>");
}



function showInventory(){
    $("#game-text").append("<p>Here is your inventory: </p>");
    $("#game-text").append("<ul>");
    for (var l = 0; l < inventory.length; l++){
        $("#game-text").append("<li>" + inventory[l] + "</li>");
    }
    $("#game-text").append("</ul>");
}



function playerInput(inputs) {
    var command = inputs.split(" ")[0];
    switch (command) {
      case "yes":
            //var dir = inputs.split(" ")[1];
            var dir = "yes";
            console.log("input2" + dir);
            changeroom(dir);
            break;

        case "no":
            var dir = "no";
            changeroom(dir);
            break;
        case "look":
            var dir = inputs.split(" ")[1];
            changeroom(dir);
            break;
        case "use":
             var dir = inputs.split(" ")[1];
             changeroom(dir);
        case "hide":
             var dir = inputs.split(" ")[1];
             changeroom(dir);
        case "show":
            if (inputs.split(" ")[1] == "help"){
                showHelp();
            }
        case "fight":
            var dir = inputs.split(" ")[1];
            changeroom(dir);
        case "talk":
            if (inputs.split(" ")[1] == "help"){
                showHelp();
            }
            else if (inputs.split(" ")[1] == "inventory") {
                showInventory();
              }
            break;
        default:
        /* The speed/duration of the effect in milliseconds */
}
}

$(document).ready(function(){ //when document is ready, function will be executed.
    $(document).keypress(function(key){
        if (key.which == 13){
          console.log(1);
            var input1 = $('#user-answer').val().toLowerCase();
            console.log("input1" + input1);
            playerInput(input1);
            }
    })
    })
