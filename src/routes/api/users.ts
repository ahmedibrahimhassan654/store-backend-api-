import { Router } from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser, login } from '../../controllers/userControllers';
import protect from '../../middleware/authonticateMiddleware';

const routes = Router();

routes.route('/').post(createUser).get(protect, getUsers);

routes.route('/:id').get(protect, getUser).put(protect, updateUser).delete(protect, deleteUser);

// authentication
routes.route('/login').post(login);
export default routes;
