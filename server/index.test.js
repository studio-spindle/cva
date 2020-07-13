const request = require('supertest');
const app = require('./app.js');

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});

describe('CORS', () => {
  it('does not allow a request without origin', async (done) => {
    const msg = 'Error: No origin has been set';
    const res = await request(app)
      .get('/test');
  
    expect(res.status).toBe(500);
    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(msg));

    done();
  });

  it('notifies if the origin is not correct', async (done) => {
    const msg = 'Error: The CORS policy for this site does not allow access from http://example.com.';
    const res = await request(app)
      .get('/test')
      .set('Origin', 'http://example.com');
  
      expect(res.status).toBe(500);
      expect(console.error).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(msg));
    done()
  });

  it('allows requests having correct origin header', async (done) => {
    const res = await request(app)
      .get('/test')
      .set('Origin', 'http://localhost:3000');
  
    expect(res.status).toBe(404);
    done()
  });
});

