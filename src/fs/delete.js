import fs from 'fs/promises';
import path from 'path';
import getModulePaths from '../utils/getModulePaths.js';

const { __dirname } = getModulePaths(import.meta);

export const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.rm(filePath);
  } catch (_) {
    throw new Error('FS operation failed');
  }
};

remove();
