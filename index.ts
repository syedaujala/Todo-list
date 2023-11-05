#! /usr/bin/env

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let todos : string[]=[]
let loop = true;

while (loop){
    const answer:{
        TODO : string ,
        addmore: boolean
    } = await inquirer.prompt([
        {
            type : "input",
            name:"TODO",
            message:"waht do you want to add your list",
        },{
            type:"confirm",
            name:"addmore",
            message:"do you want to add more todo?",
            default:false
        }
    ])
    const{TODO,addmore}=answer;
    loop = addmore 
    if (TODO){
        todos.push(TODO)
    } else{
        console.log("Kindily enter your valid input")
    }
}

if (todos.length > 0){
    console.log("your todo list: ");
    todos.forEach(TODO =>{
        console.log(TODO)
    })
}else {
    console.log("No found your list: ")
}