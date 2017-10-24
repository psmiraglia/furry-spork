const FurrySpork = require('../src/index');

describe('FurrySpork', () => {
  test('must be bar', () => {
    expect(FurrySpork.foo).toBe('bar');
  });
});
