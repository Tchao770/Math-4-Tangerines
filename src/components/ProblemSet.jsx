//import { useForm } from "react-hook-form";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap/";
import { generateProblem } from "../logic/generateProblem.js";

function ProblemSet({ options }) {
    //const { register } = useForm();
    const [anss, setAnss] = useState(0);
    const problemList = generateProblem(options);
    const newArr = [];
    const count = 64;
    const rows = Math.sqrt(count);
    while (problemList.length) newArr.push(problemList.splice(0, rows));
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
                                        <Form.Control size="sm" type="number" value={ans}  onChange={console.log("nice")}/>
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