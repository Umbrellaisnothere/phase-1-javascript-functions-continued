// code your solution here
function saturdayFun (activity = 'roller-skate'){
   return `This Saturday, I want to ${activity}!` ; 
};

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(para01 = '*'){
    return function(para02 = "a hard worker"){
        return `You are ${para01}${para02}${para01}!`
    } 
}

