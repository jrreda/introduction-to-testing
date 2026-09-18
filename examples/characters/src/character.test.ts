import { describe, it, expect, beforeEach } from 'vitest';
import { Character } from './character.js';

const firstName = 'Mahmoud';
const lastName = 'Reda';
const role = 'Fron-end engineer';

describe('Character', () => {
  // let character;

  // beforeEach(() => {
  //   character = new Character(firstName, lastName, role);
  // });

  it('should create a character with a first name, last name, and role', () => {
    const character = new Character(firstName, lastName, role);

    expect(character).toEqual(
      expect.objectContaining({
        firstName,
        lastName,
        role,
      }),
    );
  });

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);

    expect(character.level).toBe(1);

    character.levelUp();

    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character(firstName, lastName, role);
    const beforeUpdate = character.lastModified;

    character.levelUp();

    expect(beforeUpdate).not.toBe(character.lastModified);
  });
});
