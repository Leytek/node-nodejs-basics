import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
  fs.rm(filePath).catch(e => {
    throw new Error('FS operation failed');
  });
};

remove();
