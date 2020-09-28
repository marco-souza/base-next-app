import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Content from './Content';

const setup = setupComponentForTest(
  <Content>
    <div data-testid="children" />
  </Content>,
);

describe(`Content tests`, () => {
  it('should render content with children', () => {
    const { wrapper } = setup();

    expect(wrapper.getByTestId('content')).toBeTruthy();
    expect(wrapper.getByTestId('children')).toBeTruthy();
  });
});
