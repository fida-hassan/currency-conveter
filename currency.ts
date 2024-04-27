#! /usr/bin/env node

import inquirer from "inquirer"



const currency: any ={
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.79,
    INR: 74.57,
    PKR: 280,

};

let user_answers = await inquirer.prompt([
    
    {
        name: 'from',
        message:"enter from currency",
        type: 'list',
        choices: ['USD','EUR', 'GBP', 'INR', 'PKR']
      },

      {
        name: "to",
        message: "enter to currency",
        type: 'list',
        choices: ['USD','EUR', 'GBP', 'INR', 'PKR']
      },


      {
        name: 'amount',
        message:"enter your amount currency",
        type: 'number'
       
      }

]
)


let fromAmount = currency[user_answers.from]
let toAmount = currency[user_answers.to]
let amount = user_answers.amount
let baseAmount = amount / fromAmount // USD
let convertedAmount =baseAmount * toAmount
console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);