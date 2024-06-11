#! /usr/bin/env node
import inquirer from "inquirer";
//storing main currencies rate according to base rate (USD).
const currencyRates = {
    USD: 1,
    PKR: 278.5,
    INR: 83.6,
    EUR: 0.93,
    SAR: 3.75,
    AUD: 1.51,
    CAD: 1.38,
    GBP: 0.78,
};
//question for users.
let userInput = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "PKR", " INR", " EUR", "SAR", "AUD", "CAD", "GBP"],
        //choices: ["United States Dollar","Pakistani Ruppee","Indian Ruppee","Euro","Australian Dollar","Canadian Dollar","Great Britian Pounds"],
        message: "Select the currency you want to convert from: ",
    },
    {
        name: "to",
        type: "list",
        //choices: ["United States Dollar","Pakistani Ruppee","Indian Ruppee","Euro","Australian Dollar","Canadian Dollar","Great Britian Pounds"],
        choices: ["USD", "PKR", " INR", " EUR", "SAR", "AUD", "CAD", "GBP"],
        message: "Select the currency you want to convert into: ",
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount:",
    },
]);
//storing user's input amount currency according to base currency.
let fromAmount = currencyRates[userInput.from];
let toAmount = currencyRates[userInput.to];
let userAmount = userInput.amount;
//converting user's given amount into base currency (USD).
let baseAmount = userAmount / fromAmount;
//conversion into user's currencies
let conversion = baseAmount * toAmount;
console.log(conversion);
