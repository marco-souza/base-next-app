import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Footer from './Footer';

const setup = setupComponentForTest(<Footer />);

describe(`Footer tests`, () => {
  it('should render footer', () => {
    const { wrapper } = setup();

    expect(wrapper.getByTestId('footer')).toBeTruthy();
  });
});
