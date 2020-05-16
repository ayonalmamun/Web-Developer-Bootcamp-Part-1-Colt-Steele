window.setTimeout(function() {
    var person = {
        name: ["Kabila","Habu","Discount"]
    };
    // function print(arr){
    //     arr.forEach(function(el){
    //         console.log(el);
    //     });
    // }
    // print(person.name);


    person.print=function(){
        this.name.forEach(function(el){
            console.log(el);
        });
    };
    person.print();
}, 500);

