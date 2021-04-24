import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Operators() {
    return (
        <Form.Group className="Operators">
            <p>Operators</p>
            {
                ['+', '-', '*', '/'].map((operator) =>
                    <Form.Check
                        type='checkbox'
                        id={`default-${operator}`}
                        label={operator}
                        key={operator}
                    />
                )
            }
        </Form.Group>
    )
}

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
                onChange={onChange}
            />
        </Form.Group>
    );
}

function OptionMenu() {
    const [range, setRange] = useState(0)
    const onChange = (event) => {
        setRange(event.target.value);
    }

    return (
        <Form className="OptionMenu">
            <h2>Customize your Problem set!</h2>
            <Operators />
            <NumberRange value={range} onChange={onChange} />
            <Button variant="outline-primary" className="GenerateButton">Generate!</Button>
        </Form>
    );
}

export default OptionMenu;