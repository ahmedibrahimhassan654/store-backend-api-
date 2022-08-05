import { Router } from 'express';
import { createUser, getAllUsers, getUser, deleteUser, updateUser } from '../../controllers/userControllers';
const routes = Router();

routes.route('/').post(createUser).get(getAllUsers);

routes.route('/:id').get(getUser).put(updateUser).delete(deleteUser);
export default routes;
