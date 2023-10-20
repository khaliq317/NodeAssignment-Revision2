import inquirer from "inquirer";

let userBalance = Math.ceil(Math.random()*100000);

const answers = await inquirer.prompt ([
    {
        name:"userId",
        type:"input",
        message:"Enter Your ID"
    },
    {
        name:"userPin",
        type:"password",
        message:"Please Enter your Password"
    },
    {
        name:"operation",
        type:"list",
        choices:["Balance Inquiry","Withdraw Cash"],
        message:"Kindly select your operator"
    }
]);

if (answers.operation==="Balance Inquiry"){
    console.log(`Your Current Balance is ${userBalance}`)
    setTimeout(() => {
        console.log(`Thank You for using our ATM`);

    },3000);

}; 
 if(answers.operation==="Withdraw Cash") {
     var a =await inquirer.prompt([
        {
            name:"amount",
            type:"number",
            message:"Please Enter your amount"
        }

    ]);
    if (a.amount){
        console.log(`Your transaction is being proceed.Plase wait`);
        setTimeout(() => {
            console.log(`Kindly take your card`)
            setTimeout(() => {
                console.log(`Collect Your Cash`)
                setTimeout(() => {
                    const newBalance = userBalance - a.amount;
                    console.log(`After this transaction, Your new Balace is ${newBalance}`)
                setTimeout(() => {
                    console.log(`Thank You for using our ATM`);
                }, 3000);
                }, 4000);
            },2000);
        },3000);
    }
};



