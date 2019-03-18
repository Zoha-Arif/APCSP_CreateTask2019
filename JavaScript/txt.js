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
    spell once more in order defeat Skellybones."
  }
}



$(document).ready(function(){
  var currentRoom = "start";
  function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined){
      currentRoom = rooms[currentRoom].directions[dir];
      $("#game-text").append("<p>" + rooms[currentRoom].description + "<p>");
    }

  }

  $(document).keypress(function(key){
    if ((key.which === 13) && ($("user-answer").is(":focus"))){
      var value = $("user-answer").val().toLowerCase();
      console.log("I AM ALIVE");
      switch (value) {
        case "yes":
            changeRoom("yes");
          break;
        case "no": //show "Okay! Well, see you next time."
            changeRoom("yes");
          break;
        default: //show "Not a valid input."
      }
      }
    })
  })
