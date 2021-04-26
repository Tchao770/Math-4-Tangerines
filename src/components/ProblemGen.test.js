import { ProblemGen, getRandomInt } from "./ProblemGen";

test('Return size of array', () => {
    const genLength = ProblemGen({ min: 0, max: 3, count: 5, operators: ['+', '-'] }).length;
    expect(genLength).toBe(5);
});

test('Return an array with 2 elements, both 1 + 1', () => {
    const genProblem = ProblemGen({ min: 1, max: 1, count: 2, operators: ['+'] });
    expect(genProblem).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                a: 1,
                b: 1,
                op: '+',
                ans: 2,
            })
        ])
    );
});

test('Random number gen returns number in specified range', () => {
    const randVal = getRandomInt(1, 5);
    expect(randVal).toBeGreaterThanOrEqual(1);
    expect(randVal).toBeLessThanOrEqual(5);
});