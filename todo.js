import inquirer from "inquirer";
let toDo = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            name: "addTask",
            type: "input",
            message: "Please add your task"
        },
        {
            name: "confirmation",
            type: "confirm",
            message: "Do You Want to add More task?"
        }
    ]);
    toDo.push(answers.addTask);
    loop = answers.confirmation;
}
;
console.log(`Your to do list is ${toDo}`);
