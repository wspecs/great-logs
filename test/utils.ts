import * as lib from '../lib/utils';
import { expect } from 'chai';

describe('word parser', () => {
  beforeEach(() => {
    // Set up before running tests.
  });

  it('initializes', () => {
    expect(lib.getDate().length).to.equal(37);
  });
});
