import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

// 1 February
const mockDate = new Date(2024, 1, 1);

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(mockDate);
});

afterEach(() => {
  vi.useRealTimers();
});

describe('delay function', () => {
  it('should call callback after delay', () => {
    const callback = vi.fn();

    delay(callback);

    // Fast-forward time
    vi.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalledWith('Delayed');
  });
});

describe('mock date', () => {
  it('should return the mocked date', () => {
    const currentDate = new Date();
    expect(currentDate).toEqual(mockDate);
  });
});
