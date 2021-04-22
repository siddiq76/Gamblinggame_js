const Stake = 100 ;
const betting = 1 ;
const Days = 20 ;

let result;
let monthly_stake = 0;
let monthly_investment = 0;

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
            break;
        default :
        console.log(`Result of day ${Days} is Gambler Won $${result}`);
        break;
    }
    monthly_investment = monthly_investment + Stake;
    monthly_stake = monthly_stake + result;
}
if(monthly_stake > monthly_investment){
    var total = monthly_stake - monthly_investment ;
    console.log(`Gambler Won $${total} in this month`)
}
else{
    var total =  monthly_investment - monthly_stake ;
    console.log(`Gambler Loss $${ total } in this month`) 
}
}
gambling();