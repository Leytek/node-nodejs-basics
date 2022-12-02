import fs from 'fs/promises';
import path from 'path';
import getModulePaths from '../utils/getModulePaths.js';

const { __dirname } = getModulePaths(import.meta);

export const copy = async () => {
  const src = path.join(__dirname, 'files');
  const dest = path.join(__dirname, 'files_copy');

  try {
    await fs.cp(src, dest, {errorOnExist: true, force: false, recursive: true});
  } catch (_) {
    throw new Error('FS operation failed');
  }
};

copy();
