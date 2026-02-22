const axios = require('axios');

async function getWithHeadersAndParams() {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      Authorization: 'Bearer testtoken',
      CustomHeader: 'TestValue'
    },
    params: {
      userId: 1
    }
  });
}

module.exports = { getWithHeadersAndParams };