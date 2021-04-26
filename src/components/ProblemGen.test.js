import { ProblemGen } from "./ProblemGen"

test('Return size of array', () => {
    expect(ProblemGen({ min: 0, max: 3, count: 5, operators: ['+', '-'] }).length).toBe(5);
})