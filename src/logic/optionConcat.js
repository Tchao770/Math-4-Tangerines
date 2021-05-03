import { generateProblem } from "./generateProblem";

function optionConcat(checked, range, count){
    const options = {};
    const operatorArr = [];
    options.min = parseInt(range.min);
    options.max = parseInt(range.max);
    options.count = count;
    for(const[key, value] of Object.entries(checked)){
        if(value){
            operatorArr.push(key);
        }
    }
    options.operators = operatorArr;
    return options;
}

export default optionConcat;