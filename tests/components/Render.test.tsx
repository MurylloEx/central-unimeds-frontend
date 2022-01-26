import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Render } from '../../src/core/components';

describe('Render component', () => {

  test('should render without errors the Render component', async () => {
    render(
      <Render if={true}>
        {/* Nothing here */}
      </Render>
    );
  });

  test('should not render the inner components', async () => {
    const { container } = render(
      <Render if={false}>
        <input 
          placeholder="Some placeholder" 
          id="inputId" 
          value="Nothing" 
          onChange={() => {}}
        />
      </Render>
    );

    const input = container.querySelector('#inputId');

    expect(input).toBeNull();
  });

  test('should render the inner components', async () => {
    const { container } = render(
      <Render if={true}>
        <input 
          placeholder="Some placeholder" 
          id="inputId" 
          value="Nothing" 
          onChange={() => {}}
        />
      </Render>
    );

    const input = container.querySelector('#inputId');

    expect(input).not.toBeNull();
  });

  test('should match rendered component with snapshot', () => {
    const tree = create(
      <Render if={true}>
        {/* Nothing here */}
      </Render>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
