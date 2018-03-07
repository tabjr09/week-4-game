
  var targetNumber;
  var wins =0;
  var losses =0;

  

  var crystals = $("#crystals");
  var newGame = $("#new-game");

  var counter;

  //Math.floor(Math.random() * 100) + 1;

  Initialize();

function Initialize (){
    counter = 0;

    $('#crystals').empty();
    $('#wins').html(wins);
    $('#losses').html(losses);
    $('#new-score').html("New Score: " + counter);

    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").html(targetNumber);

    for (var i = 0; i < 4; i++) {

        var crystalnumber = Math.floor(Math.random() * 12) + 1;

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
        //imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");


        imageCrystal.attr("src", "../week-4-game/assets/images/diamondgif.gif");


        imageCrystal.attr("data-crystalvalue", crystalnumber);

        crystals.append(imageCrystal);

        console.log("crystal-image[" + i + "] is "+ crystalnumber);
  }
}
  // This time, our click event applies to every single crystal on the page. Not just one.
crystals.on("click", ".crystal-image", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;


    $('#new-score').html("New Score: " + counter);

    if (counter === targetNumber) {
      $('#message').html("You Won! Let's play again.")
      wins++
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

