import fs from 'fs/promises';
import path from 'path';
import getModulePaths from '../utils/getModulePaths.js';

const { __dirname } = getModulePaths(import.meta);

export const rename = async () => {
  const filesDir = path.join(__dirname, 'files');
  const files = await fs.readdir(filesDir);
  const fileOldName = 'wrongFilename.txt';
  const fileNewName = 'properFilename.md';

  if(files.includes(fileNewName) || !files.includes(fileOldName)) {
    throw new Error('FS operation failed');
  }

  const fileOldPath = path.join(filesDir, fileOldName);
  const fileNewPath = path.join(filesDir, fileNewName);
  await fs.rename(fileOldPath, fileNewPath);
};

rename();
