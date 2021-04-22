const Stake = 100 ;
const betting = 1 ;
const Days = 20 ;

let result;
let monthly_stake = 0;
let monthly_investment = 0;
let luckiest_count = 0;
let unluckiest_count = 0;
var user_decide = 1;
var luckiest_days = [];
var unluckiest_days = [];

function gambling(){
    for( var day = 1 ; day <= Days ; day++ ){
        result = Stake;
        while( result > ( Stake / 2 ) && result < ( Stake + ( Stake/2 ))){
            var result_check = Math.floor( Math.random() * 2 );
            switch(result_check){
                case betting :
                    result = result + betting ;
                    break;
                default :
                    result = result - betting ;
                    break;
            }
       }
       switch(result){
        case ( Stake / 2 ) :
            console.log(`Result of day ${Days} is Gambler loss $${result}`);
            unluckiest_days[++unluckiest_count] = day; 
            break;
        default :
            console.log(`Result of day ${Days} is Gambler Won $${result}`);
            luckiest_days[++luckiest_count] = day;
           break;
    }
    monthly_investment = monthly_investment + Stake;
    monthly_stake = monthly_stake + result;
}
 process.stdout.write("Luckiest Days : ")
    for(var count = 1 ; count < luckiest_days.length ; count++){
        process.stdout.write(", "+luckiest_days[count]);
    }
    process.stdout.write("\nUnluckiest Days : ")
    for(var count = 1 ; count < unluckiest_days.length ; count++){
        process.stdout.write(", "+unluckiest_days[count]);
    }
if(monthly_stake > monthly_investment){
    var total = monthly_stake - monthly_investment ;
    console.log(`Gambler Won $${total} in this month`)
}
else{
    var total =  monthly_investment - monthly_stake ;
    console.log(`Gambler Loss $${ total } in this month`) 
}
var prompt = require('prompt-sync')()
    
if(monthly_stake > monthly_investment){
   var user_decide = prompt('Press 1 to continue game : ')
   if(user_decide == 1){
       gambling();
   }
   else {
       console.log(" game ends here thanks for playing");
   }
}

}
gambling();