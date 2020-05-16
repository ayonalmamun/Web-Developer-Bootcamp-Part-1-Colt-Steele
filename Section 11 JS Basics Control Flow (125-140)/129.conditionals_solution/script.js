var age=Number(prompt("Please enter your age: "));
if (age < 0){
    console.log("Error");
}
if (age==21){
    console.log("Happy 21st birthday!");
}
if (age%2==1){
    console.log("Age is odd");
}
if (age%Math.sqrt(age)===0){
    console.log("Perfect Square");
}