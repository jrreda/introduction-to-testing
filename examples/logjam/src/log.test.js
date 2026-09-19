import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('development', () => {
  beforeEach(() => {
    vi.stubEnv('MODE', 'development');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('logs to the console in development mode', () => {
    const spy = vi.spyOn(console, 'log');

    log('Hello, world!');

    expect(spy).toHaveBeenCalledWith('Hello, world!');
  });
});

describe('production', () => {
  beforeEach(() => {
    vi.stubEnv('MODE', 'production');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('does not log to the console in production mode', () => {
    const spy = vi.spyOn(console, 'log');

    log('Hello, world!');

    expect(spy).not.toHaveBeenCalledWith('Hello, world!');
  });
});
