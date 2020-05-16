function isEven (x){
    if (x%2==0){
        return true;
    }
    else{
        return false;
    }
}
isEven(4);
isEven(21);
isEven(68);
isEven(333);






function factorial(x)
{   
    var f=1;
    for (var i=1;i<=x;i++){
        f=i*f;
    }
    return f;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);



function kebabToSnake(str){
    var newStr=str.replace(/-/g,"_");
    return newStr;
}
