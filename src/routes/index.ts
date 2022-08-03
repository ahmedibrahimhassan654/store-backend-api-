import { Router } from 'express';
import usersRoutes from './api/users';

const routes = Router();

routes.use('/users', usersRoutes);

export default routes;
