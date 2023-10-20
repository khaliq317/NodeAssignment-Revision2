import inquirer from "inquirer";
let loop = true;
while (loop) {
    let compGeneratedNum = Math.floor(Math.random() * 10);
    var answers = await inquirer.prompt([
        {
            name: "Guess",
            type: "number",
            message: "Please Guess the number between 1 to 10:"
        }
    ]);
    if (answers.Guess === compGeneratedNum) {
        console.log("Congratulations! You won the Game");
        console.log(`secret Number: ${compGeneratedNum} \n And Your Guess is: ${answers.Guess}`);
    }
    else {
        console.log("Oops! Try again");
        console.log(`secret Number: ${compGeneratedNum} \n And Your Guess is: ${answers.Guess}`);
    }
    ;
    const conf = await inquirer.prompt([
        {
            name: "confirmation",
            type: "confirm",
            message: "Do You Want to Play Again?"
        }
    ]);
    loop = conf.confirmation;
}
;
