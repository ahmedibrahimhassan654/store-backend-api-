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
