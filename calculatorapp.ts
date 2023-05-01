#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";




const sleep=()=>
{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}

async function welcome()
{

let rainbow = chalkAnimation.rainbow("lets start the calculation"); // start
await sleep();
rainbow.stop();

}


async function calculator(){
    
   let answers= await inquirer
    .prompt([
        {
        name: "opertor",
        type: "list",
        message: "which operator you want to perform?",
        choices: ["Addition","Subtraction","Multiplication","Division","Mode"] 
    },
    {
        name: "num1",
        type: "number",
        message: "Enter first number:" 
    },
    
    {
        name: "num2",
        type: "number",
        message: "Enter second number:" 
    },
])
if(answers.opertor=="Addition")
    {
        console.log(chalk.bgYellow (`${answers.num1} + ${answers.num2} = ${answers.num1+answers.num2}`));
    }
    else if(answers.opertor=="Subtraction")
{
    console.log(chalk.bgYellow (`${answers.num1} - ${answers.num2} = ${answers.num1-answers.num2}`));
}
else if(answers.opertor=="Multiplication")
{
    console.log(chalk.bgYellow (`${answers.num1} * ${answers.num2} = ${answers.num1*answers.num2}`));
}
else if(answers.opertor=="Division")
{
    console.log(chalk.bgYellow (`${answers.num1} / ${answers.num2} = ${answers.num1/answers.num2}`));
}
else if(answers.opertor=="Mode")
{
    console.log(chalk.bgYellow (`${answers.num1} % ${answers.num2} = ${answers.num1%answers.num2}`));
}

};
async function restart() {
    do{
        await calculator();
        var startAgain= await inquirer.prompt(
            {
                name: "again",
                type: "input",
                message: "Do you want to continue the calculation? press y for yes or n for no:" 
            }
            )
        }while(startAgain.again=="y"||startAgain.again=="Y")
    }
    
    
    await welcome();
    
    restart();
    