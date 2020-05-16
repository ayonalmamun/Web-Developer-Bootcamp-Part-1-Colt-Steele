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
    function buildString(movie){
        var result="You have";
        if (movie.watched){
            result+="watched ";
        }
        else{
            result+="not seen ";
        }
        result+="\""+movie.title+"\""+" - ";
        result+= movie.rating+" stars";
        return result;
    }
    movie.forEach(function(movie){
        console.log(buildString(movie));
    });
}, 500);
