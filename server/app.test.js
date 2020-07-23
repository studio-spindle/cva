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

  it('does not allow a request without origin', async (done) => {
    const msg = 'CORS origin is not set.';
    const res = await request(app)
      .get('/');
  
    expect(res.status).toBe(500);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(msg));

    done();
  });

  it('notifies if the origin is not correct', async (done) => {
    const msg = 'Error: The CORS policy for this site does not allow access from http://example.com.';
    const res = await request(app)
      .get('/')
      .set('Origin', 'http://example.com');
  
    expect(res.status).toBe(500);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(msg));

    done();
  });

  it('allows requests having correct origin header', async (done) => {
    const res = await request(app)
      .get('/')
      .set('Origin', 'http://localhost:3000');
  
    expect(res.status).toBe(404);

    done();
  });
});
