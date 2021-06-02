var a = ["r", "p", "s"];
 var  istifadeci = 0;
 var komputer = 0;

function computer (){

    function texminisec(min, max){

     return Math.random()*(max-min)+min;

          }

     return a[Math.floor(texminisec(0,3))];

 }
    
    //  var x = computer();
    


    // console.log(x);

function user() {
    var x = computer();
    
        computer();
    if(event.key == "r" && x == "s"){
        alert("User qazandi. Tebrikler!"+ " " + "user" + " " + event.key + " computer " + x + " secdi");
        istifadeci ++;
        document.write(istifadeci);
    }
    else if(event.key == "r" && x == "p"){
        alert("Computer qazandi."  + " " + "user:" + event.key + "computer: "+ x);
        komputer+=komputer;   
        document.write(komputer);

    }   
    else if(event.key == "r" && x == "r"){
        alert("Beraberlik!" + " " + "user:" + event.key + "computer: "+ x);
    }
    else if(event.key == "p" && x == "p"){
        alert("Beraberlik!"+" "+ "user:" + event.key + "computer: "+ x);
    }
    else if(event.key == "p" && x == "s"){
        alert("Computer qazandi."  + " " + "user:" + event.key + "computer: "+ x)
        komputer++;   
        document.write(komputer);
    }
    else if(event.key == "p" && x == "r"){
        alert("User qazandi. Tebrikler!"+ " " + "user" + " " + event.key + " computer " + x + " secdi");
        istifadeci ++;
        document.write(istifadeci);

    }
    else if(event.key == "s" && x == "s"){
        alert("Beraberlik!" + " " + "user:" + event.key + "computer: "+ x);
    }
    else if(event.key == "s" && x == "p"){
        alert("User qazandi. Tebrikler!"+ " " + "user" + " " + event.key + " computer " + x + " secdi");
        istifadeci ++;
        document.write(istifadeci);

    }
    else if(event.key == "s" && x == "r"){
        alert("Computer qazandi."  + " " + "user:" + event.key + "computer: "+ x);
        komputer++;   
        document.write(komputer);

    }
}



      

    window.onkeypress = user;
    





