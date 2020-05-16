window.setTimeout(function() {
    var movie = [
        {
            title: "The Matrix",
            watched: true,
            Rating:4.8
        },
        {
            title: "Frozen",
            watched: false,
            Rating:3.5
        },
        {
            title: "Lord of the Rings",
            watched: true,
            Rating:4.7
        },
        {
            title: "Annabelle",
            watched: false,
            Rating:3
        }
    ];
    for(var i=0;i<movie.length;i++){
        if(movie[i].watched===true){
            console.log("You have watched "+"\""+movie[i].title+"\""+" - "+movie[i].Rating+" stars");
        }
        else{
            console.log("You have not watched "+"\""+movie[i].title+"\""+" - "+movie[i].Rating+" stars");
        }
    }
}, 500);
