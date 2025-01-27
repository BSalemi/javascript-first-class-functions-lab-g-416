function countdown(callback){
    window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){

    return function(value){
        return multiplierValue * value;
    };
}

function multiplier(){
    return a * b;
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)