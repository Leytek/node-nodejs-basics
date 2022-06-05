import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const copy = async () => {
  const dir = await fs.readdir(__dirname);
  const dirFromName = 'files';
  const dirToName = 'files_copy';

  if(dir.includes(dirToName) || !dir.includes(dirFromName)) {
    throw new Error('FS operation failed');
  }

  const dirFromPath = path.join(__dirname, dirFromName);
  const dirToPath = path.join(__dirname, dirToName);
  fs.cp(dirFromPath, dirToPath, {recursive: true});
};

copy();
