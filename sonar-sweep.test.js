//Problem 1 Behaviors:
//- given only one depth, returns 0
//- given two depths, the second greater, returns 1
//- given two depths, the second smaller, returns 0
//- given any number of depths, does the thing

const { sonarSweep } = require('./sonar-sweep.js');

describe('sonarSweep1', () => {
  test('input: 1 depth, output: 0', () => {
    const input = '200';
    const actual = sonarSweep(input);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  test('input: 2 depths, second deeper, output: 1', () => {
    const input = `200\n201`;
    const actual = sonarSweep(input);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  test('input: 2 depths, second less deep, output: 0', () => {
    const input = `200\n199`;
    const actual = sonarSweep(input);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  test('input: any number of mixed depths, output: counts increases in depth', () => {
    const input = `200\n199\n200\n201\n180\n200`;
    const actual = sonarSweep(input);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
