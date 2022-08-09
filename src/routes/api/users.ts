import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  authenticate,
} from '../../controllers/userControllers';
import authentication from '../../middleware/authonticateMiddleware';

const routes = Router();

routes.route('/').post(createUser).get(authentication, getAllUsers);

routes.route('/:id').get(authentication, getUser).put(authentication, updateUser).delete(authentication, deleteUser);

// authentication
routes.route('/authenticate').post(authenticate);
export default routes;
