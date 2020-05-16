window.setTimeout(function() {
    var todo = [];
    var input = prompt("What do you want to do???");
    while (input!=="quit"){
        if (input==="list"){
            console.log(todo);
        }
        else if(input==="new"){
            var newTodo = prompt("Enter new Todo");
            todo.push(newTodo);
        }
        var input = prompt("What do you want to do???");
    }
console.log("Terminated!");
}, 500);