import { describe, it, expect } from 'vitest';

import { createButton } from './button.js';
import userEvent from '@testing-library/user-event';

describe('createButton', () => {
  it('should create a button element', () => {
    const button = createButton();

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.tagName).toBe('BUTTON');
  });

  it('should have the text "Click Me"', () => {
    const button = createButton();

    expect(button.textContent).toBe('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    const button = createButton();

    // button.click();
    await userEvent.click(button)

    expect(button.textContent).toBe('Clicked!');
  });
});
