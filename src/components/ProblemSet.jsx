import { Container, Row, Col } from "react-bootstrap/";
import { generateProblem } from "../logic/generateProblem.js";

const problemList = generateProblem({ min: 1, max: 10, count: 64, operators: ['+', '-'] });
const newArr = [];
const count = 64;
const rows = Math.sqrt(count);
while (problemList.length) newArr.push(problemList.splice(0, rows));

function ProblemSet() {
    return (
        <Container>
            {newArr.map((problemRow) => {
                return (
                    < Row >
                        {problemRow.map((problem, index) => {
                            const { a, b, op, ans } = problem;
                            return (
                                <Col>
                                    <p key={index}>{a} {op} {b} = {ans}</p>
                                </Col>)
                        })
                        }
                    </Row>)
            })}
        </Container >
    );
}

export default ProblemSet;