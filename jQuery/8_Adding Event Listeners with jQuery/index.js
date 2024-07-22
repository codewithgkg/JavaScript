$("h1").click(function(){
    $("h1").css("color", "purple")
});

// add event listener to all buttons
for (var i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}

// add event listener to all buttons via Jquery
$("button").click(function(){
    $("h1").css("color", "purple");
});

// fetching input in text
$("document").keypress(function(event){
    console.log(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});