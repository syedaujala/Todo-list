#! /usr/bin/env
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "waht do you want to add your list",
        }, {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answer;
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindily enter your valid input");
    }
}
if (todos.length > 0) {
    console.log("your todo list: ");
    todos.forEach(TODO => {
        console.log(TODO);
    });
}
else {
    console.log("No found your list: ");
}
