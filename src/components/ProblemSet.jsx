import { Container, Row, Col, Form } from "react-bootstrap/";
import { generateProblem } from "../logic/generateProblem.js";

const problemList = generateProblem({operators: ['+', '-'], min: 1, max: 10, count: 64 });
const newArr = [];
const count = 64;
const rows = Math.sqrt(count);
while (problemList.length) newArr.push(problemList.splice(0, rows));

function ProblemSet() {
    return (
        <Container className="ProblemGrid">
            {newArr.map((problemRow) => {
                return (
                    < Row >
                        {problemRow.map((problem, index) => {
                            const { a, b, op, ans } = problem;
                            return (
                                <Col>
                                    <Form.Label key={`${index}${a}${b}${op}`}>{a} {op} {b} =
                                        <Form.Control size="sm" type="number" value={ans}/>
                                    </Form.Label>
                                </Col>)
                        })
                        }
                    </Row>)
            })}
        </Container >
    );
}

export default ProblemSet;