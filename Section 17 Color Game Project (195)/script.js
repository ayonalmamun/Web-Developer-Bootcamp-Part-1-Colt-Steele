var numOfSquare = 6;
var color = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay =  document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var msg = document.querySelector("#msg");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".modeButton");

init();

function init(){
    //mode buttton event listeners
    setupModeButtons();
    setupSquare();
    resetGame();
};



function resetGame(){
    //generate new colors
    color = generateRandomColors(numOfSquare);
    //pick a random coolor from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (var i=0;i<square.length;i++){
        if(color[i]){
            square[i].style.display="block";
            square[i].style.background = color[i];
        }
        else{
            square[i].style.display="none";
        }  
    }
    h1.style.background = "steelblue";
    msg.textContent = "";
    reset.textContent="New Colors";

};

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numOfSquare = 3;
//     color = generateRandomColors(numOfSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i=0;i<square.length;i++){
//         if(color[i]){
//             square[i].style.background = color[i];
//         }
//         else{
//             square[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numOfSquare = 6;
//     color = generateRandomColors(numOfSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i=0;i<square.length;i++){
//             square[i].style.background = color[i]; 
//             square[i].style.display = "block"; 
//     }
// });

resetButton.addEventListener("click",function(){
    resetGame();
});



function changeColor(changeColor){
    //loop through all square
    for(var i=0;i<square.length;i++){
        square[i].style.background=changeColor;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []; 
    //add random color to array
    for(var i=0; i<num;i++){
        //get random color and push into array
        arr.push(randomColor());
    }

    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random()*256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random()*256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " +b +")";
}

function setupModeButtons(){
    for (var i=0;i<modeButton.length;i++){
        modeButton[i].addEventListener("click",function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        //using turnary operator instead of if-else
        this.textContent==="Easy" ? numOfSquare = 3: numOfSquare = 6;
        // if(this.textContent==="Easy"){
        //     numOfSquare = 3;
        // }
        // else{
        //     numOfSquare = 6;
        // }
        resetGame();
        });
    }
}

function setupSquare(){
    for(var i=0;i<square.length;i++){
        //add initial color to square
        square[i].style.background = color[i];
    
        //add click Listeners to squares
        square[i].addEventListener("click",function(){
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if(clickedColor===pickedColor){
                msg.textContent="Correct";
                resetButton.textContent = "Play Again?";
                h1.style.background=clickedColor;
    
                changeColor(this.style.background);
            }
            else{
                this.style.background = "#232323";
                msg.textContent="Try Again";
            }
        });
    }
}