import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import getDirname from './utils/getDirname.js';
import apiRouter from './routes/api.js';
import { connectDb } from './db/mongoClient.js';

dotenv.config();
await connectDb();

const app = express();
const PORT = 3000;
const __dirname = getDirname(import.meta.url);

app.use([express.static(path.join(__dirname, 'public')), express.json()]);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, './templates/todo.html'));
});

app.get('/new', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, './templates/new.html'));
});

app.listen(PORT, () => {
  console.log(`server is listening on port http://localhost:${PORT}`);
});
