import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import optionConcat from "../../logic/optionConcat";

function SetName({ name, handleChange }) {
  return (
    <Form.Group>
      <Form.Label>Name of Set</Form.Label>
      <Form.Control
        required
        name="title"
        placeholder="My Problems"
        id="title"
        value={name}
        onChange={(e) => handleChange(e)}
      />
    </Form.Group>
  );
}

function ProblemStyles({ handleChange }) {
  return (
    <Form.Group className="ProblemLayout">
      <Form.Label>Problem Style</Form.Label>
      <Form.Control
        as="select"
        name="selection"
        onChange={(e) => handleChange(e)}
      >
        <option value="default">Select a style!</option>
        <option value="singleNum">
          Single number focus (9 + 1, 9 + 2, 9 + 5, ...)
        </option>
        <option value="randomNum">Random numbers between A and B</option>
      </Form.Control>
    </Form.Group>
  );
}

function Operators({ handleChange }) {
  return (
    <Form.Group className="Operators">
      <Form.Label>Operators</Form.Label>
      <div className="opCheckboxes">
        {["+", "-", "*", "/"].map((operator) => (
          <Form.Check
            required
            name="operators"
            type="checkbox"
            id={operator}
            label={operator}
            key={operator}
            onChange={(e) => handleChange(e)}
          />
        ))}
      </div>
    </Form.Group>
  );
}
/*
function NumberRange({ value, onChange }) {
    return (
        <Form.Group>
            <p className="text-center">
                <Form.Label className="float-left">0</Form.Label>
                {value}
                <Form.Label className="float-right">20</Form.Label>
            </p>
            <Form.Control
                type="range"
                min="0"
                max="20"
                step="1"
                value={value}
                onChange={(e)=>handleChange(e)}
            />
        </Form.Group>
    );
}
*/

function SetRange({ range, handleChange, problemStyle }) {
  const title = {
    first: "",
    second: "",
  };
  switch (problemStyle) {
    case "singleNum":
      title.first = "Number Focus";
      title.second = "Max Number to Add";
      break;
    case "randomNum":
      title.first = "Minimum Number";
      title.second = "Maximum Number";
      break;
  }
  return (
    <Form.Group style={{ display: "block" }}>
      <Row>
        <Col>
          <Form.Label>{title.first}</Form.Label>
          <Form.Control
            required
            name="range"
            type="number"
            id="min"
            value={range.min}
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col>
          <Form.Label>{title.second}</Form.Label>
          <Form.Control
            required
            name="range"
            type="number"
            id="max"
            value={range.max}
            onChange={(e) => handleChange(e)}
          />
        </Col>
      </Row>
    </Form.Group>
  );
}

function SetCount({ count, handleChange }) {
  return (
    <Form.Group>
      <Form.Label>Problem Count</Form.Label>
      <Form.Control
        required
        name="count"
        type="number"
        value={count}
        onChange={(e) => handleChange(e)}
      />
    </Form.Group>
  );
}

function OptionMenu({ visible, setVisible, retrieveOptions }) {
  const [problemStyle, setProblemStyle] = useState();

  const [validated, setValidated] = useState(false);
  const [checked, setChecked] = useState({
    "+": false,
    "-": false,
    "*": false,
    "/": false,
  });

  const [name, setName] = useState("");

  const [range, setRange] = useState({
    min: 0,
    max: 0,
  });
  const [count, setCount] = useState(64);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    retrieveOptions(optionConcat(name, checked, range, count, problemStyle));
  };

  const handleChange = (e) => {
    const target = e.target;
    switch (target.name) {
      case "title":
        setName(target.value);
        break;
      case "count":
        setCount(target.value);
        break;
      case "range":
        setRange({ ...range, [target.id]: target.value });
        break;
      case "selection":
        setProblemStyle(target.value);
        break;
      case "operators":
        setChecked({ ...checked, [target.id]: !checked[target.id] });
        break;
    }
    console.log(target.value);
  };

  return (
    <Form
      className="OptionMenu"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={visible}
    >
      <h2>Customize Problem Set</h2>
      <SetName name={name} handleChange={handleChange} />
      <ProblemStyles handleChange={handleChange} />
      <Operators checked={checked} handleChange={handleChange} />
      <SetRange
        range={range}
        handleChange={handleChange}
        problemStyle={problemStyle}
      />
      <SetCount count={count} handleChange={handleChange} />
      {/* <NumberRange value={range} onChange={onChange} /> */}
      <Button
        variant="outline-primary"
        className="GenerateButton"
        type="submit"
        onClick={() => setVisible({ display: "none" })}
      >
        Save
      </Button>
    </Form>
  );
}

export default OptionMenu;
