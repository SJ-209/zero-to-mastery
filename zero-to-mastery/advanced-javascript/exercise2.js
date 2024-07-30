//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// my code //

function winBattle(bool) {
    return bool;
}

var experiencePoints = "experience points gained" + ( winBattle(true) ? " 10" : " 1");

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//my code//

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// my code switch //

function moveCommand(direction) {
    switch (direction) {
        case "forward":
            whatHappens = "You found a Triumph T120"
            break;
        case "back":
            whatHappens = "You walked home"
            break;
        case "right":
            whatHappens = "You got a lift home"
            break;
        case "left":
            whatHappens = "You got robbed"
            break;
        default:
            whatHappens = "Please enter a valid direction"; 
    }
    return whatHappens;
}