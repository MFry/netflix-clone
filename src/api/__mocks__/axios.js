import fs from 'fs';

const get = url =>
  new Promise((resolve, reject) => {
    const lastSlash = url.lastIndexOf('/');
    if (url.includes('discover')) {
      fs.readFile('./src/api/__mocksData__/discover.json', 'utf-8', (err, data) => {
        if (err) reject(err);
        resolve({ data: JSON.parse(data) });
      });
    }
  });

const post = url => jest.fn(url);
const axios = {};
axios.get = get;
axios.post = post;

// module.exports = axios;
// module.exports.default = axios;
export default axios;
