$0.addEventListener("click", function(event) {
    console.log(event);
});

function anotherAddEventListner(typeOfEvent, callback){
    //Detect Event Code.....

    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfkeypress: 2
    }

    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}

//

anotherAddEventListner("keypress", function(event){
    console.log(event);
});