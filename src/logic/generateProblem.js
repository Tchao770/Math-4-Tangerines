function solveEquation({ a, b, op }) {
    switch (op) {
        case ('+'):
            return a + b;
        case ('-'):
            return a - b;
        case ('*'):
            return a * b;
        case ('/'):
            return a / b;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperator(operators) {
    let index = Math.floor(Math.random() * operators.length);
    return operators[index];
}

function generateProblem({ min, max, count, operators }) {
    const problemset = [];
    for (let i = 0; i < count; i++) {
        let problem =
        {
            a: getRandomInt(min, max),
            b: getRandomInt(min, max),
            op: getRandomOperator(operators),
        }
        problem.ans = solveEquation(problem);
        problemset.push(problem);
    }
    return problemset;
}

export { generateProblem, getRandomInt };