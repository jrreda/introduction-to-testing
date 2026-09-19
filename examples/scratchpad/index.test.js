import { test, expect, vi } from 'vitest';

const logSpy = vi.spyOn(console, 'log');

test('a super simple test', () => {
  console.log('Hello World!');

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('Hello World!');
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toHaveBeenCalledTimes(1);
});
