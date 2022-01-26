import React from 'react';
import { act } from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '../../src/core/components';

describe('Input component', () => {

  test('should render without errors the Input component', async () => {
    render(
      <Input
        value='sometext'
        onChange={() => {}}
      />
    );
  });

  test('should trigger the onChange event and return the proper value', async () => {
    let text = '';

    function onChange(e: React.ChangeEvent<HTMLInputElement>){
      text = e.target.value;
    }
    
    const { container } = render(
      <Input 
        value={text} 
        onChange={onChange} 
      />
    );

    const input = container.querySelector('#textInput');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'unimed' } });
    });
    
    expect(text).toBe('unimed');
  });

  test('should match rendered component with snapshot', () => {
    const tree = create(
      <Input
        value='sometext'
        onChange={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
