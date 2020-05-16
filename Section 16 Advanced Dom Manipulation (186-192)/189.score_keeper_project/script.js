var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var r = document.querySelector("#reset");
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var input = document.querySelector("#input");
var maxMatch = document.querySelector("#maxMatch");
var s3= document.querySelector("#s3"); //var s3= document.querySelector("p span");
var p1Score=0;
var p2Score=0;
var gameOver= false;
var winningScore= 5;
p1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score===winningScore){
			gameOver=true;
			s1.classList.add("winner");
		}
		s1.textContent=p1Score;
	}
});
p2.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score===winningScore){
			gameOver=true;
			s2.classList.add("winner");
		}
		s2.textContent=p2Score;
	}
});
r.addEventListener("click",function(){
	reset();
});
function reset(){
	p1Score=0;
	p2Score=0;
	s1.textContent=p1Score;
	s2.textContent=p2Score;
	s1.classList.remove("winner");
	s2.classList.remove("winner");
	gameOver= false;
}
input.addEventListener("change",function(){
	s3.textContent=this.value;//input.value
	winningScore=Number(this.value);//input.value
	reset();
});