import { render } from '@testing-library/react';

export const setupComponentForTest = (component: JSX.Element) => () => {
  const wrapper = render(component);

  return { wrapper };
};
