const axios = require('axios');

async function getWrongUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/wrong-endpoint');
  } catch (error) {
    throw new Error('Request failed with status code ' + error.response.status);
  }
}

module.exports = { getWrongUrl };