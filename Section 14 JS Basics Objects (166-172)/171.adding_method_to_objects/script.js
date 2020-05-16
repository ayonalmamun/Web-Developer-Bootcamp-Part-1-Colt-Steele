window.setTimeout(function() {
    //adding methods
    var person = {
        name: "Kabila",
        cg: 4,
        isThief: true,
        add: function(x,y){
            return x+y;
        }
    }
    console.log(person.add(5,10));

    //NameSpacing means having multiple function as same name

    var cat = {
        speak: function(){
            return "meow";
        }
    };
    var dog = {
        speak: function(){
            return "gheu";
        }
    };
    console.log(cat.speak());
    console.log(dog.speak());
}, 500);
