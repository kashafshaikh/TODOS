#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition === true) {
    let option = await inquirer.prompt({
        name: "user_option",
        type: "list",
        message: "select an option",
        choices: ["add", "delete", "view", "update"]
    });
    if (option.user_option == "add") {
        let addTask = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        });
        if (addTask.todo !== '') {
            todos.push(addTask.todo);
            todos.forEach(todo => console.log(todo));
        }
        else {
            console.log("Please write something to add in your todos");
        }
    }
    if (option.user_option == "view") {
        console.log("***** TO DO LIST *****");
        todos.forEach(todo => console.log(todo));
        console.log("************************");
    }
    if (option.user_option === "update") {
        let update = await inquirer.prompt({
            name: "update_items",
            type: "list",
            message: "Select item to update",
            choices: todos
        });
        let update2 = await inquirer.prompt({
            name: "update_items2",
            message: "update item",
            type: "input"
        });
        let newtodos = todos.filter(val => val != update.update_items);
        todos = [...newtodos, update2.update_items2];
        todos.forEach(todo => console.log(todo));
    }
    if (option.user_option === "delete") {
        let remove = await inquirer.prompt({
            name: "removeitems",
            type: "list",
            message: "Select items to delete",
            choices: todos
        });
        let newtodos = todos.filter(val => val != remove.removeitems);
        todos = [...newtodos];
        todos.forEach(todo => console.log(todo));
    }
    let user_ans = await inquirer.prompt([{
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more ?",
            default: "true"
        }]);
    if (user_ans.addMore === false) {
        condition = false;
    }
}
