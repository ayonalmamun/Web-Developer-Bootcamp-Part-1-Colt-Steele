window.setTimeout(function() {
    var todo = [];
    var input = prompt("What do you want to do???");
    while (input!=="quit"){
        if (input==="list"){
            todoList();
        }
        else if(input==="new"){
            addTodo();
        }
        else if(input==="delete")
        {
            deleteTodo();
        }
        var input = prompt("What do you want to do???");
    }
console.log("Terminated!");


function todoList(){
    console.log("***");
    todo.forEach(function(toDo,i){
        console.log(i+": "+toDo);
    });
    console.log("***");
}

function addTodo(){
    var newTodo = prompt("Enter new Todo");
    todo.push(newTodo);
    console.log("Added!");
}
function deleteTodo(){
    var index = prompt("Index Number to delete: ");
    todo.splice(index,1);//delete the index number,how many I want to delete
    console.log("Deleted!")
}
}, 500);
