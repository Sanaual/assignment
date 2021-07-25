//This function is for killometer To Meter calculation
function killometerToMeter(killometer){
    if(killometer >= 0){
    var killo = killometer * 1000;
    }
    else{
        var killo = "Invalid Input";
    
    }
    return killo;
}


//This function is for budget calculation
function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        var budget = "Invalid Input";
        
    }
    else{
    budget =  watch * 50 + phone * 100 + laptop * 500;
    }
    return budget;
}


//This function is for hotel cost calculation
function hotelCost(day){
    var cost;
    if(day < 0){
        cost = "Invalid Input";
    }
   else if(day >= 1 && day <= 10){
        cost = day * 100;
    }
    else if(day > 10 && day <= 20){
        day = day - 10;
        cost = day * 80 + (10 * 100)
    }
    else if(day > 20){
        day = day - 20;
        cost = day * 50 + (10 * 100) + (10 * 80)
    }
    return cost;
}


//This function is for Mega Friend
function megaFriend(friend){
    let boronam = friend[0];

for(var i = 0 ; i < friend.length ; i++){
    const name = friend[i];
    if(name.length > boronam.length){
        boronam = name;
    }
}
return boronam;

}

console.log(killometerToMeter(2));

console.log(budgetCalculator(1,1,2));

console.log(hotelCost(30));

const friend = ["alal" , "dolal" , "jalal00087iygdfgdf", "romi", "sami", "samdani"];
const megaFriendName = megaFriend(friend);
console.log(megaFriendName);

