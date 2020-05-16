function printReverse(a){
    for(var i=a.length-1;i>=0;i--){
        console.log(a[i]);
    }
}

printReverse([1,2,3,4]);
printReverse(["a","b","c"]);

function isUniform(a){
    for(var i=0;i<a.length;i++){
        for(var j=1;j<a.length;j++){
            if (a[i]!==a[j]){
                var x = false;
                break;
            }
        }
    }
    if (x!==false){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","c"]);
isUniform(["b","b","b"]);


function sumArray(a){
    var sum=0;
    for(var i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
    console.log(sum);
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

function max(a){
    var max=0;
    for(var i=0;i<a.length;i++){
        if (a[i]>max){
            max=a[i];
        }
    }
    console.log(max);
}

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);