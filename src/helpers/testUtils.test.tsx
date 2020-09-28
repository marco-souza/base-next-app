import React from 'react';

import { setupComponentForTest } from './testUtils';

describe(`Test utils`, () => {
  it('test setup setupComponentForTest', () => {
    const expectedComponent = <>test</>;
    const setup = setupComponentForTest(expectedComponent);
    const { wrapper } = setup();

    expect(wrapper.getAllByText('test')).toBeTruthy();
  });
});
