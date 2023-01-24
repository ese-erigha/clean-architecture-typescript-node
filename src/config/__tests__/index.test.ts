import { config } from '..';

describe('Config', () => {
  it('loads config', () => {
    expect(config.DATABASE).toBeDefined();
  });
});
