import isReactImported from '../src/isReactImported.js';

it('imports a CJS package', () => {
    expect(isReactImported()).toBe(true);
});
