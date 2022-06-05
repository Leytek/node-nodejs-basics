import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const create = async () => {
  const filesDir = path.join(_dirname, 'files');
  const files = await fs.readdir(filesDir);
  const fileName = 'fresh.txt';

  if(files.includes(fileName)) {
    throw new Error('FS operation failed');
  }

  const filePath = path.join(filesDir, fileName);
  fs.writeFile(filePath, 'I am fresh and young');
};

create();
