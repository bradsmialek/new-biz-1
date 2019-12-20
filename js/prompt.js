var computer;
var order;
    
var welcomePrompt = function(){

    computer = prompt("Are you looking for a Mac or PC?");

    while(computer !== "mac" && computer !== "pc"){
        
        computer = prompt("Please enter mac or pc...");
    }
    if(computer == "mac" || computer == "pc"){
        order = prompt("How many would you like?");
    }
        
}
        

    

//     if(computer == "mac"){
//         alert("Check out our used Macbook Pros!")
//     }else if(computer == "pc"){
//         alert("Our used custom computers are our most popular!")
//     }else{
//         alert("Dont know? Feel free to browse")
//     }
// }

// var showOrder = function(){
//     var order = prompt("how many do you need?")
 
//     while(order)
// }
welcomePrompt()