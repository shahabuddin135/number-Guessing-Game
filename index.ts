#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let randomNumber = Math.floor(Math.random()*10 + 1);

let numGame;
console.log(chalk.bgCyan("Guess a number from 1 to 10"));
do{
  numGame = await inquirer.prompt([
  {
    name: "userGuess",
    type:"number",
    message:"Enter your Guessed number",
  },
]);



if(numGame.userGuess === randomNumber){
  console.log(chalk.bgGreen(`Yes!! ${randomNumber} is the correct answer!`));
}else if(numGame.userGuess > randomNumber){
  console.log(chalk.bgRed(`${numGame.userGuess} is too high!`));
}else if(numGame.userGuess < randomNumber){
  console.log(chalk.bgBlueBright(`${numGame.userGuess} is too low!`));
  
}
}while(numGame.userGuess !== randomNumber);