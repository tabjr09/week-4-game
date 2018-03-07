
  var targetNumber;
  var wins =0;
  var losses =0;
  var level = 1;

  var crystals = $("#crystals");
  var newGame = $("#new-game");

  var counter;


  Initialize();

function Initialize (){
    counter = 0;

    $('#crystals').empty();
    $('#wins').html(wins);
    $('#losses').html(losses);
    $('#new-score').html("New Score: " + counter);

    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").html(targetNumber);

    for (var i = 0; i < (level+3); i++) {

        var crystalnumber = Math.floor(Math.random() * 12) + 1;

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "../week-4-game/assets/images/diamondgif.gif");


        imageCrystal.attr("data-crystalvalue", crystalnumber);

        crystals.append(imageCrystal);

        console.log("crystal-image[" + i + "] is "+ crystalnumber);
  }
}

crystals.on("click", ".crystal-image", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;


    $('#new-score').html("New Score: " + counter);

    if (counter === targetNumber){
        level++;
      $('#message').html("You Won! Let's play again on Level " + level);
      wins++;

      $('#wins').html(wins);

    }

    else if (counter >= targetNumber) {
      $('#message').html("You Lost. Let's try again.")
      losses++;
      $('#losses').html(losses);

    }

  });

  newGame.on('click', function(){


    Initialize();
    $('#message').html("Crystal Clicker! Click on any combination of the crystals to attain the target score.")

  });

