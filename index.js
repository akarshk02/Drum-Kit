var numberOfDrumButton = document.querySelectorAll(".drum").length;

// Detecting Button Press
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}


// Detecting KeyBoard Press
document.addEventListener("keypress", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});


function playSound(buttonPressed) {
  switch (buttonPressed) {
    case "w":
      var tom1 = new Audio("/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonPressed);
  }
}


function buttonAnimation(currentKey) {
  
  var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function() {
    activeButton.classList.remove("pressed");
   }, 100 );
   
   
}
