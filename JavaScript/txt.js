
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
     "description": "Okay, well good luck... You can always change your mind...",
     "directions": {
        "yes": "prologue",
        "no": "prologue-no",
      }
   },

   "living-room": {
     "description": "You've returned to your living room. The front door is to your left and your basement \
                     is to your right.",
     "directions": {
        "go left": "outside",
        "go right": "basement",
     }
   },

   "outside":{
     "description": "You have now officially begun your quest! In front of you lies the Mystic Forest, \
     and behind you lies the Village. Watch out though, because even though you’ve just started your journey, \
     Skellybones’s minions are already hunting you down. In fact, a small horde of Goblins is approaching as \
     we speak! Good luck, Adventurer!",

     "directions": {
       "fight": "fight-goblins",
       "go backward": "living-room",
     }
   },

   "fight-goblins": {
     "description": "Good idea! The Goblins are numerous, but not very effective fighters. You are \
                       able to defeat them with just the might of your fists. In case you forgot, the Mystic \
                       Forest lies in front of you, and your village behind you.",
     "directions": {
       "go forward": "mystic-forest",
       "go backward": "living-room",
       "death": "living-room",
     }
   },

   "basement": {
    "description": "You enter your basement and descend down the steps. There is a tube of toothpaste sitting on a crate right in front of you.",
    "directions": {
        "collect toothpaste": "collect1",
        "go backward": "living-room",
        "search": "search-crate",
    }
   },

   "search-crate": {
     "description": "You open the crate and find a shield inside.",
     "directions": {
       "collect shield": "collect2",
       "go backward": "living-room",
     }
   },

   "collect1": {
       "description": "Toothpaste has been collected.",
       "directions": {
         "go backward": "living-room",
         "search": "search-crate",
       }
   },

   "collect2": {
     "description": "The shield has been collected.",
     "directions": {
       "go backward": "living-room",
     }
   },

   "outside-forest": {
     "description": "You now stand just outside the Mystic Forest. Go forwards to enter.",
     "directions": {
        "go forward": "mystic-forest",
     }
   },

   "mystic-forest": {
     "description": "You have now entered the Mystic Forest. In the dim \
     lighting, you can just make out a bright patch in the distance which you assume to be a clearing.",
     "directions": {
        "go forward": "mf-sword",
        "go backward": "outside-forest",
     }
   },

   "mf-sword": {
     "description": "Your mind wanders while you trek onward, and you stumble over something under the rotting leaves.",
     "directions": {
       "search": "sword",
       "go forward": "encounter-giant",
       "go backward": "outside-forest",
     }
   },

   "sword": {
     "description": "Under the leaves you discover the magnificent sword of an Adventurer who \
                    came before you. The blade suits you nicely, not too long or heavy, and the \
                    new weapon sends a rush of courage through you. However the caked on blood \
                    reminds you why you’ve been sent on this quest and fills you with a new \
                    determination to save the Earth. ",
   }

 }

var currentRoom = "start";

function changeroom(dir) {
    if (rooms[currentRoom].directions[dir]) {
        currentRoom = rooms[currentRoom].directions[dir];
         $("#game-text").append("<p>" + rooms[currentRoom].description + "<p>");
         changeLocation(currentRoom);
  }
}

function changeLocation(currentRoom){

  if(currentRoom == "start"){
    document.getElementById("location").innerHTML = "Lobby";
  } else if(currentRoom == "prologue" || currentRoom == "living-room"){
    document.getElementById("location").innerHTML = "Living Room";
  } else if(currentRoom == "basement"){
    document.getElementById("location").innerHTML = "Basement";
  } else if(currentRoom == "outside"){
    document.getElementById("location").innerHTML = "outside";
  } else if(currentRoom == "mystic-forest"){
    document.getElementById("location").innerHTML = "The Mystic Forest";
  } else if(currentRoom == ""){
    document.getElementById("location").innerHTML = "";
  }
}

var inventory = ["slice of cheese", "map"];
var commands = ["go forward", "go backward", "go left", "go right", "search", "climb up", "climb down", "hide now", "talk to", "show inventory", "show help", "fight enemy", "collect"];

var moves1 = 0;
function moves(type){
  if (type == "regular") {
    moves1++;
    document.getElementById("moves").innerHTML = moves1;
  }

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
    else if (type == "death") {
      score1 = score1 - score1;
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
            moves("regular");
            break;
        case "no":
            var dir = "no";
            changeroom(dir);
            moves("regular");
            break;
        case "go forward":
            var dir = "go forward";
            changeroom(dir);
            moves("regular");
            break;
        case "go backward":
            var dir = "go backward";
            changeroom(dir);
            moves("regular");
            break;
        case "go left":
            var dir = "go left";
            changeroom(dir);
            moves("regular");
            break;
        case "go right":
            var dir = "go right";
            changeroom(dir);
            moves("regular");
            break;
        case "show help":
            showHelp();
            break;
        case "show inventory":
            showInventory();
            break;
        case "fight":
            var dir = "fight";
            moves("regular");
            changeroom(dir);
            playerDeath(currentRoom, inventory);
            break;
        case "search":
            var dir = "search";
            moves("regular");
            changeroom(dir);
            break;
        case "climb up":
            var dir = "climb up";
            moves("regular");
            changeroom(dir);
            break;
        case "climb down":
            var dir = "climb down";
            moves("regular");
            changeroom(dir);
            break;
        case "hide now":
            var dir = "hide now";
            changeroom(dir);
            moves("regular");
            break;
        case "talk to":
            var dir = "talk to";
            changeroom(dir);
            moves("regular");
            break;
        case "collect":
            var dir = "collect";
            changeroom(dir);
            moves("regular");
            break;
        default:
            if (inputs.includes("collect")){
                if (inputs == "collect toothpaste"){
                    inventory.push("toothpaste");
                    var dir = "collect toothpaste";
                    changeroom(dir);
                    score("inventory");
                    moves("regular");
                } else if(inputs == "collect shield"){
                    inventory.push("shield");
                    var dir = "collect shield";
                    changeroom(dir);
                    score("inventory");
                    moves("regular");
                }
            }
}
}

function playerDeath(currentRoom, inventory){

  if(currentRoom == "fight-goblins" && inventory.includes("shield")){
    score("enemy");
  } else if (currentRoom == "fight-goblins") {
    window.alert(`You have died! Rest in peace, brave Adventurer... Your final score was ${score1} and you made a total of ${moves1} moves.`);
    score("death");
    dir = "death";
    changeroom(dir);
    changeLocation(currentRoom);
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
