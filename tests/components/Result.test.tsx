import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Result } from '../../src/core/components';

describe('Result component', () => {

  test('should render without errors the Result component', async () => {
    render(
      <Result 
        name="CENTRAL NACIONAL UNIMED" 
        phone="(11) 3268-7000" 
        address="Alameda Santos, 1826 - São Paulo, SP" 
        uf="SP" 
        siteUrl="www.centralnacionalunimed.com.br"
      />
    );
  });

  test('should match rendered component with snapshot', () => {
    const tree = create(
      <Result 
        name="CENTRAL NACIONAL UNIMED" 
        phone="(11) 3268-7000" 
        address="Alameda Santos, 1826 - São Paulo, SP" 
        uf="SP" 
        siteUrl="www.centralnacionalunimed.com.br"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
