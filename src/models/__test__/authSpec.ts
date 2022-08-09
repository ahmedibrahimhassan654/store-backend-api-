import UserModel from '../userModel';
import db from '../../DB';
import User from '../../dataTypes/userType';

const userModel = new UserModel();

describe('authinticate method', () => {
  it('should have authinticate method in  user model ', async () => {
    expect(userModel.authenticate).toBeDefined();
  });
});

describe('authinticate method logic', () => {
  const user = {
    email: 'tset@gmail.com',
    first_name: 'test',
    last_name: 'test',
    password: 'test',
  } as User;

  beforeAll(async () => {
    const createdUser = await userModel.create(user);
    user.id = createdUser?.id;
  });

  afterAll(async () => {
    const connection = await db.connect();
    const sql = 'DELETE FROM users';
    await connection.query(sql);
    connection.release();
  });

  it('authinticate method should return the authinticated user', async () => {
    const authinticatedUser = await userModel.authenticate(user.email, user.password as string);
    expect(authinticatedUser?.email).toBe(user.email);
    expect(authinticatedUser?.first_name).toBe(user.first_name);
    expect(authinticatedUser?.last_name).toBe(user.last_name);
  });
  it('authinticate method should return null if user is not found', async () => {
    const authinticatedUser = await userModel.authenticate('ahmed@gmail.com', 'fackePassword');
    expect(authinticatedUser).toBeNull();
  });
});
