var userChoice = prompt("Do you choose rock, paper or scissors?");
 var computerChoice = Math.random();
 if (computerChoice < 0.34) {
 computerChoice = "rock";
 } else if(computerChoice <= 0.67) {
 computerChoice = "paper";
 } else {
 computerChoice = "scissors";
 } console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2) {
    if(choice1==choice2)
        return "The result is a tie!";

    else if(choice1=="rock") {
        if(choice2=="scissors")
            console.log("rock wins");
        else if(choice2=="paper")
            console.log("paper wins");

        else if(choice1=="paper")
            if(choice2=="scissors")
                console.log("scissors wins");
            else if(choice2=="rock")
                console.log("paper wins");

            else if(choice1=="scissors")
                if(choice2=="paper")
                    console.log("scissors wins");
                else if(choice2=="rock")
                    console.log("rock wins");

    }
}