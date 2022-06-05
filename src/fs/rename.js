import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const rename = async () => {
  const filesDir = path.join(_dirname, 'files');
  const files = await fs.readdir(filesDir);
  const fileOldName = 'wrongFilename.txt';
  const fileNewName = 'properFilename.md';

  if(files.includes(fileNewName) || !files.includes(fileOldName)) {
    throw new Error('FS operation failed');
  }

  const fileOldPath = path.join(filesDir, fileOldName);
  const fileNewPath = path.join(filesDir, fileNewName);
  fs.rename(fileOldPath, fileNewPath);
};

rename();
