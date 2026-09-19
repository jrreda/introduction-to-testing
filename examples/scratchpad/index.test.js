import { test, expect, vi } from 'vitest';

const logSpy = vi.spyOn(console, 'log');

test('a super simple spy test', () => {
  console.log('Hello World!');

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('Hello World!');
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toHaveBeenCalledTimes(1);
});

test('a super simple mock test', () => {
  const mockFn = vi.fn()

  mockFn("Hello world")

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('Hello world');
  expect(mockFn).toHaveBeenCalledOnce();
  expect(mockFn).toHaveBeenCalledTimes(1);

  console.log(mockFn.mock);
  console.log(mockFn.mock.calls);
  console.log(mockFn.mock.results);
});
