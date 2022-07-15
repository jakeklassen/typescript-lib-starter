import { describe, expect, test } from 'vitest';
import { sum } from '#/math.js';

describe('Math', () => {
  describe('sum', () => {
    test('should return the sum of the given numbers', () => {
      expect(sum(1, 2, 3)).toEqual(6);
    });
  });
});
