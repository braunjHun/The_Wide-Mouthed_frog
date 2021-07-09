const { mountSize } = require('./mountSize');

describe('test Mount Size functions', () => {
  it('animal ant is wide', () => {
    expect(mountSize.getMountSize("ant")).toBe("wide");
  });
});