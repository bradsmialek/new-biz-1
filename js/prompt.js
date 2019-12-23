'use strict'



var welcomePrompt = function(){
    
    


}




var order = function (){
    var quantity;
    var item;
    var list= "";
    var computer = prompt("Are you looking for a Mac or PC?");
    

    while(computer !== "mac" && computer !== "pc"){
        computer = prompt("Please enter mac or pc...");
    }

    var quantity = prompt("How many do you want?");
    quantity = Number(quantity);

    while( isNaN(quantity) ){
        quantity = prompt("Please enter a number...");
        quantity = Number(quantity);
    }
    
    if(computer === "mac"){
        alert("You orderdered " + quantity + "Macs");
        item = '<img src="day9-toolbox.png">';
    }else if(computer === "pc"){
        alert("You orderdered " + quantity + "PCs");
        item = '<img src="day9-toolbox.png">';
    }else{
        alert("You should buy something!")
    }
    
    for(var i = 0; i < quantity; i++){
        list = list + item;
    }
    console.log(list);
    return list;

}



// welcomePrompt()   
// order()

