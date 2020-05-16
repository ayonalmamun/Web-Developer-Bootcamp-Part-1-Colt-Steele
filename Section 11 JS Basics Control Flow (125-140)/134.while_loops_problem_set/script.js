console.log("Printing -10 to 19");

var count=-10;
while (count<=19){
    console.log(count);
    count++;
}

console.log("Printing even numbers from 10 to 40");
var count=10;
while (count<=40){
    if(count%2===0)
    {
        console.log(count);
    }
    count++;
}

console.log("Printing odd numbers from 300 to 333");
var count=300;
while (count<=333){
    if(count%2===1)
    {
        console.log(count);
    }
    count++;
}

console.log("Printing all numbers divisible by 5 and 3 between 5 and 50");
var count=5;
while (count<=50){
    if(count%5===0 && count%3===0)
    {
        console.log(count);
    }
    count++;
}