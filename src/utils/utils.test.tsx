import {randomIntFromInterval} from '.';

// test utils

// test randomIntToInterval
describe('randomIntToInterval tests', () => {
  it('should return random integer between two number', () => {
    const min = 1;
    const max = 10;
    expect(randomIntFromInterval(min, max)).toBeGreaterThanOrEqual(min);
    expect(randomIntFromInterval(min, max)).toBeLessThanOrEqual(max);
  });
});
