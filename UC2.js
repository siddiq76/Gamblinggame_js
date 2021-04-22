const Stack = 100;
const Beeting = 1;

//variable
let result;

function gambling() {
    result = Stack;
    var result_check = Math.floor(Math.random() * 2);
    if(result_check == Beeting){
        result = result + Beeting;
}else {
    result = result - Beeting;
}
console.log(result);
}
gambling()