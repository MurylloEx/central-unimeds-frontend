import { get } from '../../src/core/services';

describe('Http service', () => {

  test('should complete the request with status 200 ok', async () => {
    const [success, response] = await get<any>({ url: 'https://api.unimed.coop.br/unimed/v3/unimeds' });

    expect(success).toBe(true);
    expect(response.status).toBe(200);
  })

});