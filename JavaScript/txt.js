
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
     and behind you lies the Village. Watch out though, because even though you have just started your journey, \
     Skellybones minions are already hunting you down. In fact, a small horde of Goblins is approaching as \
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
                    reminds you why you have been sent on this quest and fills you with a new \
                    determination to save the Earth. ",
     "directions": {
       "collect sword": "collect3",
       "go forward": "encounter-giant",
       "go backward": "mf-sword",
     }
   },

   "collect3": {
     "description": "The sword has been collected.",
     "directions": {
       "go forward": "encounter-giant",
       "go backward": "mf-sword",
     }
   },

   "encounter-giant": {
     "description": "You spot a large figure just a few yards ahead. What could it be?",
     "directions": {
       "go forward": "giant",
       "go backward": "mf-sword",
     }
   },

   "giant": {
     "description": "A Giant is blocking your only path forward.",
     "directions": {
       "fight": "fight-giant",
       "go backward": "avoid-giant",
     }
   },

   "fight-giant": {
     "description": "Wow! Were those fighting skills the result of pure adrenaline, \
     or did the Council strike gold when they selected you for this adventure?! You slayed \
     the Giant with incredible grace and you are almost to the Clearing. ",
     "directions": {
       "go forward": "clearing",
     }
   },

   "avoid-giant": {
     "description": "You have avoided the Giant for now, but remember, you don’t have forever to complete your mission.",
     "directions": {
       "go forward": "fight-giant",
     }
   },

   "clearing": {
     "description": "You have now entered the Clearing. You decide to camp here for a \
                     little while, but your next step will be to do a little bit of exploring. \
                     You can continue forwards towards Caspian’s lair, but there are two paths between \
                     the trees to your right and to your left. ",
     "directions": {
        "go forward": "exit-mf",
        "go right": "cliff",
        "go left": "encounter-ghosts",
     }
   },

   "exit-mf": {
     "description": "Congratulations! You successfully made it through the Mystic Forest. Looking out on the horizon \
                    you can see a small, abandoned-looking castle. This must be Caspian's lair! However, you can't \
                    simply walk right in. There is an enormous Golden Sphinx on the prowl, guarding the castle. \
                    Hopefully she will see that you come in peace. Good luck!",
    "directions": {
      "go forward": "walk-onward",
      "go backward": "clearing",
    }
   },

   "cliff": {
     "description": "Look out below! You have fallen off a cliff.",
     "directions": {

     }
   },

   "encounter-ghosts": {
     "description": "In the distance you spot some Ghosts. You watch as they disintegrate trees with their projectile spells.",
     "directions": {
       "fight": "ghosts",
       "go backward": "clearing",
     }
   },

   "ghosts": {
     "description": "You should not have brought a sword to a spells battle! You have died.",
     "directions": {
       
     }
   },

   "walk-onward": {
     "description": "Hours pass as you trek onward and the tiny castle in the distance \
                     grows larger with every step. However, so does the Sphinx who has become acutely aware \
                     of your approach.",
     "directions": {
        "go forward": "sphinx-pounce",
      }
   },
   "sphinx-pounce": {
     "description": "The sphinx springs upon you and you cower, awaiting her claws and teeth. But when you open your eyes, you \
     see the sphinx centimeters away from you.",
     "directions": {
       "talk to": "riddle1",
     }
   },

    "riddle1": {
     "description": "You say 'hello!' The sphinx nods her head and in a voice like nectarine tells you that if you would like to live, you \
     must solve three riddles. The first riddle she asks you is this: \
     A man is going to a party. Along the way he meets a man with seven wives. Each of the wives as seven bags. \
     Each of the bags have seven cats. \
     Each of the cats has seven kittens. Each of the kittens has seven toys. How many people are going to the party?\
     a. 1 \
     b. 0 \
     c. 16, 807 \
     d. 7",
     "directions": {
       "a": "correct1",
       "b": "wrong1",
       "c": "wrong1",
       "d": "wrong1",
     }
   },

   "correct1": {
     "description": "The sphinx nods her head, impressed that you have passed the first test. She begins telling you the next riddle: \
     If there are 100000000 bricks on a plane, and one falls off, how many are left? \
     a. 99999999 \
     b. 100000000 \
     c. 3749875 \
     d. 1 \
     e. 0",
     "directions": {
       "a": "correct2",
       "b": "wrong2",
       "c": "wrong2",
       "d": "wrong2",
       "e": "wrong2",
     }
   },

   "correct2": {
     "description": "The sphinx adjusts her paws and picks her teeth, a bit tense with yor apparent talent for riddles. \
     However, she is certain that you will not solve this last one. She says: A woman is walking, then suddenly dies in the middle of \
      the street. How? \
      a. She was run over by a car \
      b. She was hit with a brick \
      c. She was shot \
      d. She was poisoned",
      "directions": {
        "a": "wrong3",
        "b": "correct3",
        "c": "wrong3",
        "d": "wrong4",
      }
   },

   "correct3": {
     "description": "Congratulations! You have passed the Sphinx's riddle test.",
     "directions": {
       "go forward": "room6",
     }
   },

   "wrong3": {
     "description": "The sphinx breaks a toothy grin and suddenly springs upon you, breaking through your skin and bones. You have died.",
   },

   "wrong1": {
     "description": "The sphinx breaks a toothy grin and suddenly springs upon you, breaking through your skin and bones. You have died.",
   }

 }

