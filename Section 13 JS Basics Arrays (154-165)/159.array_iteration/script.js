//for each

var color = ["red","orange","yellow"];
color.forEach(function(annabelle){
    console.log("inside the for each " + annabelle);
});



function printcolor(color){
    console.log("***");
    console.log(color);
    console.log("***");
};
colors="hell";
printcolor(colors);
color.forEach(printcolor);