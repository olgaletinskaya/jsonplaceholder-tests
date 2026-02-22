const axios = require('axios');
const { getWithHeadersAndParams } = require('../src/headerApi');

jest.mock('axios');

test('Should send correct headers and params', async () => {
  axios.get.mockResolvedValue({ data: [] });

  await getWithHeadersAndParams();

  expect(axios.get).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        Authorization: 'Bearer testtoken',
        CustomHeader: 'TestValue'
      },
      params: {
        userId: 1
      }
    }
  );
});