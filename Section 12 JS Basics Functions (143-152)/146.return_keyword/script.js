// function capitalize(str){
//     return str.charAt(0).toUpperCase()+str.slice(1);
// }
// var city="chor";
// capital=capitalize(city);
// console.log(capital);

function capitalize(str){
    if(typeof str==="number"){
        return "thats not a number!"
    }
    else{
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
}
var city="chor";
capital=capitalize(city);
console.log(capital);


// ************************

// var a = function hi()
// {
//     console.log("Hi Habu");
// }
// a();

// a="Hi Discount";

// a();

// a;

