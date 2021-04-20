import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Header from './Header';

const setup = setupComponentForTest(<Header />);

describe(`Header tests`, () => {
  it('should render logo', () => {
    const { wrapper } = setup();

    expect(wrapper.getByTestId('logo').innerHTML).toContain('Next.js');
  });
});
