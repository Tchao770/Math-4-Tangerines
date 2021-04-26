import { generateProblem } from "../logic/generateProblem.js";
const problemList = generateProblem({ min: 1, max: 10, count: 100, operators: ['+', '-'] });

function ProblemSet() {
    return (
        <div>
            {
                problemList.map((problem, index) => {
                    const { a, b, op, ans } = problem
                    return <p key={index}>{a} {op} {b} = {ans}</p>
                })
            }
        </div>
    );
}

export default ProblemSet;