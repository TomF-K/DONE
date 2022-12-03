import { fileURLToPath } from 'url';
import path from 'path';

export default (url) => {
  const __filename = fileURLToPath(url);
  return path.dirname(__filename);
};
