import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const copy = async () => {
  const dir = await fs.readdir(_dirname);
  const dirFromName = 'files';
  const dirToName = 'files_copy';

  if(dir.includes(dirToName) || !dir.includes(dirFromName)) {
    throw new Error('FS operation failed');
  }

  const dirFromPath = path.join(_dirname, dirFromName);
  const dirToPath = path.join(_dirname, dirToName);
  fs.cp(dirFromPath, dirToPath, {recursive: true});
};

copy();
