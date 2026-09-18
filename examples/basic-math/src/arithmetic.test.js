import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('Should add 2 positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('Should add 2 negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('Should parse strings into numbers', () => {
    expect(add("1", "1")).toBe(2);
  });
});

describe('subtract', () => {
  it('Should subtract one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });
});

describe('multiply', () => {
  it('Should multiply 2 numbers', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});

describe('divide', () => {
  it('Should divide 2 numbers', () => {
    expect(divide(4, 2)).toBe(2);
  });
});
