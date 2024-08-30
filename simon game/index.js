
function randomNumberGen(){
    var a=Math.floor(Math.random()*4);
    return a;
}


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

$(document).keypress(function(event) {
  if (event.key=='s'||event.key=="S") {
    $("h1").text("Level " + level);
    nextSequence();
  }
});

$(".box").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(userChosenColour);
  
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("h1").text("Game Over, Press S to Restart");
        $("body").addClass("bodyBackground");
      setTimeout(function () {$("body").removeClass("bodyBackground");}, 200);

      startOver();
      $(".handset").removeClass("addcsshandset");
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber=randomNumberGen();
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);//animation
  playSound(randomChosenColour);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
}


function mobileTab(){
    $("h1").text("Level " + level);
    nextSequence();
    $(".handset").addClass("addcsshandset");
}

