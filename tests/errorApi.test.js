const { getWrongUrl } = require('../src/errorApi');

test('Should throw error for wrong URL', async () => {
  await expect(getWrongUrl()).rejects.toThrow('Request failed with status code 404');
});