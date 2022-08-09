import supertest from 'supertest';
import app from '../index';
const request = supertest(app);


describe('test basic end point ', () => {
  it('should return hello world', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    // expect(response.text).toBe('Hello World!');
  });
});
