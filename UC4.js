const Stake = 100 ;
const betting = 1 ;
const Days = 20 ;

let result;

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
        console.log('Game Result of' +Days + ' Days is :'+result);
    }
}
gambling();