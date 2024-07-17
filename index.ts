#! /usr/bin/env node 
import inquirer from "inquirer";

let todos : string[] = [];


//for further option of if we want to add something in todo mmore
let condition = true;
//jbh conditon false nh hoti ye chlta rhe ga 
while (condition) {


let addtask = await inquirer.prompt([
    {
        message : "WHAT DO YOU WANT T0 ADD IN YOUR TODO",
        name: "todo",
        type: "input",
       
    },
    {
       message : "DO YOU WANT TO ADD MORE TODO",
        name :"addmore",
        type : "confirm", //bcz ans is in yes or no
        default : "false",
         
    }
])

//console.log(addtask.todo);

//ADDING DIFFERENT TAS IN TODOS ARRAY
todos.push(addtask.todo); // todo ke andr ppush ho jo add task todo wale me dal rha hai user input 
condition = addtask.addmore // now it become false because add more me default false hai
//Update condition: The value of condition is set to the value of addtask.addmore. If the user confirms (true), the loop continues; if the user does not confirm (false), the loop stops.
console.log(todos);
}