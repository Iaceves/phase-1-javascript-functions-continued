// code your solution here
function saturdayFun(saturday = 'roller-skate'){
    return (`This Saturday, I want to ${saturday}!`);
}

function mondayWork(monday = 'go to the office'){
    return (`This Monday, I will ${monday}.`);
}

function wrapAdjective(a="*"){
    let sentence
    return function(b = "a hard worker"){
        if (a === "*"){
            sentence = (`You are ${a}${b}${a}!`)
        }
    
        else if (a === "||"){
            sentence = (`You are ${a}${b}${a}!`)
        }
        return sentence
    }
}

