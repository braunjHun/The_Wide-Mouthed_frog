const { MountSize } = require('./mountSize');

describe('test Mount Size functions', () => {
  it('animal ant is wide', () => {
    const mountSize = new MountSize();
    expect(mountSize.getMountSize("ant")).toBe("wide");
  });
});