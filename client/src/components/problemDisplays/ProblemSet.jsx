//import { useForm } from "react-hook-form";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap/";
import { generateProblem } from "../../logic/generateProblem.js";

function ProblemSet(props) {
  const options = props.location.state.problemItem;
  const [anss, setAnss] = useState();
  const problemList = generateProblem(options);
  const newArr = [];
  const count = 64;
  const rows = Math.sqrt(count);
  while (problemList.length) newArr.push(problemList.splice(0, rows));
  return (
    <Container className="ProblemGrid">
      <h1>{options.name}</h1>
      {newArr.map((problemRow) => {
        return (
          <Row>
            {problemRow.map((problem, index) => {
              const { a, b, op, ans } = problem;
              return (
                <Col>
                  <Form.Label key={`${index}${a}${b}`}>
                    {a} {op} {b} =
                    <Form.Control
                      size="sm"
                      type="number"
                      value={anss}
                      onChange={(e) => setAnss(e.value)}
                    />
                  </Form.Label>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
}

export default ProblemSet;
