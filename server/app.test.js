const request = require('supertest');
const app = require('./app.js');

let spy;

describe('CORS', () => {
  beforeEach(() => {
    spy = jest.spyOn(global.console, 'error').mockImplementation();
  });
  afterEach(() => {
    spy.mockRestore();
  });

  it('does not allow a request without origin', async () => {
    const msg = 'Error: No origin has been set';
    const res = await request(app)
      .get('/test');
  
    expect(res.status).toBe(500);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(msg));
  });

  it('notifies if the origin is not correct', async () => {
    const msg = 'Error: The CORS policy for this site does not allow access from http://example.com.';
    const res = await request(app)
      .get('/test')
      .set('Origin', 'http://example.com');
  
    expect(res.status).toBe(500);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(msg));
  });

  it('allows requests having correct origin header', async () => {
    const res = await request(app)
      .get('/test')
      .set('Origin', 'http://localhost:3000');
  
    expect(res.status).toBe(404);
  });
});

