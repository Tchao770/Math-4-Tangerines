function ProblemGen({ min, max, count, operators }) {
    const problemset = [];
    for(let i = 0; i < count; i++){
        problemset.push(i);
    }
    return problemset;
}

export { ProblemGen };