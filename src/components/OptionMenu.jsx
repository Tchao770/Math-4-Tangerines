import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import optionConcat from '../logic/optionConcat';

function Operators({ handleChange }) {
    return (
        <Form.Group className="Operators">
            <Form.Label>Operators</Form.Label>
            {
                ['+', '-', '*', '/'].map((operator) =>
                    <Form.Check
                        required
                        name="operators"
                        type='checkbox'
                        id={operator}
                        label={operator}
                        key={operator}
                        onChange={(e) => handleChange(e)}
                    />
                )
            }
        </Form.Group>
    )
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
function SetRange({ range, handleChange }) {
    return (
        <Form.Group>
            <Row>
                <Col>
                    <Form.Label>Minimum Number</Form.Label>
                    <Form.Control
                        required
                        name="range"
                        type="number"
                        value={range.min}
                        onChange={(e) => handleChange(e)} />
                </Col>
                <Col>
                    <Form.Label>Maximum Number</Form.Label>
                    <Form.Control
                        required
                        name="range"
                        type="number"
                        value={range.max}
                        onChange={(e) => handleChange(e)} />
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
                onChange={(e) => handleChange(e)} />
        </Form.Group>
    );
}

function OptionMenu() {
    const [validated, setValidated] = useState(false);
    const [checked, setChecked] = useState({
        '+': false,
        '-': false,
        '*': false,
        '/': false,
    });
    const [range, setRange] = useState({
        min: 0,
        max: 0,
    });
    const [count, setCount] = useState(0);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkVailidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        optionConcat(checked, range, count);
    }

    const handleChange = (e) => {
        const target = e.target;
        switch (target.name) {
            case ("count"):
                setCount(target.value);
                break;
            case ("range"):
                setRange(target.value);
                break;
            case ("operators"):
                setChecked({ ...checked, [target.id]: !checked[target.id] });
                break;
        }
    }

    return (
        <Form className="OptionMenu" noValidate validated={validated} onSubmit={handleSubmit}>
            <h2>Customize your Problem set!</h2>
            <Operators checked={checked} handleChange={handleChange} />
            <SetRange range={range} handleChange={handleChange} />
            <SetCount count={count} handleChange={handleChange} />
            {/* <NumberRange value={range} onChange={onChange} /> */}
            <Button variant="outline-primary" className="GenerateButton" type="submit">Generate!</Button>
        </Form>
    );
}

export default OptionMenu;