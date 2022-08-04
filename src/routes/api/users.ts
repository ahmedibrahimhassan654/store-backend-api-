import { Router } from 'express';
import { createUser, getAllUsers } from '../../controllers/userControllers';
const routes = Router();

routes.post('/', createUser);
routes.get('/', getAllUsers);

export default routes;