var currentRoom = "start";

function changeroom(dir) {
    if (rooms[currentRoom].directions[dir]) {
        currentRoom = rooms[currentRoom].directions[dir];
         $("#game-text").append("<p>" + rooms[currentRoom].description + "<p>");
         changeLocation(currentRoom);
  }
  else {
    $("#game-text").append("<p>" + "Uh oh, you cannot execute that command!" + "<p>");
  }
}

function changeLocation(currentRoom){

  if(currentRoom == "start"){
    document.getElementById("location").innerHTML = "Lobby";
  } else if(currentRoom == "prologue" || currentRoom == "living-room"){
    document.getElementById("location").innerHTML = "Living Room";
  } else if(currentRoom == "basement"){
    document.getElementById("location").innerHTML = "Basement";
  } else if(currentRoom == "outside" || currentRoom == "exit-mf"){
    document.getElementById("location").innerHTML = "outside";
  } else if(currentRoom == "mystic-forest"){
    document.getElementById("location").innerHTML = "The Mystic Forest";
  } else if(currentRoom == ""){
    document.getElementById("location").innerHTML = "";
  }
}

var inventory = ["slice of cheese", "map"];
var commands = ["go forward", "go backward", "go left", "go right", "search", "talk to", "show inventory", "show help", "fight", "collect", "a", "b", "c", "d"];

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
        case "a":
            var dir = "a";
            changeroom(dir);
            moves("regular");
            break;
        case "b":
            var dir = "b";
            changeroom(dir);
            moves("regular");
            break;
        case "c":
            var dir = "c";
            changeroom(dir);
            moves("regular");
            break;
        case "d":
            var dir = "d";
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
            playerDeath(currentRoom);
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
                } else if(inputs === "collect sword"){
                  inventory.push("sword");
                  dir = "collect sword";
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

  } else if (currentRoom == "fight-giant" && inventory.includes("shield")) {
    score("enemy");

  } else if (currentRoom == "fight-goblins") {
    window.alert(`You were slain by the horde of Goblins! Rest in peace, brave Adventurer... Your final score was ${score1} and you made a total of ${moves1} moves.`);
    score("death");
    inventory = ["slice of cheese", "map"];
    dir = "death";
    changeroom(dir);
    changeLocation(currentRoom);

  } else if (currentRoom == "fight-giant") {
    window.alert(`You were slain by the Giant! Rest in peace, brave Adventurer... Your final score was ${score1} and you made a total of ${moves1} moves.`);
    score("death");
    inventory = ["slice of cheese", "map"];
    dir = "death";
    changeroom(dir);
    changeLocation(currentRoom);

  } else if (currentRoom == "cliff") {
    console.log()
    window.alert(`You fell off a cliff! Rest in peace, brave Adventurer... Your final score was ${score1} and you made a total of ${moves1} moves.`);
    score("death");
    inventory = ["slice of cheese", "map"];
    dir = "death";
    changeroom(dir);
    changeLocation(currentRoom);

  } else if (currentRoom == "ghosts") {
    window.alert(`You were slain by the Ghosts! Rest in peace, brave Adventurer... Your final score was ${score1} and you made a total of ${moves1} moves.`);
    score("death");
    inventory = ["slice of cheese", "map"];
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
