import inquirer from "inquirer";
let dollar = {
    USD: 1,
    PKR: 280,
    AED: 3.5
};
let dirham = {
    AED: 1,
    PKR: 80,
    USD: 0.285
};
let rupee = {
    PKR: 1,
    USD: 0.00357,
    AED: 0.0125
};
const { firstCurrency, amount, convertionCurrency } = await inquirer.prompt([
    {
        name: "firstCurrency",
        type: "list",
        choices: ["PKR", "AED", "USD"],
        message: "Please Select Your desired  currency to convert: "
    },
    {
        name: "amount",
        type: "number",
        message: "Kindly Enter amount to convert:"
    },
    {
        name: "convertionCurrency",
        type: "list",
        choices: ["PKR", "AED", "USD"],
        message: "Please select your convertion currency:"
    }
]);
if (firstCurrency && amount && convertionCurrency) {
    if (firstCurrency === "USD" && convertionCurrency === "PKR") {
        let res1 = amount * dollar.PKR;
        console.log(res1);
    }
    else if (firstCurrency === "USD" && convertionCurrency === "AED") {
        let res2 = amount * dollar.AED;
        console.log(res2);
        console.log(res2);
    }
    else if (firstCurrency === "USD" && convertionCurrency === "USD") {
        let res3 = amount * dollar.USD;
        console.log(res3);
    }
    else if (firstCurrency === "AED" && convertionCurrency === "PKR") {
        let res4 = amount * dirham.PKR;
        console.log(res4);
    }
    else if (firstCurrency === "AED" && convertionCurrency === "USD") {
        let res5 = amount * dirham.USD;
        console.log(res5);
    }
    else if (firstCurrency === "AED" && convertionCurrency === "AED") {
        let res6 = amount * dirham.AED;
        console.log(res6);
    }
    else if (firstCurrency === "PKR" && convertionCurrency === "USD") {
        let res7 = amount * rupee.USD;
        console.log(res7);
    }
    else if (firstCurrency === "PKR" && convertionCurrency === "AED") {
        let res8 = amount * rupee.AED;
        console.log(res8);
    }
    else if (firstCurrency === "PKR" && convertionCurrency === "PKR") {
        let res9 = amount * rupee.PKR;
        console.log(res9);
    }
}
else {
    console.log("Invalid Input");
}
;
