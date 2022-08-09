import UserModel from '../../models/userModel';
import db from '../../DB';
import User from '../../dataTypes/userType';
import supertest from 'supertest';
import app from '../../index';

const userModel = new UserModel();
const request = supertest(app);
let token = '';

describe('User API Endpoints', () => {
  const user = {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    password: 'test123',
  } as User;

  beforeAll(async () => {
    const createdUser = await userModel.create(user);
    user.id = createdUser?.id;
  });

  afterAll(async () => {
    // clean db
    const connection = await db.connect();
    // if you are not using uuid u need to add `\nALTER SEQUENCE users_id_seq RESTART WITH 1;`
    const sql = 'DELETE FROM users;';
    await connection.query(sql);
    connection.release();
  });

  describe('Test Authenticate methods', () => {
    it('should be able to authenticate to get token', async () => {
      const res = await request.post('/api/users/authenticate').set('Content-type', 'application/json').send({
        email: 'test@test.com',
        password: 'test123',
      });
      expect(res.status).toBe(200);
      const { id, email, token: userToken } = res.body.data;
      expect(id).toBe(user.id);
      expect(email).toBe('test@test.com');
      token = userToken;
    });

    it('should be failed to authenticate with wrong email', async () => {
      const res = await request.post('/api/users/authenticate').set('Content-type', 'application/json').send({
        email: 'wrong@email.com',
        password: 'test123',
      });
      expect(res.status).toBe(401);
    });
  });

  describe('Test CRUD API methods', () => {
    it('should create new user', async () => {
      const res = await request
        .post('/api/users/')
        .set('Content-type', 'application/json')
        .send({
          email: 'test2@test2.com',
          first_name: 'Test2',
          last_name: 'User2',
          password: 'test123',
        } as User);
      expect(res.status).toBe(200);
      const { email, first_name, last_name } = res.body.data;
      expect(email).toBe('test2@test2.com');

      expect(first_name).toBe('Test2');
      expect(last_name).toBe('User2');
    });

    it('should get list of all users', async () => {
      const res = await request
        .get('/api/users/')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
      //   console.log(res.body.data.users);
      expect(res.body.data.users.length).toBe(2);
    });

    it('should get single  user info', async () => {
      const res = await request
        .get(`/api/users/${user.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
      //   console.log(res.body.data);

      expect(res.body.data.first_name).toBe('Test');
      expect(res.body.data.last_name).toBe('User');
      expect(res.body.data.email).toBe('test@test.com');
    });

    it('should update user info', async () => {
      const res = await request
        .put(`/api/users/${user.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          ...user,

          first_name: 'Ahmed',
          last_name: 'Ibrahim',
        });

      //   console.log(res.body);
      expect(res.status).toBe(200);
      const { id, email, first_name, last_name } = res.body.data;
      expect(id).toBe(user.id);
      expect(email).toBe(user.email);

      expect(first_name).toBe('Ahmed');
      expect(last_name).toBe('Ibrahim');
    });

    it('should delete user', async () => {
      const res = await request
        .delete(`/api/users/${user.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(user.id);
      expect(res.body.data.first_name).toBe('Ahmed');
    });
  });
});
