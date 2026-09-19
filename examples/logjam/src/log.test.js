import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

const sendMock = vi.mock('./send-to-server', () => {
  return { sendToServer: vi.fn() };
});

import { sendToServer } from './send-to-server';

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

  it('Does not send messages to the server in development mode', () => {
    log('Hello, world!');

    expect(sendToServer).not.toHaveBeenCalledWith('info', 'Hello, world!');
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

  it('sends messages to the server in production mode', () => {
    log('Hello, world!');

    expect(sendToServer).toHaveBeenCalledWith('info', 'Hello, world!');
  });
});
