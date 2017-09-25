import { discoverMovies } from '../movieDB';

jest.mock('axios');

describe('MovieDB', () => {
  it('discoverMovies fetches data', () => {
    expect.assertions(2);
    return discoverMovies().then((response) => {
      expect(response).toBeDefined();
      expect(response.data.results.length).toBe(20);
    });
  });
});
