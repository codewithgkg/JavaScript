    // 1. Create a var that stores the name that user enters via prompt.
    var name = prompt("What is your name?");

    // 2. Capitalise the first letter of their name.

    // g isolate the first char
    var firstChar = name.slice(0,1);

    // b Turn the first char to upper case
    var upperCaseFirstChar = firstChar.toUpperCase();

    // c Isolate the rest of the name
    var restofName = name.slice(1,name.length);

    //d Change the rest of the name to lower case
    restofName = restofName.toLowerCase();

    // e concactenate the first char with the rest of the char

    var CapitalisedName = upperCaseFirstChar + restofName;

    // 3 We use the capitalised version of their name to regret them using an alert
    alert("Hello, " + CapitalisedName)

