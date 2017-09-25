import fs from 'fs';

const get = url =>
  new Promise((resolve, reject) => {
    const lastSlash = url.lastIndexOf('/');
    if (url.includes('discover')) {
      fs.readFile('./src/api/__mocksData__/discover.json', 'utf-8', (err, data) => {
        if (err) reject(err);
        resolve({ entity: JSON.parse(data) });
      });
    }
  });

export { get };
