import { Router } from 'express';
import { createUser, getAllUsers, getUser, deleteUser, updateUser ,authenticate} from '../../controllers/userControllers';
const routes = Router();

routes.route('/').post(createUser).get(getAllUsers);

routes.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

// authentication
routes.route('/authenticate').post(authenticate);
export default routes;
