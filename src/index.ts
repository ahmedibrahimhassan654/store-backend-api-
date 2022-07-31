import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
const app = express();

// Load env vars
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 5000;
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;
