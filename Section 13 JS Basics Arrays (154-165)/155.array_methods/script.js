var color = ["red","orange","yellow"];
console.log(color);
color.push("green");
console.log(color);


color.pop();
console.log(color);

// unshift adds a variable in the beginning and shift removes a variable from the beginning
color.unshift("kabila");
console.log(color);
color.shift();
console.log(color);


// indexOf
console.log(color.indexOf("yellow"));
console.log(color.indexOf("habu"));

//slice copies
//copy from to till this one (from,till this one)
var color2=color.slice(0,2);
console.log(color2);

//slice without passing anything in parameter means copy all
var color3=color.slice();
console.log(color3);