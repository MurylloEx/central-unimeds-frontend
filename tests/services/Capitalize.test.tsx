import { capitalize } from '../../src/core/services';

describe('Capitalize service', () => {

  test('should capitalize the first letter of each word in a phrase', () => {
    expect(capitalize('RuA pRoFESSOR jOSé VICEnTE')).toBe('Rua Professor José Vicente');
  })

});