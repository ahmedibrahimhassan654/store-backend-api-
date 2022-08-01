import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
import ratelimit from 'express-rate-limit';
const app = express();

// Load env vars
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 5000;
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('common'));
}

//helmet middleware for security
app.use(helmet());

//add midelware for parsing json
app.use(express.json());

//add rate limit middleware

app.use(
  ratelimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 2, // limit each IP to 3 requests per windowMs
    message: 'Too many requests from this IP, please try again after a miniute',
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;
