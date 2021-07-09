const { MountSize } = require('./mountSize');

describe('test Mount Size functions', () => {
  it('animal ant is wide', () => {
    const mountSize = new MountSize();
    expect(mountSize.getMountSize("ant")).toBe("wide");
  });
  it('animal alligator is small', () => {
    const mountSize = new MountSize();
    expect(mountSize.getMountSize("alligator")).toBe("small");
  });
  it('animal Alligator is small', () => {
    const mountSize = new MountSize();
    expect(mountSize.getMountSize("Alligator")).toBe("small");
  });
});