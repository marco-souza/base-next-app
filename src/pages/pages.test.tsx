/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import AppLayout from './_app';

import Home, { getStaticProps } from './index';

describe(`Page tests`, () => {
  const TestComponent = () => <p data-testid="test-component">test</p>;
  const setup = setupComponentForTest(
    <AppLayout Component={TestComponent} pageProps={{}} />,
  );

  it('should render _app', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });
});

describe(`Home tests`, () => {
  const setup = setupComponentForTest(<Home />);

  it('should render home', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });
});

describe(`StaticProps tests`, () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should fetch data', async () => {
    const fakeUser = { name: 'Joni Baez' };
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUser),
      } as Response),
    );
    await expect(getStaticProps()).resolves.toStrictEqual({
      props: { profile: fakeUser },
    });
  });

  it('should throw error', async () => {
    await expect(getStaticProps()).rejects.toThrow();
  });
});
