import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/userModel';

const userModel = new UserModel();

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...user },
      message: 'User Created Successfully',
    });
  } catch (error) {
    console.log('from usercontroller create user', error);

    next(error);
  }
};
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userModel.getAllUsers();
    res.json({
      status: 'success',
      length: users.length,
      data: { users },
      message: 'All Users',
    });
  } catch (error) {
    console.log('from usercontroller get all users', error);

    next(error);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.getUser(req.params.id);
    res.json({
      status: 'success',
      data: { ...user },
      message: 'User Found',
    });
  } catch (error) {
    console.log('from usercontroller get user', error);

    next(error);
  }
};
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.id) {
      throw new Error('you should send the user id in the request body to update the user');
    }
    const user = await userModel.updateUser(req.body);

    res.json({
      status: 'success',
      data: { ...user },
      message: 'User Updated Successfully',
    });
  } catch (error) {
    console.log('from usercontroller update user', error);

    next(error);
  }
};
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.deleteUser(req.params.id);
    res.json({
      status: 'success',
      data: { ...user },
      message: 'User Deleted Successfully',
    });
  } catch (error) {
    console.log('from usercontroller delete user', error);

    next(error);
  }
};
