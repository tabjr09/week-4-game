
  var targetNumber;
  var wins =0;
  var losses =0;
  var level = 1; //first level of game

  var crystals = $("#crystals");
  var newGame = $("#new-game");

  var counter;


  Initialize();

function Initialize (){
    counter = 0;

    //clear out any crystal images on the screen, and update the wins, loses and counter
    $('#crystals').empty();
    $('#wins').html(wins);
    $('#losses').html(losses);
    $('#new-score').html("New Score: " + counter);

    //set the target number the user needs to guess
    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").html("Number to Guess: " + targetNumber);

    //loops through each crystal image, adds a class, source, and displays the crystal
    for (var i = 0; i < (level+3); i++) {

        //give each crystal image a random value
        var crystalnumber = Math.floor(Math.random() * 12) + 1;

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "../week-4-game/assets/images/diamondgif.gif");


        imageCrystal.attr("data-crystalvalue", crystalnumber);

        //display crystal image on the page
        crystals.append(imageCrystal);

        console.log("crystal-image[" + i + "] is "+ crystalnumber);
  }
}

//each time user clicks on a crystal image, add the crystal's value to the HTML
crystals.on("click", ".crystal-image", function() {

    $('#number-to-guess').empty();

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;


    $('#new-score').html("New Score: " + counter);

    //if user clicks the correct number for the crystals, increment the level, display message, otherwise display message
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
    $('#message').html("Crystal Clicker!<br>Click on any combination of the crystals to attain the target score.")

  });

