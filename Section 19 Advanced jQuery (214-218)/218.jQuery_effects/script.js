// $("button").on("click", function(){
//     $("div").fadeOut(1000);
//     // $("div").fadeOut();
//     console.log("FADE INVADED!");
// })

// fadeOut(1000,function() 
// setting time is not neccessary

$("#fadeout").on("click", function(){
    $("div").fadeOut(1000,function(){
        console.log("FADE INVADED!");
        // $(this).remove();
    });
    
})

$("#fadein").on("click", function(){
    $("div").fadeIn(1000,function(){
        console.log("FADE IN!");
    });
    
})

$("#toggle").on("click", function(){
    $("div").fadeToggle(1000,function(){
        console.log("FADE TOGGLED!");
    });
    
})

$("#su").on("click", function(){
    $("div").slideUp(1000,function(){
        console.log("Slide Up!");
    });
    
})


$("#sd").on("click", function(){
    $("div").slideDown(1000,function(){
        console.log("Slide Down!");
    });
    
})

$("#st").on("click", function(){
    $("div").slideToggle(1000,function(){
        console.log("Slide Toggled!");
    });
    
})