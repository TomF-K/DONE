import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimie from 'express-rate-limit';
import * as dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import path from 'path';
import getDirname from './utils/getDirname.js';
import apiRouter from './routes/api.js';
import userRouter from './routes/user.js';
import { connectDb } from './db/mongoClient.js';
import auth from './middleware/auth.js';
import ErrorMiddleware from './middleware/error.js';

dotenv.config();
await connectDb();

const app = express();
app.set('trust proxy', 1);
/* If behind a proxy/load balancer which is the case with Heroku
  the IP address of the request might be the IP of the load balancer/reverse proxy 
  (making the rate limiter effectively a global one and blocking all requests once the limit is reached) or undefined. 
  To solve this issue, add the following line to your code (right after you create the express application): */
const PORT = 3000;
const __dirname = getDirname(import.meta.url);

/* Protected Routes */
app.use('/api', auth);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
/* Security Middleware */
app.use([
  helmet(),
  cors(),
  xss(),
  rateLimie({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  }),
]);
app.use('/user', userRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, './templates/todo.html'));
});

app.get('/new', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, './templates/new.html'));
});

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening on port http://localhost:${PORT}`);
});
