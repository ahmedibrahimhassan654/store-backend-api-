import db from '../DB';
import User from '../dataTypes/userType';

class UserModel {
  //create new user

  async create(user: User): Promise<User | undefined> {
    try {
      //open connection to database
      const client = await db.connect();
      //run query
      const query =
        'INSERT INTO users (email, first_name, last_name, password) VALUES ($1, $2, $3, $4) RETURNING id,email, first_name, last_name';
      const result = await client.query(query, [user.email, user.first_name, user.last_name, user.password]);
      //close connection
      client.release();
      //return result
      return result.rows[0];
    } catch (error) {
      console.log(error);
      console.log('Error creating user');
      throw new Error(`Unable to create (${user.first_name}): ${(error as Error).message}`);
    }
  }
  async getAllUsers(): Promise<User[]> {
    try {
      //open connection to database
      const client = await db.connect();
      //run query
      const query = 'SELECT * FROM users';
      const result = await client.query(query);
      //close connection
      client.release();
      //return result
      return result.rows;
    } catch (error) {
      console.log(error);
      console.log('Error getting all users');
      throw new Error(`Unable to get all users: ${(error as Error).message}`);
    }
  }
}
//   async getUser(id: string): Promise<User> {
//     const client = await db.connect();
//     const query = 'SELECT * FROM users WHERE id = $1';
//     const result = await client.query(query, [id]);
//     client.release();
//     return result.rows[0];
//   }

//   async getUsers(): Promise<User[]> {
//     const client = await db.connect();
//     const query = 'SELECT * FROM users';
//     const result = await client.query(query);
//     client.release();
//     return result.rows;
//   }

//   async updateUser(user: User): Promise<User> {
//     const client = await db.connect();
//     const query = 'UPDATE users SET email = $1, first_name = $2, last_name = $3, password = $4 WHERE id = $5 RETURNING *';
//     const result = await client.query(query, [user.email, user.first_name, user.last_name, user.password, user.id]);
//     client.release();
//     return result.rows[0];
//   }

//   async deleteUser(id: string): Promise<User> {
//     const client = await db.connect();
//     const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
//     const result = await client.query(query, [id]);
//     client.release();
//     return result.rows[0];
//   }

export default UserModel;
