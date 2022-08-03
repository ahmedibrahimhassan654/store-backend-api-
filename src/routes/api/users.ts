import { Router } from 'express';
import { createUser } from '../../controllers/userControllers';
const routes = Router();

routes.post('/', createUser);

export default routes;
