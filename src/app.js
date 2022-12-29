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
const PORT = 3000;
const __dirname = getDirname(import.meta.url);

app.use([express.static(path.join(__dirname, 'public')), express.json(), auth]);
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
