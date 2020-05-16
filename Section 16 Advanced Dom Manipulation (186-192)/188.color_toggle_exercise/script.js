// var b=document.querySelector("button")

// //b

// var h=document.querySelector("body")

// //h
// var isPink=false;
// b.addEventListener("click",function(){
// 	if(isPink){
// 		h.style.background="pink"	
// 	}
// 	else{
// 		h.style.background="white"
//     }
//     isPink=!isPink;

// })
var b=document.querySelector("button")
b.addEventListener("click",function(){
	document.body.classList.toggle("pink");

})
