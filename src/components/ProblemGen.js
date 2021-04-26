function Solve() {

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperator(operators) {
    let index = Math.floor(Math.random() * operators.length);
    return operators[index];
}

function ProblemGen({ min, max, count, operators }) {
    const problemset = [];
    for (let i = 0; i < count; i++) {
        let problem =
        {
            a: getRandomInt(min, max),
            b: getRandomInt(min, max),
            operator: getRandomOperator(operators),
        }
        problemset.push(problem);
    }
    return problemset;
}

export { ProblemGen, getRandomInt };