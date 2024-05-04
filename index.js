#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What would you like to add in your todo?",
            type: "input"
        },
        {
            name: "addMore",
            message: "Would you like to add in your todo?",
            type: "confirm",
            default: "true",
        }
    ]);
    todolist.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todolist);
}
