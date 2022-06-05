import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const list = async () => {
  const filesDir = path.join(_dirname, 'files');
  const files = await fs.readdir(filesDir).catch(e => {
    throw new Error('FS operation failed');
  });

  console.log(files);
};

list();
