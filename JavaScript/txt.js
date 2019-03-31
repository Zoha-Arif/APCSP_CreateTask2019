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
     in your living room, nervous about the start of your quest. In order to calm your nerves, you \
     decide it's time to pack your gear. To your left lies the front door, and to your right, the door \
     to your basement.",
      "directions": {
        "go left": "outside",
        "go right": "basement",
      },
   },
   "prologue-no": {
     "description": "Okay, well good luck...Say yes if you change your mind :)",
     "directions": {
        "yes": "prologue",
        "no": "prologue-no",
      }
   },

   "outside":{
     "description": "You now stand outside your house with the supplies you have packed and the map \
     that the Council sent you."
   }, 

   "basement": {
    "description": "You enter your basement and descend down the steps. There is a tube of toothpaste sitting on a crate to your left and more supplies to your right.", 
    "directions": {
        "collect toothpaste": "collect1", 
    }
   }, 
   "collect1": {
       "description": "Toothpaste has been collected."
   } 
 }


var currentRoom = "start";

function changeroom(dir) {
    if (rooms[currentRoom].directions[dir]) {
        currentRoom = rooms[currentRoom].directions[dir];
         $("#game-text").append("<p>" + rooms[currentRoom].description + "<p>");
  }
}
var inventory = ["slice of cheese", "map"];
var commands = ["go forward", "go backward", "go left", "go right", "look around", "climb up", "climb down", "hide now", "talk to", "show inventory", "show help", "fight enemy", "collect"];

var moves1 = 0; 
function moves(){
    moves1++; 
    document.getElementById("moves").innerHTML = moves1; 
}

var score1 = 0; 
function score(type){ 
    if ("inventory" == type){
        score1 = score1 + 10; 
        document.getElementById("score").innerHTML = score1; 
    }
    else if (type == "enemy"){
        score1 = score1 + 50; 
        document.getElementById("score").innerHTML = score1; 
    }
}

function showHelp(){
    $("#game-text").append("<p>Here are your complete list of commands: </p>");
    $("#game-text").append("<ul>");
    for (var i = 0; i < commands.length; i++){
        var final = commands.length - 1; 
        if (i != final) {
            $("#game-text").append("<li>" + commands[i] + "," + " " + "</li>");
        }
        else {
            $("#game-text").append("<li>" + commands[i] + "</li>");
        }
    }
    $("#game-text").append("</ul>");
}

function showInventory(){
    $("#game-text").append("<p>Here is your inventory: </p>");
    $("#game-text").append("<ul>");
    for (var l = 0; l < inventory.length; l++){
        var final1 = inventory.length - 1; 
        if (l != final1) {
            $("#game-text").append("<li>" + inventory[l] + " " + ", " + "</li>");
        }
        else {
            $("#game-text").append("<li>" + inventory[l] + " " + "</li>");
        }
    $("#game-text").append("</ul>");
}
}

function playerInput(inputs) {
    //var command = inputs.split(" ")[0];
    switch (inputs) {
      case "yes":
            //var dir = inputs.split(" ")[1];
            var dir = "yes";
            changeroom(dir);
            moves(); 
            break;
        case "no":
            var dir = "no";
            changeroom(dir);
            moves(); 
            break;
        case "go forward":
            var dir = "go forward";
            changeroom(dir);
            moves(); 
            break;
        case "go backward":
            var dir = "go backward";
            changeroom(dir);
            moves(); 
            break;
        case "go left":
            var dir = "go left";
            changeroom(dir);
            moves(); 
            break;
        case "go right":
            var dir = "go right";
            changeroom(dir);
            moves(); 
            break;
        case "show help":
            showHelp();
            break;
        case "show inventory":
            showInventory(); 
            break;
        case "fight enemy":
            var dir = "fight enemy";
            moves(); 
            changeroom(dir);
            score("enemy"); 
            break;
        case "look around":
            var dir = "look around";
            moves(); 
            changeroom(dir);
            break;
        case "climb up":
            var dir = "climb up";
            moves(); 
            changeroom(dir);
            break;
        case "climb down":
            var dir = "climb down";
            moves(); 
            changeroom(dir);
            break;
        case "hide now":
            var dir = "hide now";
            changeroom(dir);
            moves(); 
            break;
        case "talk to":
            var dir = "talk to";
            changeroom(dir);
            moves(); 
            break;
        case "collect":
            var dir = "collect";
            changeroom(dir);
            moves(); 
            break;
        default:
            if (inputs.includes("collect")){
                if (inputs == "collect toothpaste"){
                    inventory.push("toothpaste"); 
                    var dir = "collect toothpaste";
                    changeroom(dir);
                    score("inventory"); 
                    moves(); 
                }
            }
}
}

$(document).ready(function(){ //when document is ready, function will be executed.
    $(document).keypress(function(key){
        if (key.which == 13){
            var input1 = $('#user-answer').val().toLowerCase();
            $("#user-answer").val(""); 
            playerInput(input1);
            }
    })
    })
