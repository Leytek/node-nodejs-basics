import fs from 'fs/promises';
import path from 'path';
import getModulePaths from '../utils/getModulePaths.js';

const { __dirname } = getModulePaths(import.meta);

export const list = async () => {
  const filesDir = path.join(__dirname, 'files');

  try {
    const files = await fs.readdir(filesDir);
    console.log(files);
  } catch (_) {
    throw new Error('FS operation failed');
  }
};

list();
