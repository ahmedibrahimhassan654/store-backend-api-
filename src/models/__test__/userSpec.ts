import UserModel from '../userModel';
import db from '../../DB';
import User from '../../dataTypes/userType';

const userModel = new UserModel();

describe('user Model', () => {
  describe('test user methods if exist', () => {
    it('should have get all users methods', () => {
      expect(userModel.getAllUsers).toBeDefined();
    });

    it('should have get single user  methods', () => {
      expect(userModel.getUser).toBeDefined();
    });
    it('should have create user  methods', () => {
      expect(userModel.create).toBeDefined();
    });
    it('should have update user  methods', () => {
      expect(userModel.updateUser).toBeDefined();
    }),
      it('should have delete user  methods', () => {
        expect(userModel.deleteUser).toBeDefined();
      });
    it('should have authinticate methods', () => {
      expect(userModel.authenticate).toBeDefined();
    });
  });

  describe('test user Model Logic', () => {
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
    it('get all users method should return all users', async () => {
      const allUsers = await userModel.getAllUsers();
      expect(allUsers).toBeDefined();
      expect(allUsers.length).toBe(1);
    });
    it('get single user method should return single user', async () => {
      const singleUser = await userModel.getUser(user.id as string);
      expect(singleUser).toBeDefined();
      expect(singleUser?.email).toBe(user.email);
      expect(singleUser?.first_name).toBe(user.first_name);
      expect(singleUser?.last_name).toBe(user.last_name);
    });
    it('create user method should return created user', async () => {
      const createdUser = await userModel.create({
        email: 'tset2@gmail.com',
        first_name: 'test2',
        last_name: 'test2',
        password: 'test2',
      } as User);
      expect(createdUser).toBeDefined();
      expect(createdUser).toEqual({
        id: createdUser?.id,
        email: 'tset2@gmail.com',
        first_name: 'test2',
        last_name: 'test2',
      } as User);
    });

    it('should get all users available in DB and should equal 2 users', async () => {
      const allUsers = await userModel.getAllUsers();
      expect(allUsers).toBeDefined();
      expect(allUsers.length).toBe(2);
    });
    it('should get single user when pass user id in req.params', async () => {
      const singleUser = await userModel.getUser(user.id as string);
      expect(singleUser).toBeDefined();
      expect(singleUser?.id).toBe(user.id);
      expect(singleUser?.email).toBe(user.email);
      expect(singleUser?.first_name).toBe(user.first_name);
      expect(singleUser?.last_name).toBe(user.last_name);
    });
    it('should update user and return new updated user attriputes', async () => {
      const updatedUser = await userModel.updateUser({
        ...user,
        email: 'updateduseremail@gmail.com',
        first_name: 'updatedtestuser',
        last_name: 'updatedlatname',
      });
      expect(updatedUser).toBeDefined();
      expect(updatedUser.id).toBe(user.id);
      expect(updatedUser.email).toBe('updateduseremail@gmail.com');
      expect(updatedUser.first_name).toBe('updatedtestuser');
      expect(updatedUser.last_name).toBe('updatedlatname');
    });

    it('should delete user from database', async () => {
      const deletedUser = await userModel.deleteUser(user.id as string);
      expect(deletedUser).toBeDefined();
      expect(deletedUser.id).toBe(user.id);
    });
  });
});
