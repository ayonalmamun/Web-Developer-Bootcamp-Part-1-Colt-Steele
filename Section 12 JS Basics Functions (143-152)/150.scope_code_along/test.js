function hi(){
    console.log(y);
}
y=65;
//function has access in global variable

function hi(){
    y=65;
}
console.log(y);


//don't have access of a local variable outside local area


function a(){
    x=65;
}
var x=64;
console.log(x);
a();
console.log(x);

//the value replaced

var tex="hi";
function a(){
    var tex="bye"
    console.log(tex);
}
console.log(tex);
a();

//value not same in global/local variable
