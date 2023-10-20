import inquirer from "inquirer";
const { paragraph } = await inquirer.prompt([
    {
        name: "paragraph",
        type: "input",
        message: "Please Enter your Paragraph"
    }
]);
let a = paragraph;
console.log(`Total words in Your paragraph are ="${a.trim().split(" ").length}"`);
function charLength(a) {
    return a.trim().replace(/ /g, "").length;
}
;
let x = charLength(a);
console.log(`Total Characters in your paragraph are ="${x}"`);
