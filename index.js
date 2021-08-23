 
function isLeap(year) {
    
/**************Don't change the code above****************/    
    if (year%4 !== 0){
        alert("It's not a leap year");
    }
    else {
        if(year%100 !== 0){
            alert("It's a leap year");
        }else{
            if(year%400 === 0){
                alert("It's a leap year");
            }else{
                alert("It's not a leap year");
            }
        }
    }

    

/**************Don't change the code below****************/    

}

var useryear = prompt("What's the year you want to know?");
isLeap(useryear);
