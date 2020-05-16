// var ans = prompt("Are we there yet???");
// while (ans!=="yes" && ans!=="yeah"){
//     var ans = prompt("Are we there yet???");
// }
// alert("We made it!!!");

var ans = prompt("Are we there yet???");
while (ans.indexOf("yes")===-1){
    var ans = prompt("Are we there yet???");
}
alert("We made it!!!");