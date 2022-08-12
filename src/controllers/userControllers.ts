import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/userModel';
import jwt from 'jsonwebtoken';
import config from '../middleware/config';
import Error from '../utils/errorHandler';
import asyncHandler from 'express-async-handler';

const userModel = new UserModel();

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await userModel.getAllUsers();
  res.status(200).json({
    success: true,
    data: users,
  });
});

export const getUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await userModel.getUser(req.params.id);
  if (!user) {
    const error: Error = new Error(`User with id ${req.params.id} not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});
export const updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.id) {
    throw new Error('you should send the user id in the request body to update the user');
  }
  const user = await userModel.updateUser(req.body);
  if (!user) {
    const error: Error = new Error(`User with id ${req.params.id} not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await userModel.deleteUser(req.params.id);
  if (!user) {
    const error: Error = new Error(`User with id ${req.params.id} not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: {},
  });
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.authenticate(email, password);
    const token = jwt.sign({ user }, config.tokenSecret as unknown as string);
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'the username and password do not match please try again',
      });
    }
    return res.json({
      status: 'success',
      data: { ...user, token },
      message: 'user loged in  successfully',
    });
  } catch (err) {
    return next(err);
  }
};
