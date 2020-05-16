var someObject={};
console.log(someObject);
someObject._name="Hedwig";
console.log(someObject);
someObject.age=6;
console.log(someObject);
var prop="color";
someObject[prop]="red";
console.log(someObject);
// someObject.123=true; error


var hogwarts={
    friends:[
        {name:"Malfoy"},
        {name:"Kabila"},
        {name:"Discount"}
    ],
    color: "black",
    isEvil: true
};
console.log(hogwarts.friends[2].name);
console.log(hogwarts.isEvil);
