function hi(){
console.log("Habu Modon");
}
hi();
setInterval(hi,1000);


clearInterval();//number displayed in browser


setInterval(function hi(){
    console.log("Yes! Habu Modon");
},1000)