import express from 'express';
import path from 'path';
import getDirname from './utils/getDirname.js';

const app = express();
const PORT = 3000;
const __dirname = getDirname(import.meta.url);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, './templates/todo.html'));
});

app.listen(PORT, () => {
  console.log(`server is listening on port http://localhost:${PORT}`);
});
