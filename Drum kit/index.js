var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got click!");

        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}